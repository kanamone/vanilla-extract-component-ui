# Vanilla-Extract and Vite UI Library Monorepo

This repository showcases a monorepo setup to build a UI library using `@vanilla-extract/css` and Vite in library mode. It includes a detailed example of how TypeScript definitions translate into CSS, particularly highlighting the generation and application of CSS variables.

## Usage Instructions

1. Install dependencies with `bun i`.
2. Build the `ui` package by running `bun run build` in the `packages/ui` directory.
3. Start the development server in the `packages/app` directory with `bun run dev` to see the components in action.

## Structure

This monorepo is organized into two main packages:

- `packages/ui`: Contains the setup for building components and styles.
- `packages/app`: Demonstrates the usage of components from the `ui` package.

## UI Package

The `ui` package uses `@vanilla-extract/css` and Vite's library mode to construct and style components. The build process outputs to the `dist` directory as follows:

```plaintext
dist
├── index.cjs
├── index.d.ts
├── index.js
└── style.css
```

### From TypeScript to CSS: Generating CSS Variables

In `packages/ui/src/theme/token.css.ts`, CSS variables are defined and their values set, which are then globally applied. Below is the TypeScript configuration followed by the resulting CSS output:

**TypeScript Configuration (`token.css.ts`):**

```typescript
import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";

export const vars = createGlobalThemeContract({
  color: {
    primary: "color-primary",
    primaryHover: "color-primary-hover",
    textPrimary: "color-text-primary",
    borderColor: "color-border-color",
    focusBorderColor: "color-focus-border-color",
  },
});

createGlobalTheme(":root", vars, {
  color: {
    primary: "#007bff",
    primaryHover: "#0056b3",
    textPrimary: "#ffffff",
    borderColor: "#ccc",
    focusBorderColor: "#007bff",
  },
});
```

**Resulting CSS Output:**

```css
:root {
  --color-primary: #007bff;
  --color-primary-hover: #0056b3;
  --color-text-primary: #ffffff;
  --color-border-color: #ccc;
  --color-focus-border-color: #007bff;
}
._1ky5pq0 {
  background-color: var(--color-primary);
  color: var(--color-text-primary);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
._1ky5pq0:hover {
  background-color: var(--color-primary-hover);
}
.q62e5d0 {
  padding: 10px;
  border-color: var(--color-border-color);
  border-radius: 5px;
  width: 300px;
  height: 150px;
  font-size: 16px;
}
.q62e5d0:focus {
  border-color: var(--color-focus-border-color);
  outline: none;
}
```

## App Package

The `app` package demonstrates the actual use of the `ui` package components in a real application setup. Running `bun run dev` will launch a development server showing the components as they would appear in a production environment.

```tsx
import { Button, TextArea } from "ui";
import "ui/style.css";

function App() {
  return (
    <div className="root">
      <TextArea />
      <Button>button</Button>
    </div>
  );
}

export default App;
```
