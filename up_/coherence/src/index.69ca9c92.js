console.log("test");const start=document.getElementById("start");start.addEventListener("click",(()=>{console.log("clic clic bang-bang")}));const select=document.getElementById("compteur"),compteur=select.value;console.log(select);for(const e of select)console.log(e);select.addEventListener("selector",(()=>{1===compteur&&console.log("test 1 ok")}));const but=document.getElementById("start");let cps=1;but.addEventListener("click",(()=>{1==cps&&setInterval(timing,1e3),viewFinder.classList.toggle("active"),counter.textContent=cps++,showTime()}));const timerCadre=document.querySelector(".timer");let timerTitle=document.createElement("h2"),boucheTexte=document.querySelector("#main > div > div > div.mouth > div.bouche"),i=50;timerTitle.textContent=i--+" sec",timerCadre.appendChild(timerTitle);const timing=()=>{boucheTexte.textContent=i>0?i--+" sec":"End"},audioOn=document.getElementById("iconOn");console.log(audioOn);const audioOff=document.getElementById("iconOff");console.log(audioOff),audioOn.addEventListener("click",(()=>{audioOn.classList.add("hidden"),audioOff.classList.remove("hidden")})),audioOff.addEventListener("click",(()=>{audioOff.classList.add("hidden"),audioOn.classList.remove("hidden")}));const header=document.getElementById("header"),main=document.getElementById("main");start.addEventListener("click",(()=>{header.classList.add("hidden"),main.classList.remove("hidden")}));const btnClose=document.querySelector(".btnClose");btnClose.addEventListener("click",(()=>{main.classList.add("hidden"),header.classList.remove("hidden")}));
//# sourceMappingURL=index.69ca9c92.js.map
