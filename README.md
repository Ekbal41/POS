# NoN Stack

Remix NoN Stack without deployment and test support

![Screenshot_78](https://user-images.githubusercontent.com/103681582/230741736-1957e9d0-18a4-4995-a50e-eadd3ae0fca8.png)


Learn more about [Remix Stacks](https://remix.run/stacks).

```
npx create-remix --template Ekbal41/non-stack
```

## What's in the stack

- Production-ready [SQLite Database](https://sqlite.org)
- Email/Password Authentication with [cookie-based sessions](https://remix.run/docs/en/v1/api/remix#createcookiesessionstorage)
- Database ORM with [Prisma](https://prisma.io)
- Styling with [Tailwind](https://tailwindcss.com/)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static Types with [TypeScript](https://typescriptlang.org)

Not a fan of bits of the stack? Fork it, change it, and use `npx create-remix --template your/repo`! Make it your own.

## Development

- Initial setup: _If you just generated this project, this step has been done for you._

  ```sh
  yarn setup
  ```
- Start dev server:

  ```sh
  yarn dev
  ```

This starts your app in development mode, rebuilding assets on file changes.



### Relevant code:

This is a pretty simple note-taking app, but it's a good example of how you can build a full stack app with Prisma and Remix. The main functionality is creating users, logging in and out, and creating and deleting notes.

- creating users, and logging in and out [./app/models/user.server.ts](./app/models/user.server.ts)
- user sessions, and verifying them [./app/session.server.ts](./app/session.server.ts)
- creating, and deleting notes [./app/models/note.server.ts](./app/models/note.server.ts)


### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.
