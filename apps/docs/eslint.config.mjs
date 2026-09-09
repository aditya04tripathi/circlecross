import config from "@repo/eslint-config/next";
const docsConfig = [...config, { ignores: [".next/**", "next-env.d.ts"] }];
export default docsConfig;
