module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-native/no-unused-styles': 'error',
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        amd: true,
        module: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
    'import/aliases': {
      '@': 'src',
      '@app': 'src/app',
      '@components': 'src/components',
      '@store': 'src/store',
    },
  },
};
