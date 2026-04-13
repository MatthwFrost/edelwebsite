

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/privacy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.MOax_E6L.js","_app/immutable/chunks/scheduler.y_ZkPb9O.js","_app/immutable/chunks/index.zM2Xhwwn.js"];
export const stylesheets = ["_app/immutable/assets/6.A0Ysmc7H.css"];
export const fonts = [];
