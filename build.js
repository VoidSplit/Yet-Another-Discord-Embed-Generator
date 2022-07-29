const ImportGlobPlugin = require('esbuild-plugin-import-glob');

require('esbuild').build({
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'dist/app.js',
    plugins: [
        ImportGlobPlugin.default(),
    ]
  }).catch(() => process.exit(1))
