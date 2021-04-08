default: help

help:                   ## Display this help message
	@echo "Please use \`make <target>\` where <target> is one of:"
	@grep '^[a-zA-Z]' $(MAKEFILE_LIST) | \
		awk -F ':.*?## ' 'NF==2 {printf "  %-26s%s\n", $$1, $$2}'

init:                   ## Install dependencies
	npm install

dev:              		## Develop locally in watch mode
	npm start

test:                   ## Run unit tests
	npm run test:ci

build:             		## Build platform-core
	npm run build
