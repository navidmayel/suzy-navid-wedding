/* empty css                              */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot } from '../astro.5170f76d.mjs';
import 'html-escaper';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  dayjs.extend(relativeTime);
  const weddingDay = dayjs("2023-06-15");
  const date = Date.now();
  return renderTemplate`${maybeRenderHead($$result)}<header class="header border-b-2 astro-3EF6KSR2">
  <div class="flex justify-between time-text astro-3EF6KSR2">
    <div class="wedding-text text-white p-2 md:text-xl tracking-wide astro-3EF6KSR2" id="date-text-1">You're invited</div>
    <div class="wedding-text text-white p-2 md:text-xl tracking-wide astro-3EF6KSR2" id="date-text-2">to our wedding</div>
    <div class="wedding-text text-white p-2 md:text-xl tracking-wide astro-3EF6KSR2" id="date-text-3">${dayjs(date).to(weddingDay)}</div>
  </div>
</header>`;
}, "/Users/nav/Desktop/Code/suzy-navid-wedding/src/components/Header.astro");

const $$Astro$5 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="astro-WT363Z6C">
	<head>
		<meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body class="box-border h-screen w-screen astro-WT363Z6C">
    ${renderComponent($$result, "Header", $$Header, { "class": "astro-WT363Z6C" })}
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/Users/nav/Desktop/Code/suzy-navid-wedding/src/layout/MainLayout.astro");

const $$Astro$4 = createAstro();
const $$Rsvp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Rsvp;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex justify-center mb-4 astro-6ST2AQJV">
<button class="text-white font-bold py-4 px-24 rounded-full btn astro-6ST2AQJV">
  RSVP 
</button>
</div>
<div class=" subtext-container flex flex-col mt-12 astro-6ST2AQJV">
  <p class="subtext astro-6ST2AQJV">Please RSVP and provide any dietary requirements by 17 April 2023</p>
<p class="subtext astro-6ST2AQJV">Dress code Smart casual</p>
</div>`;
}, "/Users/nav/Desktop/Code/suzy-navid-wedding/src/components/Rsvp.astro");

const $$Astro$3 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const { ceremony } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex justify-center w-screen h-screen lg:h-full astro-DOHJNAO5">
    <div class="card md:border-2 w-screen md:w-6/12 mt-10 mb-4 text-white rounded-t-full flex justify-center content-center min-w-max min-h-full astro-DOHJNAO5">
      <div class="md:pt-28 card-text flex flex-col justify-center astro-DOHJNAO5">
        <h2 class="heading-text text-7xl pb-4 astro-DOHJNAO5">Suzy <br class="astro-DOHJNAO5"> & Navid</h2>
        <h3 class="date-text text-2xl border-b-2 mb-4 pb-6 astro-DOHJNAO5">Thursday 15 June 2023, 2:30pm</h3>
      <div${addAttribute(`ceremony pb-6 ceremony-text ${ceremony && "hidden"} astro-DOHJNAO5`, "class")}>
        <h4 class="astro-DOHJNAO5">Ceremony</h4>
        <p class="astro-DOHJNAO5">The Old Marylebone Town Hall, 97-113 Marylebone Rd<br class="astro-DOHJNAO5">
          London, NW1 5PT<br class="astro-DOHJNAO5">
          Arrive 2pm for a 2.30pm ceremony</p>
      </div>
      <div class="reception reception-text pb-6 astro-DOHJNAO5">
        <h4 class="astro-DOHJNAO5">Reception (13 mins walk from the ceremony)</h4>
        <p class="astro-DOHJNAO5">The Italian Greyhound, 62 Seymour St<br class="astro-DOHJNAO5">
          London, W1H 5BN</p>
      </div>
      ${renderComponent($$result, "Rsvp", $$Rsvp, { "class": "astro-DOHJNAO5" })}
    </div>
  </div>
</div>`;
}, "/Users/nav/Desktop/Code/suzy-navid-wedding/src/components/Card.astro");

const $$Astro$2 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "\u{1F470}\u{1F3FC}\u{1F935}\u{1F3FB}\u200D\u2642\uFE0F" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {})}` })}`;
}, "/Users/nav/Desktop/Code/suzy-navid-wedding/src/pages/index.astro");

const $$file$2 = "/Users/nav/Desktop/Code/suzy-navid-wedding/src/pages/index.astro";
const $$url$2 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Reception = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Reception;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Reception" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "ceremony": true })}` })}`;
}, "/Users/nav/Desktop/Code/suzy-navid-wedding/src/pages/reception.astro");

const $$file$1 = "/Users/nav/Desktop/Code/suzy-navid-wedding/src/pages/reception.astro";
const $$url$1 = "/reception";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reception,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Ceremony = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ceremony;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Ceremony" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "ceremony": false })}` })}`;
}, "/Users/nav/Desktop/Code/suzy-navid-wedding/src/pages/ceremony.astro");

const $$file = "/Users/nav/Desktop/Code/suzy-navid-wedding/src/pages/ceremony.astro";
const $$url = "/ceremony";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ceremony,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b };
