COFFEE=./node_modules/coffee-script/bin/coffee

.PHONY: test

build:
	$(COFFEE) -bco lib src/index.coffee

test: build
	npm test
