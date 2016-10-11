process.env.NODE_ENV = 'production';

const noop = () => null;

require.extensions['.css'] = noop;
