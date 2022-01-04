.PHONY:dev
dev: esbuild-dev build-html

.PHONY:release
release: esbuild-release build-html

.PHONY:clean
clean:
	rm -rf build/*

.PHONY:serve
serve:
	esbuild src/index.js --bundle --outfile=build/index.js --serve --servedir=build

.PHONY:esbuild-dev
esbuild-dev:
	esbuild src/index.js --bundle --outfile=build/index.js
	esbuild src/index.css --bundle --outfile=build/index.css

.PHONY:esbuild-release
esbuild-release:
	esbuild src/index.js --bundle --minify --outfile=build/index.js
	esbuild src/index.css --bundle --minify --outfile=build/index.css

.PHONY:build-html
build-html:
	cp src/index.html build/index.html
	node html-inject.js build/index.html build/index.js '%%JS%%'
	node html-inject.js build/index.html build/index.css '%%CSS%%'
