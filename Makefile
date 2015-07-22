BABEL=./node_modules/.bin/babel

.PHONY: test

build:
	$(BABEL) src/index.js -o lib/index.js

test: build
	npm test
