install:
	npm install

build:
	./node_modules/webpack/bin/webpack.js

development:
	node examples/server.js
