import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: false, // 根据需要启用压缩
    sourcemap: true, // 生成源映射，有助于调试
    target: "esnext", // 可以根据目标环境进行调整
    platform: "neutral", // 'neutral' 适用于同时在 Node 和浏览器环境
    outdir: "dist", // 输出目录
    format: "esm", // 输出格式为 ES 模块
    mainFields: ["browser", "module", "main"], // 通常情况下的顺序
    external: ["konva"], // 将 'konva' 标记为外部依赖
  })
  .catch(() => process.exit(1));
