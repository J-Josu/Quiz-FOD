# Dev Notes


## TODO

- [ ] Create NavBar
- [X] Implement 'emojis rain'
- [X] Implement global styling
- [ ] Learn MDsveX
- [X] Detect possible correct user answer
- [X] Responsive?


## How to build page

In order to build as a static page you have to toggle the commented section in svelte.config.js

1. Comment svelte autoAdapter
2. Uncomment svelte staticAdapter

Should look like:

```js
// import adapter from '@sveltejs/adapter-auto';
// import preprocess from 'svelte-preprocess';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   // Consult https://github.com/sveltejs/svelte-preprocess
//   // for more information about preprocessors
//   preprocess: preprocess(),

//   kit: {
//     adapter: adapter(),
//     alias: {
//       $components : 'src/lib/components/',
//       $stores : 'src/lib/stores/' 
//     }
//   }
// };

import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs"
    }),
    alias: {
      $components : 'src/lib/components/',
      $stores : 'src/lib/stores/' 
    },
    paths: {
      base: '/Quiz-FOD',
    },
    appDir: 'internal',
    prerender : {
      default: true
    },
    trailingSlash: 'always'
  }
};

export default config;
```
