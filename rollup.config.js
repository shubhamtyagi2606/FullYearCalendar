import resolve from "@rollup/plugin-node-resolve";  // ✅ Ensure correct import
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";  // ✅ Correct plugin

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    }
  ],
  plugins: [
    resolve(),  // ✅ Ensure resolve() is defined
    commonjs(),
    typescript(),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    postcss({
      extract: true,
      minimize: true,
    }),
    terser(),  // ✅ Minify output
  ],
  external: ["react", "react-dom"], // ✅ Avoid duplicate React bundling
};
