const fs = require('fs');

const PACKAGE_JSON = JSON.parse(fs.readFileSync(`${__dirname}/../package.json`.toString()));
const ENTERPRISE_MODULES = Object.entries(PACKAGE_JSON.dependencies)
    .map(([name]) => name)
    .filter((name) => name.startsWith('@ag-charts-enterprise/') && !name.endsWith('/core'));

const TMP_BUNDLE = fs.readFileSync(`${__dirname}/tmp-bundle.ts`).toString().split('\n');

const OUTPUT_BUNDLE = TMP_BUNDLE.slice(
    0,
    TMP_BUNDLE.findIndex((l) => l.startsWith('// AUTOMATICALLY GENERATED - DO NOT EDIT')) + 1
);

OUTPUT_BUNDLE.push(...ENTERPRISE_MODULES.map((m) => `export * from '${m}';`));
OUTPUT_BUNDLE.push('');

fs.writeFileSync(`${__dirname}/tmp-bundle.ts`, OUTPUT_BUNDLE.join('\n'));
