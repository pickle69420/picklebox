/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/~uv/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/cdn/js/uv/handler.js',
    client: '/cdn/js/uv/client.js',
    bundle: '/cdn/js/uv/bundle.js',
    config: '/cdn/js/uv/config.js',
    sw: '/cdn/js/uv/sw.js',
};
