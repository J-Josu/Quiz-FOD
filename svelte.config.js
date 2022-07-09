import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	}
};

// import adapter from '@sveltejs/adapter-static';
// import preprocess from 'svelte-preprocess';
// 
// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   preprocess: preprocess(),

//   kit: {
//     adapter: adapter({
//       pages: "docs",
//       assets: "docs"
//     }),
//     paths: {
//       base: dev ? 'localhost:3000' : '/Quiz-FOD',
//     },
//     appDir: 'internal',
//     prerender : {
//       default: true
//     },
//     trailingSlash: 'always'
//   }
// };

export default config;
