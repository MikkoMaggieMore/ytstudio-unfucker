let metadataPanel = null;
let portraitPreview = null;

function tryInsert() {
	if (!metadataPanel || !portraitPreview) return;
	if (!metadataPanel.isConnected || !portraitPreview.isConnected) return;

	if (portraitPreview.previousElementSibling === metadataPanel) return;

	portraitPreview.parentNode.insertBefore(metadataPanel, portraitPreview);

	console.log("Metadata panel insertion completed!");
}

function hideVerticalStreaming() {
	document.querySelector(`#portrait-preview-container.ytls-live-control-room-renderer`).style.display = "none";
}

function matchAndExecute<T extends HTMLElement = HTMLElement>(node: Element, selector: string, callback: (match: T) => void): void {
	if (node.matches(selector)) {
		callback(node as unknown as T);
		return;
	}
	node.querySelectorAll<T>(selector).forEach((match) => {
		callback(match);
	});
}

function onceFor(
	root: Element,
	selector: string,
	handler: (el: HTMLElement) => void
): void {
	matchAndExecute<HTMLElement>(root, selector, (el) => {
		if (el.hasAttribute("unfucked")) return;
		el.setAttribute("unfucked", "");
		handler(el);
	});
}

const observer = new MutationObserver((mutations) => {
	for (const mutation of mutations) {
		for (const node of mutation.addedNodes) {
			if (!(node instanceof Element)) continue;

			onceFor(node, `#right-panel ytls-broadcast-metadata.ytls-stream-settings-widget-renderer`, (el) => {
				metadataPanel = el;
				tryInsert();
			});

			onceFor(node, `#portrait-preview-container.ytls-live-control-room-renderer`, (el) => {
				portraitPreview = el;
				tryInsert();
			});

			/*onceFor(node, `#portrait-preview-container div[role="button"].container.ytcp-dropdown-trigger`, (el) => {
				el.click();
				console.log("Vertical streaming dropdown located!");
			});*/

			onceFor(node, `tp-yt-paper-tab`, (el) => {
				el.appendChild(document.createElement("tp-yt-paper-ripple"));
			});
		}
	}
});

if (document.querySelector(`body`)) {
	observer.observe(document.querySelector(`body`), {
		childList: true,
		subtree: true,
	});
}
else {
	document.addEventListener("DOMContentLoaded", (e) => {
		observer.observe(document.querySelector(`body`), {
			childList: true,
			subtree: true,
		});
	});
}
