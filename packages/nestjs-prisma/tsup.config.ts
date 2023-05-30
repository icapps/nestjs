import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/index.ts', 'src/install.ts'],
  noExternal: ['cli'],
  clean: true,
  minify: !options.watch,
  sourcemap: !!options.watch,
  dts: 'src/index.ts',
}));
