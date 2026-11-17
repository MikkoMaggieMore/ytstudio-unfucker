const c=document.createElement("div");c.id="unfucker-chat-panel";const i=document.createElement("div");i.id="unfucker-chat-panel-inner";const A=document.createElement("div");A.id="unfucker-chat-input-area";i.appendChild(A);const d=document.createElement("div");d.id="unfucker-chat-buttons";const r=document.createElement("div");r.id="left";r.className="unfucker-chat-buttons";const o=document.createElement("div");o.className="unfucker-circle-button";o.id="unfucker-chat-emoji-button";const l=document.createElement("div");l.className="unfucker-circle-button-background";const B=document.createElement("tp-yt-paper-ripple");l.appendChild(B);const b=document.createElement("div");b.className="icon";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("xmlns","http://www.w3.org/2000/svg");e.setAttribute("enable-background","new 0 0 24 24");e.setAttribute("height","24px");e.setAttribute("viewBox","0 0 24 24");e.setAttribute("width","24px");e.setAttribute("fill","#AAA");const N=document.createElementNS("http://www.w3.org/2000/svg","g"),a=document.createElementNS("http://www.w3.org/2000/svg","rect");a.setAttribute("fill","none");a.setAttribute("height","24");a.setAttribute("width","24");N.appendChild(a);e.appendChild(N);const g=document.createElementNS("http://www.w3.org/2000/svg","g"),P=document.createElementNS("http://www.w3.org/2000/svg","g");g.appendChild(P);const q=document.createElementNS("http://www.w3.org/2000/svg","path");q.setAttribute("d","M11.99,2C6.47,2,2,6.48,2,12c0,5.52,4.47,10,9.99,10C17.52,22,22,17.52,22,12C22,6.48,17.52,2,11.99,2z M8.5,8 C9.33,8,10,8.67,10,9.5S9.33,11,8.5,11S7,10.33,7,9.5S7.67,8,8.5,8z M12,18c-2.28,0-4.22-1.66-5-4h10C16.22,16.34,14.28,18,12,18z M15.5,11c-0.83,0-1.5-0.67-1.5-1.5S14.67,8,15.5,8S17,8.67,17,9.5S16.33,11,15.5,11z");g.appendChild(q);e.appendChild(g);b.appendChild(e);l.appendChild(b);o.appendChild(l);r.appendChild(o);const p=document.createElement("div");p.className="unfucker-circle-button";p.id="unfucker-chat-poll-button";const s=document.createElement("div");s.className="unfucker-circle-button-background";const T=document.createElement("tp-yt-paper-ripple");s.appendChild(T);const f=document.createElement("div");f.className="icon";const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("xmlns","http://www.w3.org/2000/svg");t.setAttribute("height","24px");t.setAttribute("viewBox","0 0 24 24");t.setAttribute("width","24px");t.setAttribute("fill","#AAA");const k=document.createElementNS("http://www.w3.org/2000/svg","path");k.setAttribute("d","M0 0h24v24H0z");k.setAttribute("fill","none");t.appendChild(k);const z=document.createElementNS("http://www.w3.org/2000/svg","path");z.setAttribute("d","M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z");t.appendChild(z);f.appendChild(t);s.appendChild(f);p.appendChild(s);r.appendChild(p);d.appendChild(r);const u=document.createElement("div");u.id="right";u.className="unfucker-chat-buttons";const C=document.createElement("label");C.id="unfucker-chat-input-limit";C.appendChild(document.createTextNode("0/200"));u.appendChild(C);const h=document.createElement("div");h.className="unfucker-circle-button";h.id="unfucker-chat-send-button";const m=document.createElement("div");m.className="unfucker-circle-button-background";const j=document.createElement("tp-yt-paper-ripple");m.appendChild(j);const y=document.createElement("div");y.className="icon";const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("xmlns","http://www.w3.org/2000/svg");n.setAttribute("height","24px");n.setAttribute("viewBox","0 0 24 24");n.setAttribute("width","24px");n.setAttribute("fill","#AAA");const x=document.createElementNS("http://www.w3.org/2000/svg","path");x.setAttribute("d","M0 0h24v24H0z");x.setAttribute("fill","none");n.appendChild(x);const L=document.createElementNS("http://www.w3.org/2000/svg","path");L.setAttribute("d","M2.01 21L23 12 2.01 3 2 10l15 2-15 2z");n.appendChild(L);y.appendChild(n);m.appendChild(y);h.appendChild(m);u.appendChild(h);d.appendChild(u);i.appendChild(d);c.appendChild(i);const M=document.createElement("style");M.textContent=`
#unfucker-chat-panel-inner {
	display: flex;
	flex-direction: column;
}
#unfucker-chat-buttons {
	display: flex;
	justify-content: space-between;
}
#left.unfucker-chat-buttons {
	display: flex;
	gap:16px;
}
#right.unfucker-chat-buttons {
	display: flex;
	gap:16px;
}
.unfucker-circle-button {
	width:24px;
	height:24px;
	cursor:pointer;
}
.unfucker-circle-button-background {
	position: relative;
	overflow: hidden;
	border-radius: 4px;
	width:24px;
	height:24px;
}
.unfucker-circle-button .icon {
	width:24px;
	height:24px;
}
#unfucker-chat-input-limit {
	align-content: center;
	color: #aaa;
}
`;c.appendChild(M);function H(){const v=document.querySelector("#input-container.yt-live-chat-message-input-renderer"),w=document.querySelector("#input-panel > yt-live-chat-message-input-renderer");!v||!w||w.contains(c)||(w.appendChild(c),document.querySelector("#unfucker-chat-send-button").addEventListener("click",E=>{document.querySelector("#send-button.yt-live-chat-message-input-renderer button").click(),document.querySelector("#unfucker-chat-input-limit").innerText=`${document.querySelector("#input.yt-live-chat-text-input-field-renderer").innerText.length}/200`}),document.querySelector("#unfucker-chat-poll-button").addEventListener("click",E=>{document.querySelector("yt-live-chat-product-button-renderer.yt-live-chat-product-picker-renderer a").click()}),document.querySelector("#unfucker-chat-emoji-button").addEventListener("click",E=>{document.querySelector("#emoji-picker-button button").click()}),document.querySelector("#input.yt-live-chat-text-input-field-renderer").addEventListener("keydown",()=>{document.querySelector("#unfucker-chat-input-limit").innerText=`${document.querySelector("#input.yt-live-chat-text-input-field-renderer").innerText.length}/200`}),document.querySelector("#input.yt-live-chat-text-input-field-renderer").addEventListener("keyup",()=>{document.querySelector("#unfucker-chat-input-limit").innerText=`${document.querySelector("#input.yt-live-chat-text-input-field-renderer").innerText.length}/200`}))}const S=new MutationObserver(v=>{H()});document.querySelector("body")?S.observe(document.querySelector("body"),{childList:!0,subtree:!0}):document.addEventListener("DOMContentLoaded",v=>{S.observe(document.querySelector("body"),{childList:!0,subtree:!0})});
//# sourceMappingURL=chat.js.map
