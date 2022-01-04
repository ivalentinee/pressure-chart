.PHONY:dev
dev: esbuild-dev build-html

.PHONY:prod
release:
	esbuild src/index.js --bundle --minify --outfile=build/index.js

.PHONY:clean
clean:
	rm -rf build/*

.PHONY:serve
serve:
	esbuild src/index.js --bundle --outfile=build/index.js --serve --servedir=build

.PHONY:esbuild-dev
esbuild-dev:
	esbuild src/index.js --bundle --outfile=build/index.js

.PHONY:esbuild-prod
esbuild-prod:
	esbuild src/index.js --bundle --minify --outfile=build/index.js

.PHONY:build-html
build-html:
	cp src/index.html build/index.html
	node html-inject.js build/index.html build/index.js '%%JS%%'
	cp src/index.css build/index.css
	node html-inject.js build/index.html build/index.css '%%CSS%%'
