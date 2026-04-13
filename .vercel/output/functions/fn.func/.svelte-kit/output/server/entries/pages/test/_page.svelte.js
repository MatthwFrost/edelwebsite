import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<button class="btn btn-primary" data-svelte-h="svelte-1yaqzu">Hello</button> <div class="collapse collapse-arrow bg-base-200" data-svelte-h="svelte-z1wpe5"><input type="radio" name="my-accordion-2" checked="checked"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse collapse-arrow bg-base-200" data-svelte-h="svelte-10qrh4s"><input type="radio" name="my-accordion-2"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse collapse-arrow bg-base-200" data-svelte-h="svelte-10qrh4s"><input type="radio" name="my-accordion-2"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div>`;
});
export {
  Page as default
};
