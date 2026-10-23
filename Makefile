.PHONY: install copy minify build deploy

install:
	npm install

copy:
	[ -d dist ] && rm -rf dist || true
	@mkdir dist
	@cp index.html -t dist/
	@cp styles.css script.js -t dist/
	@cp -r assets/ -t dist/

minify:
	# noinspection SpellCheckingInspection
	npx lightningcss-cli --minify --targets '>= 0.25%' dist/styles.css -o dist/styles.css
	npx terser dist/script.js -c -m -o dist/script.js
	npx html-minifier-terser dist/index.html \
	            --collapse-whitespace \
	            --remove-comments \
	            --remove-redundant-attributes \
	            --remove-empty-attributes \
	            --minify-css true \
	            --minify-js true \
	            -o dist/index.html

build:
	make copy
	make minify

deploy:
	@npx wrangler pages deploy dist --project-name=maison-regulus