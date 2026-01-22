module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'macros',
    ['react-native-reanimated/plugin'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.d.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          assets: './src/assets',
          components: './src/components',
          hooks: './src/hooks',
          providers: './src/providers',
          screens: './src/screens',
          types: './src/types',
          utils: './src/utils',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
}
