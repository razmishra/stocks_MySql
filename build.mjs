import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/app.ts'],
  bundle: true,
  platform: "node",
  packages: "external",
  outdir: "./dist",
})
