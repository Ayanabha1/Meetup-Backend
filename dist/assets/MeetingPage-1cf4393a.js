import{j as e,r as a,a as Z,b as P,u as ae,L as ce,A as re}from"./index-657572e1.js";import{l as ie}from"./logo-a58ef9dd.js";import{p as M}from"./person2-d18a5424.js";import{A as C,a as de,u as me,b as xe,c as ue,p as ge,d as O,l as pe}from"./index-70ed0965.js";const fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cHBhUOMhxnH8MAAAEbSURBVFjD7ZcxjsIwEEUNhSu4BRRcAUFPx31ygCTcBU4R0dDScACSEgmJlnlbjBA22qyyZG0hrX8VufnP82fkiTFJxhjEWthsoGkIrrqGskSsfQJQluGNX1UUDkBd6+F8Hr7ai8WjEg6AKlrkjt8wlmmbEsBnA8B+33/cqqpHBUT637HDdKUxbCft0gM/Z9wLoFsP/EF0qQcSwAcANI0xuiyENkSWS/3yFpKi+M2cw2AAWYbcbm8/EZLnDpW1CvFYzXz5NxiNYLt9/3E6n5E895bS1nK9ACCTCRyPenq9wnodNi8HAFYruFz05HSC2SyouQsAWQb3u2a32yHjcXBzHwBARP8fhvFG92keIe/vAaoKDgdkOo1u/m/0BSbW5HbUkYsSAAAAAElFTkSuQmCC",be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAgCAYAAAD9oDOIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIXSURBVEhL7dbNi05RHMDxO3cQJZJYUCbJZhYkLMwfQCkvZZKFjZeSFRYoWQjF1tgRZaPEgjTkrSwoycaGhaQGiTJsvL+M7/f0O+OamTvP0/TYzWfz6/zOy3PuOfc55xaj6cIFvMF39OEMOhFNmteG4xgIP9GPKA78wE5E8+bsh50/YgemwvxMHMA3/EY3UodG5uAzvmAZIv2P9fBHX2MyIl1vN+xwEpEa0TXYbg0iNaiMOGgRjDeREjVuwLgYKVExbNBpMH5AStRw44zTkRIVwwZthfFBW2980NYrD+MQojxmJc5iK8rtOIgJsPIrjI1Onykw5vYd2IJtKN+hHbNh5QsYl8JYJx+Lz2GcC+NbFOfhEZYPXAez/AozYG6oBfDMdZZ5MvtgvyMoNsPCJaQeuAhzDzAfkU6W4BmsPwZzXj+PYG4FCq8Kl+AX8iN7/D2EjbzwbuMc7sF25q8g78MGmHsMN8xcsQcmnyCfj27EUXiuWpd5s3o75M7z4DpatxbmEhvcghX3kddJE7EcK+EpnwfTQjyF/U4h0n95U+ZHfgnXujpA1STsQn6Kq6i+gm0RE9f3NDbBsrdlL5yN18csONvVcBJe0z3YC78N0iB1VuEO7ORMhvJj4jJclujSPDdhI+7CwXzt1qG65mPmW+Cg/qUjNar/ckqN6DrcmMxPIGf6CZHqf48TiC6N+a46SCP+naNLRVH8AU3hGYaySIfTAAAAAElFTkSuQmCC",v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cHBhQMHYRCKi8AAAPDSURBVFjDxVdNSFRRFP7O/GUzYijYJjD6gUowhoLAZQubyhlhggmZRb/QJpJauDM0opWhIO5bVGBFRWBRgQZBC0FCijZJRTAhkzop0/RCnfu1OI1PmxmdNyodGN57937nnO9+995z7wD/2aQcJ7K6GojFgIYGbXj3DvLggcjMzIYzJltbyR8/mGepFHny5AYnj0bJbJZcWCD7+2nCYZpIhOzv17ZslmxpKex78SJ56xYpZakOsqKC/PaNNIZsbs7rN+Gw9iUSNJs2Le9rb1eVJiZofL4yCTQ3a5CBgeKYu3cVc+yY3Xb5srZNT5PB4L8+rtIp7N2rz9evi2OGhvS5b19OdqCnB5iZAUMhkbGx8glw82Z9SaWKg379UqzfT547B/T1Aek0ePSouEZHC3l4SlfAgUk0CgSDSuj4cXGNjBSDOpgCJ3bgAPD7N9DSIvLmzUrIdSZQV6dPywIiEZFXr1bzKEqAPHuWbGwsNTVNLAbcuKFfPT0iw8Map7GRPHPG0TjIQECLigbRBB0dup1aW/Px0Sg5N7dYFE1Hh903PKyxAoHSFaDHA7hcwOpFgyYSAQYGABK4cycf4fMBLpfGdDAFpcl+5Ajk/n3A7QZOnQKePnUaowgBywJI0O9fbJK/exzV1Zq8qQny5Ang8QDxuMi9e2BlpWIzGZtlIKDqWJaz0XFqikwm7dGGQjrBjx6Rhw+TmYweQPG4jXn4UNdAU5PdNjlJfv9ehrwvX2rC+nr99nrJr1/1wMlkdGGdPm0Tjsc1+adPNF6v+uzfrzGeP3c4BQAwOKiRz58HAHHNzwO9vYAI4PcDHz4A6bTugNu3dQEuLEAuXFAsAOQIOl8boKmqIqenaX7+JHftojl0iJydVQWSyfwLSSJBEwrZiuzcSVoWOTVFU1XlmICSaGvT4O/f6y3IGPLSJRqfjzxxguzsJK9fp4nFuHhYATSVleTYmE5JW1tZyXUUIjTPntmjzFW6lUjX1dG8fav4x4/LvgFpsIYGXcU5S6fJri5y27Z87Pbt5LVrisntloqKNYy+vt6e66tX9VqVydhkPn4kX7ygGRrS96Ukr1wh3e41JN+zh5yY0IBdXfYoa2v1TBgdXVb7aVnkyAhNezvN1q1lJ9Yku3eTicRqc07j9dJMTurPsz4XGy02nz/r6u3uXl2pZHJptVw7Abrd5ODgUtk3msAy6USyWSAczk+0YwdQU1PA3aP9Bw/m96VSIl++rIMqwaAWIKdmTKH/ASsqUNjGx8GbNyFbtjhjPjsLGR9fswIbbX8Aq+5LaRDrUJYAAAAASUVORK5CYII=",he="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEQSURBVFiF7dbNLgNRGMbx9wi668KKkHATXBNbC3YNupJwAcK9uAKxsqlFgxBhqaSRyM+iIxlJU8N0QnT+y5NnzvO8cz7eE1FTM/GggQPcKE8HLcwU9U84jIjNiOhHxF3JehYjohERrZRSu9AXuMcz5kuaB5bxis4ITRMbOMNpZL+uW9Y8Z/CA3pDxNZygl1+zSgPkqj3PeT7hGI9VBnjBUWb2wQW2MZfpulUF6A+pdnWIrrIAb9mc62iO0FUboICuC1PjMv4pdYDKAny1CfPCf3cMf/0i+hNX8bea0a1BO14Yg/mKQTu+HKH51I4T9iNiK8bzIFmKiNmI2Ekp7RZN3UAb18pzhT1MlyykpmaCeAenJJm9Y9ALgwAAAABJRU5ErkJggg==",we="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cHBhQNLMyHG1QAAALzSURBVFjD3Vc/LLtRFD3vqzSViFQkIpHQMHSgpBIDiSAIwmolIRJDKwakFgkTujQMbOLPJGoTi5DWaEGDSWJALE0ZUG298xueaGnpn59U4i5fvvfuu+fcc9979/uAv2ak0UjZ0UEK8QvgmkZ6PCRJ2d7+CwQcDpIkr69JozHL4FYr+fJCSkl2dWUZ3GAgT09V9i5XVsEVgYUFBX5+TubmZhhE08jRUfLsjIxEmNTu7ymrqki7/X1IXl5SjoxkdAIonc7koLEWCJD19eTdXfzc7Gya2RcXk6+vZDBIdnaSOl1qpDc3FaDXS6nXU/b0qI0YiVAWFSXGMpsp29o+DXZ1qUA7O6kr1ten1jw8kCZTNNburhpXJ4EsLycHBsj1dfLmJlouRSJHrcrLgwDAx8fUFDOZgMVF9WK3C+3qKjr59KRiTUyQS0tAWdnn1YAQQEEBAGhp1QqAKs/aGpCfD2xtCW1t7YODqK5Wz+ZmBe73g9vbgM0GVFYCbnese066BIDxcaCxEbi5AYaH4+cNBsV0bw8YG4Pw+YQmZbR0JGLOSFoESKsVmJ5WMg4NCeH3f+3t8wnt5CRZzJRLQBoMwOoqoNcDCwtC7O6mr95/EADm5wGLBbi4ACYnfwI8ZQKqtdpsQDgM9vcL8fycNQJkYSHEyoo6OlNTQjs6Si20xUJZU0Nq32KksAmXl4GSEuDwEHA6k/sHgwAA0dYGHB8Dfj+lxwOxvw8cHKhE4iTu7VW30+bmx/HEt923ikm3W8U6OCCvruL7hJTq0dsbLYEIhdTyvLyo9CYTRMxtJ2Juu2/trR0Ll0sIkwmoqAAGB4GNDeD2NqpAIIBYMMUsGCRra0mdjvR6E6nyZebU6cju7mgzKi1N7Gc2k62tcS2bXFxUEs3MvMuYsc3NpaZWXAYtLWRDAxkOpw8aiZA+n/pA0dLuMW8k/sK3Xcbgsr1dbcRQiLKuLsuZG43qZ4IkHY6sgisCTU0K3OPJeAP9CAmZn/8r4L9p/wA9gf68xQQy0AAAAABJRU5ErkJggg==",je="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cHBhQQD5GMBjoAAAFdSURBVFjD7VdLcoJAFOzBHABFOQfurXIvG4oq9nIzT+HOFR6AFXAGPwwXYDoLElH5xUhSqUivBnivXzNdFD3Aq0Pc36CaTgHLAsbj28o8B/d7oR0ObYRUpgmxWICj0e0TKYEwFNrp1NxMxyGlZBNUHHe9EZkkjf2UknSchkbDaB1OkoyiTgEqjts5pCQN47P+reyczyF0vbjYbMDttmpBEHS7ulwCNRaI1QpYrwFdLyze7e6Ue1651Z7XPegxNPFrfQ96FIOAUoDI89p1X+jipzLN4hOKIqrZrO/5P80/YMCAfwAq0yzCRJJQmeav85OuW4YG1+1dQAN/+S+4DhCVPNeHgnr+P/Q3fFUBZSiFlJelsG2qu8pnzwXCtst1mlYbvxLLnz4XVGP5xQIhzmfA94Esa2QXZOeesq0mywDfL2Z9UNbtBGBZ4GRStSAIhHY8fs+CNAXC8Hr4AAB4B6h7nQautm+cAAAAAElFTkSuQmCC",Ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cHBhQUG+86F0MAAALDSURBVFjD7VXNK/RRFH4O0xjCyFfyFYuJMdkgyQILURYKG/4Bq1GksBQ7G+SfsJCFrEgklO+JFWFsxORrzCSmMfd5F7d5x8cP88bunWdz+93znHPPec753QvEEEMM/zskWiKVyQTY7ZCKCsBmA9LSAKsVIAGvF/B6weNjyN4ecHQkEgr9ODuq5GSys5OcmSEfHxk1fD5yeprs6CATE/9ZATIjA+jtBZxOXaneBU5Pwf19yOEheH+vKxeBpKUB6elAeTlQUQEUF0ei3d4Ck5PA1JSI1/t1xRShcjpJvz9Szdoa2dND5uVFr1xhIdnfT25tReI8PJDd3d84jo1pslLk/DxZU/PjNrK+nmphIZLIyMgnxJYWTQgEyPb27wNbLFQFBbrar/us+V1dZDCo62tsNCCE5errMw5gt5MDA1SLi6TXazh4ammJHBoiHQ7jGIODmrux8c6Ql6dlf3igSkj42Jr8fK3M+0k/Pyfdbt3f1wgGqWy2jwkkJur5UorMzQWAOG1xOAARYHdX4gKBj7kHg4DZDIRCQFsbmJMjkpoqUlQkUlwsYrWC2dlgayvw/AyYTDC4B0SenoDtbUAELCuLJCAWi6b4/UbSSZzHA3g8QHw8uL6uv99zrq+BlRXAYgF8PsDtNp4Gn087JCVFEsDFhV5LS417l54OpKQASgFGCoWzCIWAlxfAbAazsgw5LCnR6+XlqwPi48mbG92/2lq9Z7GQDQ3k8DDVyYm2zc3hG5Czs5p7dqZ96+qozGY9S9XV2nZ3p6/2N47Dw9ro8ZDr6+TT09vB2tmh+qSq13FUZubbC4gkHx+plpfJqyv9PTpqkHlSkv7FwgiFSJeLHB+nam4mJfqHiyJUTU3kxAR5cKCnPozVVark5L9de+8IVlZCrFbA5RK5vY320K9VycqCVFXpt2NzU0Sp34gbQwwxxPAr+AOafXFobMli6AAAAABJRU5ErkJggg==",Se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cHCBMPOAH7zB0AAAPeSURBVFjD5VdNSFRRFP6ujeNPRUqaOebCAicldF2QpkhBP0gE1UaCJHcGhZvAIKggCKGFuHETLUKodD1oTQyualELGWhKKs0ZGTGTSu2p92txZub1nPfezGg77+bBO+d833fOeffc+4DtvlQuzuTOncCpU0BTE1BVBVRWAiQYi0HNzADBIDA2ptTS0n9VSfr95NAQubzMjGtpiXzyhKyp2XIFyKIioK8PuHYN8Hjk7c+f4Ogo1MePwOysOPp8UH4/0NYGFBeLn2GA/f3ArVsqzzA2kXVVFfXbt2Zm79+T7e3UBQVugsmLF8lw2IwLhajLy3Mk9/nI6WkBWFkhu7rIvLys47XHQ964Qa6ukiT1p0/UZWVZkhcVkW/eCHk8Th49mnP5UlitreT374L1+jV1fn4WQQMDZuabJzer0daWqgQfPMjgXFtrOnd1bZXcxO3pEczlZerqapfsnz6Vnr17t7Hn5JUrZCBA+v3ORA0N1C9fkpcvW9/n55ORiGAPDjoE79olZSfJ9vZ0++io2KJROxHUjY3Uc3PiMzycbu/oENviIrXXa5P9+fNuDuThw2QsZifCSv71q90QsiSoT560EfDokQA8f+7cIr+fnJkRv9lZsr7eSj41RR465NyiZBXv30+++6fPBw6IVyTiBKDUhw9AaysQjQIVFUAoBBUMQpWVAdPTQEuLUpOTcARIYvt8NgIqK+WZGK8ZRczNAXv3AqWlEpOBHAAYi1m5LALW1xMMmU9IFhaaZwMAejyA84g21Sd2FrVOF8Bk5qY6W27d2AiMjUnmsRgQj0sLXr0i6+vdFSSxk5WwVODbN3m67fMEearnx4/L3SD5TWQSkcBW0agN+NmzskV+/SILC9PtDQ3WrXbwYMrGujrLFtW1tenxe/aQhiE+LS3pAlhcLJcJkrxwId0eCNiR24t49izdfvWq2BYWHA8l8vFjcZqYIHfssNouXaJ+8cLtpiPDamSE+tw5a/YFBeTnz4I9MABngJoa8s8fcezuxn9a1L29ZnvdP3JQ9/WJAMMgm5u3TM7Tp8m1NcG8cycLtV4vGQpJwPy87QeTNfmZM+TiomAFAhvb6iJi3z7qyUkJXF0lb96k/mfwZJXE7dvk+rpghMNkaWlu6nV5uVkJkoxEqDs6qHfvds64pITs7CS/fDHjAgE3cvdrufZ6oe7eBa5fB5KzwTDA8XGocBiIxwGlZAgdOQIcO5Ya0fz9G+rhQ+DePaUSY37TvdTV1dSDg+SPH5l/TObnyf5+cv/+bLBz+zXTXi/Q1AR14oQc3xUVgNZSiakpIBgEx8dV3traljLeVusv57GknXgOexQAAAAASUVORK5CYII=",ve=({tracks:c,participants:o,memberDetails:r,name:b})=>{var w,i,p;const f=l=>{const x=r==null?void 0:r.filter(N=>N.uid===l)[0];return x==null?void 0:x.name};return e.jsxs("div",{className:"flex justify-center flex-wrap gap-[30px] h-[95%] w-[100%] overflow-hidden mr-[10px]",children:[o==null?void 0:o.map(l=>l.videoTrack?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"min-w-[150px] max-w-[470px] sm:w-[48%] object-contain rounded-[7px] overflow-hidden relative",children:[e.jsx(C,{videoTrack:l.videoTrack,className:"h-full w-full"},l.uid),r.mic__muted&&e.jsx("img",{className:"absolute left-[10px] bottom-[10px] z-50 bg-[#FC5E5C] w-[30px] h-[30px] p-[5px] rounded-[50%]",src:v}),e.jsx("span",{className:"absolute right-[10px] bottom-[10px] text-black font-semibold bg-[rgba(255,255,255,0.3)]  px-[12px] py-[2px] rounded-[8px]",children:f(l.uid)})]})}):e.jsxs("div",{className:"min-w-[150px] max-w-[470px] sm:w-[48%] object-contain flex justify-center items-center bg-black rounded-[7px] overflow-hidden relative",children:[e.jsx("img",{src:de,className:"w-[25%] h-[25%] object-cover rounded-[50%]"}),r.mic__muted&&e.jsx("img",{className:"absolute left-[10px] bottom-[10px] z-50 bg-[#FC5E5C] w-[30px] h-[30px] p-[5px] rounded-[50%]",src:v}),e.jsx("span",{className:"absolute right-[10px] bottom-[10px] text-black font-semibold bg-[rgba(255,255,255,0.3)]  px-[12px] py-[2px] rounded-[8px]",children:f(l.uid)})]})),c&&((w=c[1])!=null&&w.muted?e.jsxs("div",{className:"min-w-[150px] max-w-[470px] sm:w-[48%] object-contain flex justify-center items-center bg-black rounded-[7px] overflow-hidden relative",children:[e.jsx("img",{src:M,className:"w-[25%] h-[25%] object-cover rounded-[50%]"}),((p=c[0])==null?void 0:p.muted)&&e.jsx("img",{className:"absolute left-[10px] bottom-[10px] z-50 bg-[#FC5E5C] w-[30px] h-[30px] p-[5px] rounded-[50%]",src:v}),e.jsxs("span",{className:"absolute right-[10px] bottom-[10px] text-black font-semibold bg-[rgba(255,255,255,0.3)]  px-[12px] py-[2px] rounded-[8px]",children:[b," (You)"]})]}):e.jsxs("div",{className:"min-w-[150px] max-w-[470px] sm:w-[48%] object-contain rounded-[7px] overflow-hidden relative",children:[e.jsx(C,{videoTrack:c[1],className:"h-full w-full"}),((i=c[0])==null?void 0:i.muted)&&e.jsx("img",{className:"absolute left-[10px] bottom-[10px] z-50 bg-[#FC5E5C] w-[30px] h-[30px] p-[5px] rounded-[50%]",src:v}),e.jsxs("span",{className:"absolute right-[10px] bottom-[10px]  text-black font-semibold bg-[rgba(255,255,255,0.3)]  px-[12px] py-[2px] rounded-[8px]",children:[b," (You)"]})]}))]})},H=({videoTrack:c,videoMuted:o})=>!o&&c?e.jsx(C,{videoTrack:c,className:"h-full w-full"}):e.jsx("div",{className:"h-full w-full object-contain flex justify-center items-center overflow-hidden",children:e.jsx("img",{src:M,className:"w-[25%] h-[25%] object-cover rounded-[50%]"})}),Ce=({tracks:c,participants:o,memberDetails:r,name:b})=>{var N;const[f,w]=a.useState(1),[i,p]=a.useState(null),l=d=>{const h=r==null?void 0:r.filter(u=>u.uid===d)[0];return h==null?void 0:h.name},x=d=>{p(d)};return a.useEffect(()=>{w(o.size),console.log(o.length)},[o]),e.jsxs("div",{className:"flex flex-col h-[95%] w-[100%] ",children:[e.jsx("div",{className:"meet-spotlight w-[100%] h-[70%] relative",children:i===null?e.jsxs(e.Fragment,{children:[e.jsx(H,{videoTrack:c&&c[1],videoMuted:c&&((N=c[1])==null?void 0:N.muted)}),e.jsxs("span",{className:"absolute right-[10px] bottom-[10px] text-black font-semibold bg-[rgba(255,255,255,0.3)] text-[12px] px-[5px] py-[2px] rounded-[5px]",children:[b," (You)"]})]}):e.jsxs(e.Fragment,{children:[e.jsx(H,{videoTrack:i.videoTrack,videoMuted:!i.videoTrack}),e.jsx("span",{className:"absolute right-[10px] bottom-[10px] text-black font-semibold bg-[rgba(255,255,255,0.3)] text-[12px] px-[5px] py-[2px] rounded-[5px]",children:l(i==null?void 0:i.uid)})]})}),e.jsxs("div",{className:"meet-others h-[30%] flex mt-[20px] overflow-scroll",children:[i!==null&&e.jsxs("div",{className:"h-[100%] min-w-[30%] max-w-[30%] mr-2 overflow-hidden rounded-[5px] relative",onClick:()=>x(null),children:[e.jsx(C,{videoTrack:c&&c[1],className:"h-full w-full"}),e.jsx("span",{className:"absolute right-[10px] bottom-[10px] text-black font-semibold bg-[rgba(255,255,255,0.3)] text-[12px] px-[5px] py-[2px] rounded-[5px]",children:"You"})]}),o==null?void 0:o.map((d,h)=>i!==d&&e.jsxs("div",{className:"h-[100%] min-w-[30%] max-w-[30%] mr-2 overflow-hidden rounded-[5px] relative",onClick:()=>x(d),children:[e.jsx(C,{videoTrack:d.videoTrack,className:"h-full w-full"}),e.jsx("span",{className:"absolute right-[10px] bottom-[10px] text-black font-semibold bg-[rgba(255,255,255,0.3)] text-[12px] px-[5px] py-[2px] rounded-[5px]",children:l(d==null?void 0:d.uid)})]},h))]})]})},ye=({tracks:c,participants:o,memberDetails:r,name:b})=>window.innerWidth>=500?e.jsx(ve,{tracks:c,participants:o,memberDetails:r,name:b}):e.jsx(Ce,{tracks:c,participants:o,memberDetails:r,name:b}),Ue=({toggleChat:c,tracks:o,channelRef:r,uid:b})=>{const[f,w]=a.useState(!0),[i,p]=a.useState(!0),[l,x]=a.useState(""),N=Z(),d=P();a.useEffect(()=>{x(d==null?void 0:d.roomId)},[d]);const h=async()=>{o[1].muted?(await o[1].setMuted(!1),p(!0)):(await o[1].setMuted(!0),p(!1))},u=async()=>{o[0].muted?(await o[0].setMuted(!1),w(!0)):(await o[0].setMuted(!0),w(!1))},S=async L=>{for(let m=0;m<o.length;m++)o[m].close(),o[m].stop();N("/")};return e.jsxs("div",{className:"flex-[0.05] flex justify-center relative",children:[e.jsxs("div",{className:"meetcode absolute left-0 bottom-[50%] translate-y-[50%] bg-[#2E3137] px-4 py-2 rounded-[8px] -z-10 hidden sm:block  sm:z-10 ",children:["Room Id : ",l]}),e.jsxs("div",{className:"flex w-[80%] items-center justify-center",children:[e.jsx("div",{className:`meet-control-icon ${!i&&"meet-control-icon-off"} `,onClick:()=>h(),children:e.jsx("img",{src:i?he:we})}),e.jsx("div",{className:`meet-control-icon ${!f&&"meet-control-icon-off"} `,onClick:()=>u(),children:e.jsx("img",{src:f?be:v})}),e.jsx("div",{className:"meet-control-icon meet-end-btn",onClick:()=>S(),children:e.jsx("img",{src:Ne})}),e.jsx("div",{className:"meet-control-icon",children:e.jsx("img",{src:je})}),e.jsx("div",{className:"meet-control-icon",onClick:()=>c(),children:e.jsx("img",{src:fe})})]})]})},Qe=()=>{const[c,o]=a.useState(!1),[r,b]=a.useState(""),[f,w]=a.useState(""),[i,p]=a.useState([]),l=me(),x=xe(),[N,d]=a.useState(!1),{ready:h,tracks:u}=ue(),[S,L]=a.useState(String(Math.floor(Math.random()*1e4))),{state:m,startLoading:Be,stopLoading:ke,showError:G,showSuccess:Ie,showInfo:V}=ae(),E=Z();let j=a.useRef();const[K,Q]=a.useState([]),[B,J]=a.useState([]),[k,R]=a.useState(""),[X,q]=a.useState(0),y=P(),I=a.useRef(),W=async s=>{try{await x.login({uid:S}),await x.addOrUpdateLocalUserAttributes({name:r,uid:S});let A=await x.createChannel(s);j.current=A,await j.current.join(),j.current.on("MemberJoined",Ae),j.current.on("MemberLeft",T),j.current.on("ChannelMessage",oe),ne()}catch(A){console.log(A)}l.on("user-published",async(A,t)=>{await l.subscribe(A,t),t==="video"&&(i.filter(n=>n.uid===A.uid)&&p(n=>n.filter(g=>g.uid!==A.uid)),p(n=>[...n,A])),t==="audio"&&A.audioTrack.play()}),l.on("user-unpublished",(A,t)=>{t==="audio"&&(A.audioTrack&&A.audioTrack.stop(),t==="video"&&p(n=>n.filter(g=>g.uid!==A.uid)))}),l.on("user-left",async A=>{await T(A.uid),p(t=>t.filter(n=>n.uid!==A.uid))});try{await(l==null?void 0:l.join(O.APP_ID,s,O.token,S))}catch(A){console.log(A)}u&&await l.publish([u[0],u[1]]),o(!0)},_=async s=>{var n;const A=(n=m==null?void 0:m.userData)==null?void 0:n._id,t="https://proj-meetup.onrender.com";await re.post("/meet/join-meeting",{meeting_id:s}).then(g=>{const U=g.data.session_token;I.current=pe(t),I.current.emit("join-meeting",A,U),d(!0)}).catch(g=>{var U,z;E("/"),G((z=(U=g==null?void 0:g.response)==null?void 0:U.data)==null?void 0:z.message)})};a.useEffect(()=>{var s;m.loggedIn&&b((s=m==null?void 0:m.userData)==null?void 0:s.name)},[m.loggedIn]),a.useEffect(()=>{w(y==null?void 0:y.roomId)},[y]);const D=()=>{const s=new Date,A=s.getHours(),t=s.getMinutes();s.getSeconds();let n=A%12;n===0&&(n=12);const g=A>=12?"PM":"AM";return`${n.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")} ${g}`},$=()=>{const s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],A=new Date,t=A.getDate(),n=A.getMonth(),g=A.getFullYear();return`${t} ${s[n]}, ${g}`},[F,ee]=a.useState(!1),Y=()=>{ee(!F)},se=s=>{const A=Math.floor(s/3600),t=Math.floor(s%3600/60),n=s%60;return`${A.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`};a.useEffect(()=>{const s=new Date,A=setInterval(()=>{const n=Math.floor((new Date-s)/1e3);q(n)},1e3);return()=>clearInterval(A)},[]);const Ae=async s=>{console.log("New member : "+s);let{name:A,uid:t}=await x.getUserAttributesByKeys(s,["name","uid"]);Q(n=>[...n,{name:A,uid:t}])},T=async s=>{try{const{name:A,uid:t}=await x.getUserAttributesByKeys(s,["name","uid"]);console.log("Member left ... :("+A),V(`${A} left the call`)}catch(A){console.log(A)}},te=async s=>{const{name:A,uid:t}=await x.getUserAttributesByKeys(s,["name","uid"]);Q(n=>[...n,{name:A,uid:t,mic__muted:!1}])},ne=async()=>{var A;let s=await((A=j.current)==null?void 0:A.getMembers());for(let t=0;t<s.length;t++)te(s[t])},oe=async(s,A)=>{console.log("Message Recieved");let t=JSON.parse(s.text);t.type==="chat"&&(console.log(t),J(n=>[...n,t]))},le=s=>{if(s.preventDefault(),k==="")return;let A=k;A=A.trim();const t={type:"chat",name:r,uid:S,time:D(),picture:"",message:A};J(n=>[...n,t]),j.current.sendMessage({text:JSON.stringify(t)}),R("")};return a.useEffect(()=>{let s;if(m.loggedIn||(s=setTimeout(()=>{m.loggedIn||(E("/"),G("User is not logged in"))},1e3)),m.loggedIn&&f!==""&&r&&h&&u)try{W(f),N||_(f)}catch(A){console.log(A)}return()=>{var A;try{l.leave(),(A=j.current)==null||A.leave(),x.logout(),u&&(u[1].stop(),u[1].close(),u[0].stop(),u[0].close()),I.current.disconnect()}catch{}clearTimeout(s)}},[m,f,l,h,u]),e.jsx("div",{className:"meeting-dock bg-primary w-full h-full overflow-hidden",children:e.jsxs("div",{className:"flex flex-1 flex-col h-full",children:[e.jsxs("div",{className:"meet-top flex-[0.05] flex items-center",children:[e.jsx(ce,{to:"/",children:e.jsx("img",{src:ie,alt:"meetup",className:"w-[90px] xs:w-[124px] xs:h-[45px]"})}),e.jsx("div",{className:"h-[80%] w-[1px] bg-dimWhite ml-5 mr-5"}),e.jsx("span",{className:"text-[14px] xs:text-[16px]",children:"Very Good Meeting"}),e.jsx("div",{className:"w-fit bg-[rgba(255,255,255,0.2)] px-3 py-1 ml-auto ss:ml-5 rounded-xl text-[14px] xs:text-[16px]",children:se(X)}),e.jsxs("span",{className:"ml-0 ss:ml-auto hidden ss:block ",children:[D()," | ",$()]})]}),e.jsxs("div",{className:"flex-[0.95] flex w-full h-[89%] relative",children:[e.jsxs("div",{className:`flex flex-col  ${F?"w-[100%] sm:w-[80%]":"w-[100%]"}`,children:[e.jsx("div",{className:"flex-[0.95] flex justify-center overflow-hidden ",children:e.jsx(ye,{tracks:u,participants:i,rtc__client:l,memberDetails:K,name:r})}),e.jsx(Ue,{toggleChat:Y,tracks:u,channelRef:j,uid:S})]}),F&&e.jsxs("div",{className:"meet-sidebar w-full flex flex-col justify-between bg-[rgb(24,24,35,0.75)] backdrop-blur-[3px] sm:bg-[rgba(24,24,35,0.2)] rounded-[8px] sm:w-[400px] h-[100%] absolute sm:static",children:[e.jsxs("div",{className:"meet-sidebar-chat  flex-[0.88] overflow-y-scroll relative",children:[e.jsx("div",{className:"absolute right-5 top-3 block sm:hidden",onClick:()=>Y(),children:e.jsx("img",{src:Se,className:"w-[25px]"})}),e.jsx("p",{className:"text-center my-3 mx-5 underline underline-offset-8",children:"Messages"}),B==null?void 0:B.map((s,A)=>(s==null?void 0:s.uid)===S?e.jsx("div",{className:"flex flex-col p-5",children:e.jsxs("div",{className:"flex flex-row-reverse",children:[e.jsx("img",{src:ge,alt:"name",className:"w-[42px] h-[42px] object-cover rounded-[5px]"}),e.jsxs("div",{className:"flex flex-col w-full mr-4",children:[e.jsxs("div",{className:"flex flex-row-reverse justify-between",children:[e.jsx("span",{className:"text-dimWhite",children:"You"}),e.jsx("span",{className:"text-[rgb(131,132,138)]",children:s==null?void 0:s.time})]}),e.jsx("p",{className:"bg-[rgba(35,38,46,0.5)] sm:bg-[rgba(35,38,46,0.5)] rounded-[8px] rounded-tr-none my-3 p-3",children:s==null?void 0:s.message})]})]})},s==null?void 0:s.uid):e.jsx("div",{className:"flex flex-col p-5 ",children:e.jsxs("div",{className:"flex",children:[e.jsx("img",{src:M,alt:"name",className:"w-[42px] h-[42px] object-cover rounded-[5px]"}),e.jsxs("div",{className:"flex flex-col w-full ml-4",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-dimWhite",children:s==null?void 0:s.name}),e.jsx("span",{className:"text-[rgb(131,132,138)]",children:s==null?void 0:s.time})]}),e.jsx("p",{className:"bg-[rgba(35,38,46,0.5)] sm:bg-[rgba(35,38,46,0.5)] rounded-[8px] rounded-tl-none my-3 p-3",children:s==null?void 0:s.message})]})]})},A))]}),e.jsxs("form",{className:"flex-[0.1] px-5 w-full mt-3",onSubmit:s=>le(s),children:[e.jsx("input",{type:"text",placeholder:"Type a message...",className:" px-3 py-2 bg-[rgba(35,38,46,0.5)] sm:bg-[rgba(35,38,46,0.5)] rounded-[8px] rounded-tr-none rounded-br-none w-[80%]",value:k,onChange:s=>R(s.target.value)}),e.jsx("button",{type:"submit",className:"px-3 py-2 bg-[rgb(0,209,205)] rounded-[8px] rounded-tl-none rounded-bl-none w-[20%] overflow-hidden",children:"Send"})]})]})]})]})})};export{Qe as default};