// turn off the rule completely
const OFF = 0;
// turns the rule on but won't make the linter fail
const WARN = 1;
// turns the rule on and make the linter fail
const ERROR = 2;

module.exports = {
  extends: ['prettier', 'plugin:react/recommended'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  parser: 'babel-eslint',

  // stop eslint from looking for a config file in parent folders
  root: true,
  rules: {
    'prettier/prettier': OFF,
    camelcase: OFF,
    // The prop validatin in react is disabled for now
    'react/prop-types': OFF,
    /*
    If a JS object has a setter for a property, make sure there exists a getter property to read it. Reverse may not be true.
    */
    'accessor-pairs': OFF,
    // allows omitting parens when there is only 1 arg
    'arrow-parens': [ERROR, 'as-needed'],
    // spacing before and after the arrow
    'arrow-spacing': [ERROR, { before: true, after: true }],
    /*
    One True Brace Style - opening brace of a block is placed on the same line as its corresponding statement or declaration. Like for func, if, try, loops
    */
    'brace-style': [ERROR, '1tbs'],

    'no-prototype-builtins': OFF,
    /*
    requires trailing commas when last prop is in a diff line than closing ] or },
    disallow trailing commas when last element is on the same line as a closing ] or }
    */
    'comma-dangle': [
      ERROR,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    // use dot notation whenever possible, like error on foo['bar']
    'dot-notation': ERROR,
    // requires end of line always
    'eol-last': ERROR,
    // enforce strict equality except when comparing with null literal
    eqeqeq: [ERROR, 'smart'],
    // prefer using double quotes in jsx whenever possible
    'jsx-quotes': [ERROR, 'prefer-double'],
    // allow spacing before and after keywords like func, if, loops
    'keyword-spacing': [ERROR, { after: true, before: true }],
    // no function declaration in nested blocks, such as inside if
    'no-inner-declarations': [ERROR, 'functions'],
    'no-multi-spaces': ERROR,
    // dont use with statement in js
    'no-restricted-syntax': [ERROR, 'WithStatement'],
    /*
    Shadowing is the process by which a local variable shares the same name as a variable in its containing scope. Eliminate shadowed variables declarations.
    */
    'no-shadow': ERROR,
    // all named args must be used, and there must be no unused variables
    'no-unused-vars': [ERROR, { args: 'after-used' }],
    // unnecessary to concatenate two strings together
    'no-useless-concat': ERROR,
    /*
    allow use of single quotes wherever possible
    avoidEscape: var double = "a string containing 'single' quotes"; is correct
    */
    quotes: [
      ERROR,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    /*
    applied on blocks that don't begin on a new line
    ignore spacing b/w => and block - arrow-spacing
    ignore spacing b/w a keyword and a block - keyword-spacing
    */
    'space-before-blocks': ERROR,

    // React and JSX
    // not use ={true} when passing truthy values as props
    'react/jsx-boolean-value': [ERROR, 'never'],
    // allow JSX to be used only in .js files
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js'] }],
    'react/boolean-prop-naming': [
      ERROR,
      {
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
      },
    ],
    /*
    Components without children can be self-closed to avoid unnecessary extra closing tag.
    */
    'import/prefer-default-export': OFF,
    'react/self-closing-comp': ERROR,
    'react/no-unused-state': ERROR,
    'react/jsx-curly-brace-presence': [
      WARN,
      { props: 'never', children: 'never' },
    ],
    // allow default values for unrequired props
    'react/default-props-match-prop-types': OFF,
    // we need prop spreading; for icons especially
    'react/jsx-props-no-spreading': OFF,
    'react/jsx-filename-extension': [
      ERROR,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
