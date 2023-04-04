module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 100,
  semi: false,

  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,

  bracketSpacing: true,
  proseWrap: 'always',
  singleAttributePerLine: true,
  endOfLine: 'auto',

  importOrder: [
    "^store$",
    "^app/(.*)$",
    "^processes/(.*)$",
    "^pages/(.*)$",
    "^widgets/(.*)$",
    "^features/(.*)$",
    "^entities/(.*)$",
    "^shared/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
