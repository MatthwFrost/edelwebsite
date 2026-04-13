

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/free/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.nAJhda2e.js","_app/immutable/chunks/scheduler.y_ZkPb9O.js","_app/immutable/chunks/index.zM2Xhwwn.js"];
export const stylesheets = [];
export const fonts = [];
