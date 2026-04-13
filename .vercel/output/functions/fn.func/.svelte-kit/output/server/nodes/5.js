

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/playground/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.LmLV8u7o.js","_app/immutable/chunks/scheduler.y_ZkPb9O.js","_app/immutable/chunks/index.zM2Xhwwn.js"];
export const stylesheets = ["_app/immutable/assets/5.AcidMMgS.css"];
export const fonts = [];
