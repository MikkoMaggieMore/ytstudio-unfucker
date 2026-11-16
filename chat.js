const unfuckerChatPanel = document.createElement("div");
unfuckerChatPanel.id = "unfucker-chat-panel";
const unfuckerChatPanelInner = document.createElement("div");
unfuckerChatPanelInner.id = "unfucker-chat-panel-inner";
const unfuckerChatInputArea = document.createElement("div");
unfuckerChatInputArea.id = "unfucker-chat-input-area";
unfuckerChatPanelInner.appendChild(unfuckerChatInputArea);
const unfuckerChatButtons = document.createElement("div");
unfuckerChatButtons.id = "unfucker-chat-buttons";
const left = document.createElement("div");
left.id = "left";
left.className = "unfucker-chat-buttons";
const unfuckerChatEmojiButton = document.createElement("div");
unfuckerChatEmojiButton.className = "unfucker-circle-button";
unfuckerChatEmojiButton.id = "unfucker-chat-emoji-button";
const div = document.createElement("div");
div.className = "unfucker-circle-button-background";
const tpYtPaperRipple = document.createElement("tp-yt-paper-ripple");
div.appendChild(tpYtPaperRipple);
const div1 = document.createElement("div");
div1.className = "icon";
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("enable-background", "new 0 0 24 24");
svg.setAttribute("height", "24px");
svg.setAttribute("viewBox", "0 0 24 24");
svg.setAttribute("width", "24px");
svg.setAttribute("fill", "#AAA");
const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect.setAttribute("fill", "none");
rect.setAttribute("height", "24");
rect.setAttribute("width", "24");
g.appendChild(rect);
svg.appendChild(g);
const g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
const g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
g1.appendChild(g2);
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", "M11.99,2C6.47,2,2,6.48,2,12c0,5.52,4.47,10,9.99,10C17.52,22,22,17.52,22,12C22,6.48,17.52,2,11.99,2z M8.5,8 C9.33,8,10,8.67,10,9.5S9.33,11,8.5,11S7,10.33,7,9.5S7.67,8,8.5,8z M12,18c-2.28,0-4.22-1.66-5-4h10C16.22,16.34,14.28,18,12,18z M15.5,11c-0.83,0-1.5-0.67-1.5-1.5S14.67,8,15.5,8S17,8.67,17,9.5S16.33,11,15.5,11z");
g1.appendChild(path);
svg.appendChild(g1);
div1.appendChild(svg);
div.appendChild(div1);
unfuckerChatEmojiButton.appendChild(div);
left.appendChild(unfuckerChatEmojiButton);
const unfuckerChatPollButton = document.createElement("div");
unfuckerChatPollButton.className = "unfucker-circle-button";
unfuckerChatPollButton.id = "unfucker-chat-poll-button";
const div2 = document.createElement("div");
div2.className = "unfucker-circle-button-background";
const tpYtPaperRipple1 = document.createElement("tp-yt-paper-ripple");
div2.appendChild(tpYtPaperRipple1);
const div3 = document.createElement("div");
div3.className = "icon";
const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg1.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg1.setAttribute("height", "24px");
svg1.setAttribute("viewBox", "0 0 24 24");
svg1.setAttribute("width", "24px");
svg1.setAttribute("fill", "#AAA");
const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path1.setAttribute("d", "M0 0h24v24H0z");
path1.setAttribute("fill", "none");
svg1.appendChild(path1);
const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path2.setAttribute("d", "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z");
svg1.appendChild(path2);
div3.appendChild(svg1);
div2.appendChild(div3);
unfuckerChatPollButton.appendChild(div2);
left.appendChild(unfuckerChatPollButton);
unfuckerChatButtons.appendChild(left);
const right = document.createElement("div");
right.id = "right";
right.className = "unfucker-chat-buttons";
const unfuckerChatInputLimit = document.createElement("label");
unfuckerChatInputLimit.id = "unfucker-chat-input-limit";
unfuckerChatInputLimit.appendChild(document.createTextNode("0/200"));
right.appendChild(unfuckerChatInputLimit);
const unfuckerChatSendButton = document.createElement("div");
unfuckerChatSendButton.className = "unfucker-circle-button";
unfuckerChatSendButton.id = "unfucker-chat-send-button";
const div4 = document.createElement("div");
div4.className = "unfucker-circle-button-background";
const tpYtPaperRipple2 = document.createElement("tp-yt-paper-ripple");
div4.appendChild(tpYtPaperRipple2);
const div5 = document.createElement("div");
div5.className = "icon";
const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg2.setAttribute("height", "24px");
svg2.setAttribute("viewBox", "0 0 24 24");
svg2.setAttribute("width", "24px");
svg2.setAttribute("fill", "#AAA");
const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path3.setAttribute("d", "M0 0h24v24H0z");
path3.setAttribute("fill", "none");
svg2.appendChild(path3);
const path4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path4.setAttribute("d", "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z");
svg2.appendChild(path4);
div5.appendChild(svg2);
div4.appendChild(div5);
unfuckerChatSendButton.appendChild(div4);
right.appendChild(unfuckerChatSendButton);
unfuckerChatButtons.appendChild(right);
unfuckerChatPanelInner.appendChild(unfuckerChatButtons);
unfuckerChatPanel.appendChild(unfuckerChatPanelInner);
const style = document.createElement("style");
style.textContent = `
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
`;
unfuckerChatPanel.appendChild(style);

function tryInsertChat() {
	const inputContainer = document.querySelector(`#input-container.yt-live-chat-message-input-renderer`);
	const inputPanel = document.querySelector(`#input-panel > yt-live-chat-message-input-renderer`);
	if (!inputContainer || !inputPanel) return;
	if (inputPanel.contains(unfuckerChatPanel)) return;
	inputPanel.appendChild(unfuckerChatPanel);
	document.querySelector("#unfucker-chat-send-button").addEventListener("click", (e) => {
		document.querySelector("#send-button.yt-live-chat-message-input-renderer button").click();
		document.querySelector("#unfucker-chat-input-limit").innerText = `${document.querySelector("#input.yt-live-chat-text-input-field-renderer").innerText.length}/200`;
	});
	document.querySelector("#unfucker-chat-poll-button").addEventListener("click", (e) => {
		document.querySelector("yt-live-chat-product-button-renderer.yt-live-chat-product-picker-renderer a").click();
	});
	document.querySelector("#unfucker-chat-emoji-button").addEventListener("click", (e) => {
		document.querySelector("#emoji-picker-button button").click();
	});
	document.querySelector("#input.yt-live-chat-text-input-field-renderer").addEventListener("keydown", () => {
		document.querySelector("#unfucker-chat-input-limit").innerText = `${document.querySelector("#input.yt-live-chat-text-input-field-renderer").innerText.length}/200`;
	});
	document.querySelector("#input.yt-live-chat-text-input-field-renderer").addEventListener("keyup", () => {
		document.querySelector("#unfucker-chat-input-limit").innerText = `${document.querySelector("#input.yt-live-chat-text-input-field-renderer").innerText.length}/200`;
	});
}

const observer2 = new MutationObserver((mutations) => {
	tryInsertChat();
});

if (document.querySelector(`body`)) {
	observer2.observe(document.querySelector(`body`), {
		childList: true,
		subtree: true,
	});
}
else {
	document.addEventListener("DOMContentLoaded", (e) => {
		observer2.observe(document.querySelector(`body`), {
			childList: true,
			subtree: true,
		});
	});
}