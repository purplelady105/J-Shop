module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  // add your custom rules here
  rules: {
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow tabs
    "indent": [2, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
    "no-tabs": 0,
    "linebreak-style": 0,
    "max-len": 0,
    "no-restricted-syntax": 0,
    "no-labels": 0,
    "no-unused-labels": 0,
    "no-unused-expressions": 0,
    "comma-dangle": 0,
    "semi": 0,
    "object-shorthand": 0,
    "prefer-template": 0,
    "no-console": 0,
    "no-alert": 0,
    "quote-props": 0,
    "arrow-body-style": 0,
    "no-param-reassign": 0,
    "guard-for-in": 0,
    "no-unused-vars": 0,
    "eqeqeq": 0,
    "func-names": 0,
    "prefer-arrow-callback": 0,
    "no-plusplus": 0,
    "no-undef": 0,
    "no-constant-condition": 0,
    "vue/no-use-v-if-with-v-for": 0,
    "no-mixed-spaces-and-tabs": 0,
    "no-useless-escape": 0,
    "no-extra-boolean-cast": 0,
    "vue/no-unused-vars": 0,
    "no-unreachable": 0,
    "indent": 0
  }
}