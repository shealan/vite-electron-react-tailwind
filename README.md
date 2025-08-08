# Vite + Electron + React + Tailwind

This is my modern Electron desktop application boilerplate built with Vite, React, TypeScript and Tailwind CSS. This project is powered by [electron-vite](https://electron-vite.org/), providing fast development and optimized builds. This boilerplate is a starting point for my Electron applications. Hopefully it's useful for you too!

## 🚀 Features

- ⚡ **Fast Development**: Built on electron-vite for lightning-fast HMR and hot reloading
- 🎨 **Modern Styling**: Tailwind CSS for utility-first styling and rapid UI development
- 🔧 **TypeScript**: Full TypeScript support for type safety and better DX
- ⚛️ **React 19**: Latest React with modern patterns and performance optimizations
- 🛠️ **Pre-configured**: Ready-to-use setup with sensible defaults
- 📦 **Cross-platform**: Build for Windows, macOS, and Linux

## 🔮 Coming Soon

I will likely add the following features in the future as I increasingly find myself using these tools in every project.

- [ ] Shadcn UI
- [ ] Zustand Store
- [ ] SQLite Database

## 🛠️ Tech Stack

- **Framework**: [Electron](https://electronjs.org/) with [electron-vite](https://electron-vite.org/)
- **Frontend**: [React 19](https://react.dev/) + [TypeScript](https://typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/) (via electron-vite)
- **Linting**: ESLint with Prettier formatting

## 🎯 Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## 📦 Project Setup

### Install Dependencies

I use [bun](https://bun.sh/) as my package manager. But you can use [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) if you prefer.

```bash
bun install
```

### Development

Start the development server with hot reloading:

```bash
bun run dev
```

### Type Checking

Run TypeScript checks for both main and renderer processes:

```bash
bun run typecheck
```

### Linting & Formatting

```bash
# Lint code
bun run lint

# Format code
bun run format
```

### Building for Production

```bash
# Build for current platform
bun run build

# Platform-specific builds
bun run build:win     # Windows
bun run build:mac     # macOS
bun run build:linux   # Linux

# Build without packaging (for testing)
bun run build:unpack
```

> [!IMPORTANT]
> When creating Windows executables using an Apple Silicon Mac, builds default to the `arm64` architecture. These will not run on the majority of Windows machines. For this reason the `--x64` flag is added to the `build:win` build command. You can remove this flag if you are building on an Intel Mac, or specifically want to build for the `arm64` architecture.

## 🏗️ Project Structure

```
src/
├── main/           # Electron main process
├── preload/        # Preload scripts
└── renderer/       # React frontend
    ├── src/
    │   ├── App.tsx
    │   ├── main.tsx
    │   ├── assets/
    │   └── components/
    └── index.html
```

## 🤝 Contributing

This project uses Prettier for code formatting and ESLint for linting. Make sure to run `npm run format` and `npm run lint` before committing.

## 📄 License

Built with ❤️ using [electron-vite](https://electron-vite.org/)
