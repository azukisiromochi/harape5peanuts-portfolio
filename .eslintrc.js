module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    // devlopmentのときだけconsole.logを許可する
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 末尾のセミコロンを許容する。
    'comma-dangle': ['error', 'only-multiline'],
    // 空白行に対してwarnのみ出るようにする。
    'no-multiple-empty-lines': ['warn', {max: 1}]
  }
}
