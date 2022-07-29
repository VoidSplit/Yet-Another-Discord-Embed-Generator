const ImportGlobPlugin = require('esbuild-plugin-import-glob');

require('esbuild').build({
    entryPoints: ['resources/js/src/index.js'],
    bundle: true,
    outfile: 'resources/js/dist/app.js',
    plugins: [
        ImportGlobPlugin.default(),
    ]
  }).catch(() => process.exit(1))
