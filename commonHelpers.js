import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-77e16229.js";const c=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]"),p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");o.addEventListener("click",D);o.disabled=!0;let i,d;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<=Date.now()?(o.disabled=!0,y.error({backgroundColor:"tomato",message:"Please choose a date in the future",messageColor:"white",messageSize:"20",position:"topRight",close:!0,displayMode:2})):(o.disabled=!1,i=e[0])}};h(c,C);function D(){d=setInterval(k,1e3),o.disabled=!1,c.disabled=!0}function M(e){const{days:n,hours:t,minutes:r,seconds:s}=q(e);!n&&!t&&!r&&!s&&(clearInterval(d),c.disabled=!1),p.textContent=a(n),S.textContent=a(t),b.textContent=a(r),g.textContent=a(s)}function k(){const e=new Date().getTime(),t=new Date(i).getTime()-e;M(t)}function a(e){return e.toString().padStart(2,"0")}function q(e){const u=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:l,minutes:m,seconds:f}}
//# sourceMappingURL=commonHelpers.js.map
