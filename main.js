let metadataPanel = null;
let portraitPreview = null;

function tryInsert() {
	if (!metadataPanel || !portraitPreview) return;
	if (!metadataPanel.isConnected || !portraitPreview.isConnected) return;

	if (portraitPreview.previousElementSibling === metadataPanel) return;

	portraitPreview.parentNode.insertBefore(metadataPanel, portraitPreview);
	portraitPreview.style.display = "none";
}

const observer = new MutationObserver((mutations) => {
	for (const mutation of mutations) {
		for (const node of mutation.addedNodes) {
			if (node.nodeType !== Node.ELEMENT_NODE) continue;

			if (node.matches(`[test-id="MULTI_ASPECT_MODE_OFF"]`)) {
				node.click();
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
			}
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
