var t={d:(e,a)=>{for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};function a({fxIn:t,fxOut:e,staggerBy:a=300}){return{in:e=>n({fxName:t,staggerBy:a,...e}),out:t=>i({fxName:e,staggerBy:a,capturePosition:!0,...t})}}t.d(e,{qG:()=>r,Ce:()=>o,Xn:()=>d,MV:()=>f});const n=async({target:t,stagger:e,staggerBy:a,fxName:n="fadeInDown"})=>{t.style.opacity="0",e&&await s(e*a),t.style.opacity="1",t.classList.add("animate__animated","animate__"+n)},i=async({target:t,stagger:e,capturePosition:a=!0,fxName:n="fadeOutUp",staggerBy:i})=>{a&&function(t){t.style.zIndex=t.style.zIndex||1;const e=t.offsetTop+"px",a=t.offsetLeft+"px",n=t.clientWidth+(t.offsetWidth-t.clientWidth)+1+"px",i=t.clientHeight+(t.offsetHeight-t.clientHeight)+1+"px";setTimeout((()=>{t.style.top=e,t.style.left=a,t.style.width=n,t.style.height=i,t.style.position="absolute"}),0)}(t),e&&await s(e*i),t.classList.add("animate__animated","animate__"+n),await s(1e3),t.classList.remove("animate__animated","animate__"+n)};function s(t){return new Promise((e=>{setTimeout(e,t)}))}const{in:o,out:f}=a({fxIn:"fadeInDown",fxOut:"fadeOutUp"}),{in:r,out:d}=a({fxIn:"fadeIn",fxOut:"fadeOut"});var c=e.qG,u=e.Ce,g=e.Xn,l=e.MV;export{c as fadeIn,u as fadeInDown,g as fadeOut,l as fadeOutUp};
//# sourceMappingURL=bundle.js.map