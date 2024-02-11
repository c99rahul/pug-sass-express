## Seamless Development with Pug, Sass, and Express

This project provides a streamlined development environment for building web applications using [Express.js](https://github.com/expressjs/express), [Pug (formerly Jade) CLI](https://github.com/pugjs/pug-cli), and [Sass](https://github.com/sass/sass).

It is specifically designed for developers accustomed to traditional workflows, offering a familiar pattern-based approach to web design and development.

## Key Features

- **Express Server:** Leverage the robust Express framework for backend logic and API development.
- **Pug Templates:** Use Pug's concise syntax to create dynamic and maintainable HTML views.
- **Sass Integration:** Sass provides powerful features for organizing and styling your CSS, allowing for efficient design pattern creation.
- **Linux Compatibility:** This setup is optimized for Linux systems and has been thoroughly tested on them.
- **No External Watchers:** Ditch packages like Nodemon or Concurrently; this system uses built-in mechanisms for automatic file change detection and compilation.
- **Development Focus:** The project prioritizes a smooth development experience, streamlining common tasks and workflows.

## Prerequisites

- Node.js and pnpm (or npm, yarn etc.) installed on your system.
- Basic understanding of Express, Pug, and Sass.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/c99rahul/pug-sass-express.git
```

2. Navigate to the project directory:

```bash
cd pug-sass-express
```

3. Install dependencies:

```bash
pnpm install
## Or npm install
```

4. Start the development server:

```bash
pnpm dev
# Or npm run dev
```

5. That's it. Open the server URL in your browser to view the application.

## Development Workflow:

- Make changes to your Pug templates and Sass files.
- The server automatically detects changes and recompiles the affected files.
- Refresh your browser to see the updated application.

## Customization

You can customize the project structure, Express routes, and Pug templates to suit your specific needs. Refer to the Express and Pug documentation for more advanced usage.

## Caution

While this setup has been tested extensively on Linux, Windows compatibility is still under evaluation.
