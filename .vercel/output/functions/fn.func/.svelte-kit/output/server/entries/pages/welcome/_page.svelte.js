import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: ".note-div.svelte-12pxsyb{padding:12px 16px;background:rgba(36, 39, 93, 0.2);border-radius:12px;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);border:1px solid rgba(36, 39, 93, 0.3)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="h-[100vh] bg-blue-600 pt-36 md:px-24 px-4" data-svelte-h="svelte-ku6vxs"><div><div><h1 class="md:text-6xl text-4xl font-bold text-blue-100">Welcome to Readel</h1> <p class="md:text-2xl text-lg text-blue-200 mt-2">You&#39;re all set. Here&#39;s how it works.</p></div> <div class="note-div w-full max-w-lg my-10 svelte-12pxsyb"><p class="text-blue-100"><span class="text-yellow-400 font-semibold">Tip:</span>
                Pin the Readel extension icon in your toolbar for quick access to voice and speed settings.</p></div> <div class="space-y-8 max-w-2xl"><div><h3 class="text-blue-100 font-semibold text-xl">Hold Alt to read</h3> <p class="text-blue-200 mt-1">Hover over any paragraph on a webpage and hold the <strong class="text-blue-100">Alt</strong> key
                    (Option on Mac). The text will highlight and start reading aloud. Release to stop.</p></div> <div><h3 class="text-blue-100 font-semibold text-xl">Double-tap Alt for continuous reading</h3> <p class="text-blue-200 mt-1">Double-tap <strong class="text-blue-100">Alt</strong> to read from the hovered paragraph
                    through the rest of the page. Press Alt once to stop.</p></div> <div><h3 class="text-blue-100 font-semibold text-xl">Try it now</h3> <p class="text-blue-200 mt-1">Hover over this paragraph and hold Alt. Under the cloak of night, Alex darted through the shadowy alley,
                    the echo of hurried footsteps close behind. With his heart pounding and breath catching in the cold air,
                    each turn became a gamble in this high-stakes game of cat and mouse. Ahead, the promise of escape: a narrow,
                    unmarked door left ajar, light flickering from within. As adrenaline surged, Alex made the leap, diving
                    into the unknown. What lay beyond was a mystery, but one thing was certain: the night was far from over.</p></div></div></div> </main>`;
});
export {
  Page as default
};
