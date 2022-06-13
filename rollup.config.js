import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';

/**
 * @type {import('rollup').RollupOptions}
 */
 const obj = {
    input: 'src/main.ts',
    output: { file: 'bundle.js' },
    plugins: [
        nodeResolve({ browser: true }),
        typescript(),
        terser(),
    ]
}

export default obj;