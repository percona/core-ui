# Percona Enterprise Platform Core UI

## Local development

In order to setup the local development environment please run the following commands:

```bash
    npm i
    npm start
```

## Publishing

- Update the version: `npm version <patch|minor|major`
- Push the tags: `git push --tags`
- Publish the new version: `npm publish --tag latest --access public`
- To publish a dist-tag: `npm publish --tag next --access public`
- To remove a dist-tag: `npm dist-tag rm @percona/platform-core next`

The published package name is `@percona/platform-core`.

## Important

- This project does not leverage imports through static paths because `tsc` does not properly support them when generating types.

### Challenges

- Currently we are unable to use direct imports, because the build system does not properly handle them in the bundle. This is possible however, but would require a more complicated build config.
