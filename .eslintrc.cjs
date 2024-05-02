module.exports = {
  extends: './node_modules/gts/',
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
      // Did not take the time to figure out how to make things "published" in the context of this project
      // https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unpublished-import.md
      'node/no-unpublished-import': 'off',
  },
};
