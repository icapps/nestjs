module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ['airbnb-base', 'airbnb-typescript/base', 'turbo', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './packages/*/tsconfig.json',
        tsconfigRootDir: __dirname,
    },
};
