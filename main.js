let metadataPanel = null;
let portraitPreview = null;

function tryInsert() {
	if (!metadataPanel || !portraitPreview) return;
	if (!metadataPanel.isConnected || !portraitPreview.isConnected) return;

	if (portraitPreview.previousElementSibling === metadataPanel) return;

	portraitPreview.parentNode.insertBefore(metadataPanel, portraitPreview);
	portraitPreview.style.display = "none";

	console.log("Metadata panel insertion completed!");
}

const observer = new MutationObserver((mutations) => {
	for (const mutation of mutations) {
		for (const node of mutation.addedNodes) {
			if (node.nodeType !== Node.ELEMENT_NODE) continue;

			if (node.matches(`[test-id="MULTI_ASPECT_MODE_OFF"]`)) {
				node.click();
				console.log("Vertical streaming successfully disabled!");
			} 
			else if (node.matches(`#right-panel ytls-broadcast-metadata.ytls-stream-settings-widget-renderer`)) {
				metadataPanel = node;
				tryInsert();
			}
			else if (node.matches(`#portrait-preview-container.ytls-live-control-room-renderer`)) {
				portraitPreview = node;
				tryInsert();
			}
			else if (node.matches(`#portrait-preview-container div[role="button"].container.ytcp-dropdown-trigger`)) {
				node.click();
				console.log("Vertical streaming dropdown located!");
			}
			else if (node.matches(`tp-yt-paper-tab`)) {
				if (node.getAttribute("unfucked")) return;
				node.appendChild(document.createElement("tp-yt-paper-ripple"));
				node.setAttribute("unfucked", "");
			}

			node.querySelectorAll(`#right-panel ytls-broadcast-metadata.ytls-stream-settings-widget-renderer`).forEach((node2) => {
				if (node2.getAttribute("unfucked")) return;
				metadataPanel = node2;
				tryInsert();
				node2.setAttribute("unfucked", "");
			});

			node.querySelectorAll(`#portrait-preview-container.ytls-live-control-room-renderer`).forEach((node2) => {
				if (node2.getAttribute("unfucked")) return;
				portraitPreview = node2;
				tryInsert();
				node2.setAttribute("unfucked", "");
			});

			node.querySelectorAll("tp-yt-paper-tab").forEach((node2) => {
				if (node2.getAttribute("unfucked")) return;
				node2.appendChild(document.createElement("tp-yt-paper-ripple"));
				node2.setAttribute("unfucked", "");
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
