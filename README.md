# Percona Enterprise Platform Core UI

## Local development

In order to setup the local development environment please run the following commands:

```bash
    npm i
    npm start
```

## Publishing

- Install a package `np` globally: `npm i -g np`
- Publish a minor version from the main branch (best): `np minor --yolo` or
- Publish a patch version from a branch other than main (not encouraged): `np patch --any-branch --yolo`

The published package name is `@percona/platform-core`.

## Important

- This project does not leverage imports through static paths because `tsc` does not properly support them when generating types.

### Challenges

- Currently we are unable to use direct imports, because the build system does not properly handle them in the bundle. This is possible however, but would require a more complicated build config.
