module.exports = {
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "pragma": "React",
            "version": "15.0"
        }
    },
    "ecmaFeatures": {
        "modules": true
    },
    "env": {
        "es6": true,
        'commonjs': true,
        'browser': true,
        'mocha': true
    },
    "rules": {
        //More rules in: http://eslint.org/docs/rules/
        "no-undef": 2,
        "no-unused-vars": [2, {"args": "after-used"}],
        "no-use-before-define": 1,
        "no-cond-assign": 2,
        "no-console": 0,
        "no-debugger": 2,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-unreachable": 2,

        "react/no-danger": 1,
        "react/no-deprecated": 1,
        "react/no-did-mount-set-state": 1,
        "react/no-did-update-set-state": 1,
        "react/no-direct-mutation-state": 1,
        "react/no-is-mounted": 1,
        "react/no-multi-comp": 1,
        "react/no-string-refs": 1,
        "react/no-unknown-property": 1,
        "react/prefer-es6-class": 1,
        "react/prop-types": 2,
        "react/react-in-jsx-scope": 1,
        "react/require-extension": 1,
        "react/self-closing-comp": 1,
        "react/sort-comp": 1,
        "react/wrap-multilines": 1
    },
    "globals": {
        'require': false,
        'process': false,
        'Buffer': false
    }
};
