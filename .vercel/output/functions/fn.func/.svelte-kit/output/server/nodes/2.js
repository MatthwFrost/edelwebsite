

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.wfO8IT6h.js","_app/immutable/chunks/scheduler.y_ZkPb9O.js","_app/immutable/chunks/index.zM2Xhwwn.js"];
export const stylesheets = [];
export const fonts = [];
