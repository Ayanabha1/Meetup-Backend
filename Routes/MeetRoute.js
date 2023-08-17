const router = require("express").Router();
const { date } = require("joi");
const Meetings = require("../Models/Meetings");
const validateUser = require("./validateUser");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const io = router.get("io");

const generateRoomName = async () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphanumeric = "0123456789abcdefghijklmnopqrstuvwxyz";

  const randomChar = (characters) =>
    characters.charAt(Math.floor(Math.random() * characters.length));

  let randomString = randomChar(alphabet); // Start with an alphabet

  for (let i = 0; i < 9; i++) {
    // Append 9 more characters from the alphanumeric set
    randomString += randomChar(alphanumeric);
    if (i === 2 || i === 5) randomString += "-";
  }

  // check if a meeting exists with the generated meeting_id
  const stringExists = await Meetings.findOne({ meeting_id: randomString });
  if (stringExists) {
    console.log("Meeting id exists , generating new one");
    return generateRoomName();
  }

  return randomString;
};

const generateSessionToken = async (data) => {
  const token = await jwt.sign(
    {
      data,
    },
    process.env.JWT_SECRET
  );
  return token;
};

router.get("/get-all-meetings", async (req, res) => {
  try {
    const allMeetings = await Meetings.find();
    res.send({ meetings: allMeetings });
  } catch (error) {
    res.status(400).send({ message: "Internal server error" });
  }
});

router.get("/create-meeting", validateUser, async (req, res) => {
  const userId = req.body.userId;
  const meeting_id = await generateRoomName();
  const session_token = await generateSessionToken();
  const date = new Date();
  try {
    const newMeeting = new Meetings({
      meeting_id: meeting_id,
      admin_id: userId,
      is_active: true,
      participants: [],
      active_participants: [],
      session_token: session_token,
      date: date,
    });
    const savedMeeting = await newMeeting.save();
    res.send({
      meeting_id: meeting_id,
      session_token: session_token,
      message: "success",
    });
  } catch (error) {
    res.status(400).send({ message: "Internal server error" });
  }
});

router.post("/join-meeting", validateUser, async (req, res) => {
  const meeting_id = req.body.meeting_id;
  const userId = req.body.userId;
  try {
    // check if there is an active meeting with given meeting_id
    const target_meeting = await Meetings.findOne({
      meeting_id: meeting_id,
      is_active: true,
    });
    if (target_meeting) {
      await Meetings.updateOne(
        { _id: target_meeting._id },
        {
          $push: { active_participants: userId },
          $addToSet: { participants: userId },
        }
      );
      res.send({ session_token: target_meeting.session_token });

      const new_meeting_history = {
        meeting_id: meeting_id,
        session_token: target_meeting.session_token,
        start_time: new Date(),
      };
      await User.updateOne(
        { _id: userId },
        { $push: { meetings: new_meeting_history } }
      );
    } else {
      // No active meeting with the meeting_id
      res.status(400).send({ message: "No active meeting found" });
    }
  } catch (err) {
    res.status(400).send({ message: "Internal server error" });
  }
});

const leaveMeeting = async (uid, st) => {
  if (!uid || !st) {
    return;
  }
  let participants_no = 1;
  try {
    const target_meeting = await Meetings.findOne({
      session_token: st,
    });
    let active_participants = target_meeting?.active_participants;
    participants_no = target_meeting?.participants?.length;
    const index = active_participants?.indexOf(uid);
    if (index > -1) {
      active_participants?.splice(index, 1);
    }

    if (active_participants.length === 0) {
      // last participant left (make the meeting inactive)
      await Meetings.updateOne(
        { session_token: st },
        {
          $set: { active_participants: [], is_active: false },
        }
      );
    } else {
      await Meetings.updateOne(
        { session_token: st },
        {
          $set: { active_participants: active_participants },
        }
      );
    }

    console.log(uid, "Left the meeting");
  } catch (error) {
    console.log(error);
  }

  try {
    const target_user = await User.findOne({ _id: uid });
    if (target_user) {
      let meetings = target_user?.meetings;
      let target_meeting = meetings?.filter((m) => m.session_token === st)[0];
      target_meeting.end_time = new Date();
      target_meeting.participants = participants_no;
      await User.updateOne(
        { _id: uid, "meetings.session_token": st },
        {
          $set: {
            "meetings.$.end_time": new Date(),
            "meetings.$.participants": participants_no,
          },
        }
      );
    }
  } catch (error) {
    console.log("Error generated while removing a user from meeting : ", error);
  }
};
router.leaveMeeting = leaveMeeting;

module.exports = router;
