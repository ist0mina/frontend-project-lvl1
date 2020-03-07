install:
	npm install

start:
	npx node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx ./node_modules/.bin/eslint .