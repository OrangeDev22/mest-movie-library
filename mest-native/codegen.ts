import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:8000/graphql",
  documents: ["./**/*.graphql"],
  generates: {
    "./__generated__/": {
      preset: "client",
    },
  },
};

export default config;
