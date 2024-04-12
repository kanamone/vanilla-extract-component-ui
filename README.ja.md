# 日本語の README: Vanilla-Extract と Vite を使用した UI ライブラリの Monorepo

このリポジトリは、`@vanilla-extract/css` と Vite のライブラリモードを使用して UI ライブラリを構築するためのモノレポのセットアップを示しています。特に、TypeScript の定義から CSS 変数の生成と適用までの詳細な例を含んでいます。

## 使用方法

1. `bun i` で依存関係をインストールします。
2. `packages/ui` ディレクトリで `bun run build` を実行し、`ui` パッケージを

ビルドします。 3. `packages/app` ディレクトリで `bun run dev` を実行し、開発サーバーを起動します。

## 構成

このモノレポは、以下の二つのパッケージで構成されています：

- `packages/ui`: コンポーネントとスタイルのビルド設定を含む。
- `packages/app`: `ui` パッケージのコンポーネントを使用するアプリケーション。

## UI パッケージ

`ui` パッケージでは、`@vanilla-extract/css` と Vite のライブラリモードを使用してコンポーネントとスタイルのビルドを行います。ビルドは `bun run build` コマンドで実行され、`dist` ディレクトリに以下のファイル構造で成果物が出力されます：

```plaintext
dist
├── index.cjs
├── index.d.ts
├── index.js
└── style.css
```

### TypeScript から CSS へ: CSS 変数の生成

`packages/ui/src/theme/token.css.ts`で CSS 変数が定義され、その値が設定され、グローバルに適用されます。以下は TypeScript の設定と結果の CSS 出力です：

**TypeScript 設定 (`token.css.ts`):**

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

**結果の CSS 出力:**

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

## App パッケージ

`app` パッケージは `ui` パッケージのコンポーネントの実際の使用を示しています。`bun run dev` で開発サーバーを起動し、実際に UI コンポーネントを動作させることができます。

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
