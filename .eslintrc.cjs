require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        "semi": ["error", "always"],
        'vue/multi-word-component-names': 'off',
        'vue/no-reserved-component-names': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', 
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', 
        'vue/component-tags-order': [
            'error',
            {
                order: ['script', 'template', 'style']
            }
        ]
    }
};