const ImportGlobPlugin = require('esbuild-plugin-import-glob');

require('esbuild').build({
    entryPoints: [
        'src/js/index.js',
    ],
    bundle: true,
    loader: {
        ".njs": "text"
    },
    outfile: 'site/dist/js/app.js',
    plugins: [
        ImportGlobPlugin.default(),
    ]
  }).catch(() => process.exit(1))
