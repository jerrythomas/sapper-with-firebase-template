# sapper-with-firestore-template

A sapper template combined with firestore

- [x] Firebase hosting with SSR
- [x] Avoid secrets in repository
- [ ] Firestore
  - [x] Server side access
  - [x] Client side access
  - [x] Emulators for dev
  - [ ] Security rules
  - [ ] Firestore auth
  - [ ] Indexes
- [ ] Testing

## Getting started

### Using `degit`

[`degit`](https://github.com/Rich-Harris/degit) is a scaffolding tool that lets you create a directory from a branch in a repository.

```bash
npx degit "jerrythomas/sapper-with-firestore-template" my-app
cd my-app
```

### Using GitHub templates

Alternatively, you can use GitHub's template feature with the repository

- [sapper-with-firestore-template](https://github.com/jerrythomas/sapper-with-firestore-template)

### Prerequisites

Configure for first run. `yarn link:build` creates a soft link under the functions folder.

```bash
yarn
yarn link:build
yarn serve  # or yarn dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.
Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.

## Deploy

Deploy to Firebase hosting.

```bash
firebase deploy
```

## References

- Svelte store wrapper for firestore taken from [https://github.com/Evertt/flipside](https://github.com/Evertt/flipside)
