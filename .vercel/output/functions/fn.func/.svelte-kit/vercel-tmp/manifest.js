export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["audio.txt","Background.png","buycredits_backgorund.png","buycredits_right.png","favicon.png","main.png","main2.png","main3.png","main4.png","newicon.png"]),
	mimeTypes: {".txt":"text/plain",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BfWFcqvL.js","app":"_app/immutable/entry/app.5LYpFY1y.js","imports":["_app/immutable/entry/start.BfWFcqvL.js","_app/immutable/chunks/entry.BjtMMR_Q.js","_app/immutable/chunks/scheduler.y_ZkPb9O.js","_app/immutable/entry/app.5LYpFY1y.js","_app/immutable/chunks/scheduler.y_ZkPb9O.js","_app/immutable/chunks/index.zM2Xhwwn.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/free",
				pattern: /^\/free\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/howto",
				pattern: /^\/howto\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/playground",
				pattern: /^\/playground\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/updates",
				pattern: /^\/updates\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/welcome",
				pattern: /^\/welcome\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
