# Percona Enterprise Platform Core UI

## Local development

In order to setup the local development environment please run the following commands:

```bash
    npm i
    npm start
```

## Publishing to `npmjs.org`

### Publish from a local environment (only for users with permissions to publish to NPM registry)

- Log in to the registry: `npm login`
- You need to have valid npm credetials set up (`npm whoami` should return your npm username)
- Checkout the `main` branch
- Run: `npm run lint && npm run build`
- Double check that the `dist` directory was created and contains a build
- Update the version: `npm version patch|minor|major` (this will create a new tag and update `package.json` accordingly)
- Push the tags: `git push --follow-tags` (this will push the updated `package.json` to `main` with the new tag)
- Publish the new version: `npm publish --tag latest --access public`
- To publish a dist-tag: `npm publish --tag next --access public`
- To remove a dist-tag: `npm dist-tag rm @percona/platform-core next`

### Publish via CI using github actions

#### If you **DO NOT** have permissions to push to main

- Create a new branch
- Bump up the version: `npm version patch|minor|major`
- Open a PR to main with the changes
- When PR is accepted and merged: `git push origin <new_version_tag>`

#### If you **have** permissions to push to main

- Checkout the branch: `git checkout main`
- Bump up the version: `npm version patch|minor|major`
- Push changes to the repo, including the new tag: `git push --follow-tags origin main`

The published package name is `@percona/platform-core`, so you may want to check what dist tags are published to the registry: `npm info @percona/platform-core`

## Important

- This project does not leverage imports through static paths because `tsc` does not properly support them when generating types.

### Challenges

- Currently we are unable to use direct imports, because the build system does not properly handle them in the bundle. This is possible however, but would require a more complicated build config.
