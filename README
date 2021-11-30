An experiment to test vite with storybook, to primarily prove `axe-core` 'crypto' vite import error found in another project is more complicated than a clean start. Not really a README, but rather than some notes.

## Install and run

```
yarn
yarn dev
# or storybook
yarn storybook
```

## Steps when first started

Following https://vitejs.dev/guide/#scaffolding-your-first-vite-project

```
yarn create vite react-ts-vite-storybook-app --template react-ts
```

Needed something to replace NodeJS `crypto` API's SHA256, which had long thread at https://github.com/vitejs/vite/issues/728. Tried a couple of rollup plugin (which is commented out in `vite.config.ts`), still no luck to polyfill and import `crypto` in the browser.

https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API

Needed a SHA256 alternative, tried with `crypto.subtle.digest` in `App.tsx`

## Trying Storybook with vite

Then followed commands mentioned in https://storybook.js.org/blog/storybook-for-vite/

```
npx sb@next init --builder storybook-builder-vite
```

Adding a11y sb addon

```
yarn add -D @storybook/addon-a11y
```

Edit `.storybook/main.js` to include the addon.

```
npm run storybook
```

## More to try

- `uuid`: https://www.npmjs.com/package/uuid
- `randombytes`: https://github.com/crypto-browserify/randombytes/blob/master/browser.js
