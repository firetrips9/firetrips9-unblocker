// This file overwrites the stock UV config.js
function sigma(alpha){
  return alpha
}
self.__uv$config = {
  prefix: "/uv/service/",
  encodeUrl: sigma,
  decodeUrl: sigma,
  handler: "/uv/uv.handler.js",
  client: "/uv/uv.client.js",
  bundle: "/uv/uv.bundle.js",
  config: "/uv/uv.config.js",
  sw: "/uv/uv.sw.js",
};