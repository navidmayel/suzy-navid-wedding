import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, g as deserializeManifest } from './chunks/astro.5170f76d.mjs';
import { _ as _page0, a as _page1, b as _page2 } from './chunks/pages/all.dcade64e.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
/* empty css                                    */import 'dayjs';
import 'dayjs/plugin/relativeTime.js';

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/reception.astro", _page1],["src/pages/ceremony.astro", _page2],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/ceremony.dcc797ea.css"],"scripts":[{"type":"external","value":"_astro/hoisted.a64482aa.js"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/ceremony.dcc797ea.css"],"scripts":[{"type":"external","value":"_astro/hoisted.a64482aa.js"}],"routeData":{"route":"/reception","type":"page","pattern":"^\\/reception\\/?$","segments":[[{"content":"reception","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/reception.astro","pathname":"/reception","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/ceremony.dcc797ea.css"],"scripts":[{"type":"external","value":"_astro/hoisted.a64482aa.js"}],"routeData":{"route":"/ceremony","type":"page","pattern":"^\\/ceremony\\/?$","segments":[[{"content":"ceremony","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ceremony.astro","pathname":"/ceremony","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/nav/Desktop/Code/suzy-navid-wedding/src/pages/ceremony.astro",{"propagation":"none","containsHead":true}],["/Users/nav/Desktop/Code/suzy-navid-wedding/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/nav/Desktop/Code/suzy-navid-wedding/src/pages/reception.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.a64482aa.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/ceremony.dcc797ea.css","/favicon.svg","/_astro/hoisted.a64482aa.js","/fonts/BrownSugar.ttf","/fonts/Canela-Light.otf"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
