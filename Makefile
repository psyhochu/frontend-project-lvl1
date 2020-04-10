install:
	npm install

start:
	node bin/brain-game.js
publish:
	npm publish --dry-run

lint:
	npx eslint .
