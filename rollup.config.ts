import typescript from '@rollup/plugin-typescript';
import { RollupOptions } from 'rollup';

const bundle: RollupOptions = {
  input: 'src/index.ts',
  output: {
    dir: 'dist/',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [typescript()],
};

export default bundle;
