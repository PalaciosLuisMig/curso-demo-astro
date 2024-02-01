import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Fluck3cU.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_smBhCrUo.mjs');
const _page1 = () => import('./chunks/index_XmionyLp.mjs');
const _page2 = () => import('./chunks/404_eQayDPXe.mjs');
const _page3 = () => import('./chunks/about_WUqF6oPX.mjs');
const _page4 = () => import('./chunks/_id__Yx2F1oJ0.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/about.astro", _page3],
    ["src/pages/launch/[id].astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = undefined;
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
serverEntrypointModule.start?.(_manifest, _args);

export { __astrojsSsrVirtualEntry as default, pageMap };
