const fs = require('fs');
const sass = require('sass');
const esbuild = require('esbuild');

fs.readFile('manifest.json', "utf8", (err, data) => {
	fs.writeFile('./dist/manifest.json', data, 'utf8', () => {});
	const sassResult = sass.compile('main.scss');
	fs.writeFile('./dist/main.css', sassResult.css, 'utf8', () => {});
});

buildJS();

async function buildJS() {
	await esbuild.build({
		entryPoints: ["main.ts"],
		format: "esm",
		sourcemap: true,
		minify: true,
		outfile: "dist/main.js",
		treeShaking: true,
		platform: "browser",
	});

	await esbuild.build({
		entryPoints: ["chat.ts"],
		format: "esm",
		sourcemap: true,
		minify: true,
		outfile: "dist/chat.js",
		treeShaking: true,
		platform: "browser",
	});
}
