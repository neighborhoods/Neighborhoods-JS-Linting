module.exports = {
  rules: {
    // enforces return statements in callbacks of array's methods
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 2,

    // treat var statements as if they were block scoped
    // http://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 2,

    // require return statements to either always or never specify values
    // http://eslint.org/docs/rules/consistent-return
    'consistent-return': 2,

    // specify curly brace conventions for all control statements
    // http://eslint.org/docs/rules/curly
    curly: [2, 'multi-line'],

    // require default case in switch statements
    // http://eslint.org/docs/rules/default-case
    'default-case': [2, { commentPattern: '^no default$' }],

    // encourages use of dot notation whenever possible
    // http://eslint.org/docs/rules/dot-notation
    'dot-notation': [2, { allowKeywords: true }],

    // enforces consistent newlines before or after dots
    // http://eslint.org/docs/rules/dot-location
    'dot-location': [2, 'property'],

    // require the use of === and !==
    // http://eslint.org/docs/rules/eqeqeq
    eqeqeq: [2, 'allow-null'],

    // make sure for-in loops have an if statement
    // http://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 2,

    // disallow the use of alert, confirm, and prompt
    // http://eslint.org/docs/rules/no-alert
    'no-alert': 1,

    // disallow use of arguments.caller or arguments.callee
    // http://eslint.org/docs/rules/no-caller
    'no-caller': 2,

    // disallow lexical declarations in case/default clauses
    // http://eslint.org/docs/rules/no-case-declarations.html
    'no-case-declarations': 2,

    // disallow else after a return in an if
    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': 2,

    // disallow empty functions, except for standalone funcs/arrows
    // http://eslint.org/docs/rules/no-empty-function
    'no-empty-function': [2, {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    // disallow empty destructuring patterns
    // http://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 2,

    // disallow use of eval()
    // http://eslint.org/docs/rules/no-eval
    'no-eval': 2,

    // disallow adding to native types
    // http://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 2,

    // disallow unnecessary function binding
    // http://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 2,

    // disallow Unnecessary Labels
    // http://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 2,

    // disallow fallthrough of case statements
    // http://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 2,

    // disallow the use of leading or trailing decimal points in numeric literals
    // http://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 2,

    // disallow use of eval()-like methods
    // http://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 2,

    // disallow usage of __iterator__ property
    // http://eslint.org/docs/rules/no-iterator
    'no-iterator': 2,

    // disallow use of labels for anything other then loops and switches
    // http://eslint.org/docs/rules/no-labels
    'no-labels': [2, { allowLoop: false, allowSwitch: false }],

    // disallow unnecessary nested blocks
    // http://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 2,

    // disallow creation of functions within loops
    // http://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 2,

    // disallow use of multiple spaces
    // http://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 2,

    // disallow use of multiline strings
    // http://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 2,

    // disallow reassignments of native objects
    // http://eslint.org/docs/rules/no-native-reassign
    'no-native-reassign': 2,

    // disallow use of new operator when not part of the assignment or comparison
    // http://eslint.org/docs/rules/no-new
    'no-new': 2,

    // disallow use of new operator for Function object
    // http://eslint.org/docs/rules/no-new-func
    'no-new-func': 2,

    // disallows creating new instances of String, Number, and Boolean
    // http://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 2,

    // disallow use of (old style) octal literals
    // http://eslint.org/docs/rules/no-octal
    'no-octal': 2,

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    // http://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 2,

    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // http://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': [2, { props: true }],

    // disallow usage of __proto__ property
    // http://eslint.org/docs/rules/no-proto
    'no-proto': 2,

    // disallow declaring the same variable more then once
    // http://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 2,

    // disallow use of assignment in return statement
    // http://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 2,

    // disallow use of `javascript:` urls.
    // http://eslint.org/docs/rules/no-script-url
    'no-script-url': 2,

    // disallow self assignment
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 2,

    // disallow comparisons where both sides are exactly the same
    // http://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 2,

    // disallow use of comma operator
    // http://eslint.org/docs/rules/no-sequences
    'no-sequences': 2,

    // restrict what can be thrown as an exception
    // http://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 2,

    // disallow usage of expressions in statement position
    // http://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': [2, {
      allowShortCircuit: false,
      allowTernary: false,
    }],

    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 2,

    // disallow useless string concatenation
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 2,

    // disallow unnecessary string escaping
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 2,

    // disallow use of void operator
    // http://eslint.org/docs/rules/no-void
    'no-void': 2,

    // disallow use of the with statement
    // http://eslint.org/docs/rules/no-with
    'no-with': 2,

    // require use of the second argument for parseInt()
    // http://eslint.org/docs/rules/radix
    radix: 2,

    // requires to declare all vars on top of their containing scope
    // http://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 2,

    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': [2, 'outside'],

    // require or disallow Yoda conditions
    // http://eslint.org/docs/rules/yoda
    yoda: 2
  }
};