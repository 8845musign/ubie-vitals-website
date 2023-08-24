import fs from "node:fs";
import path from "node:path";

const EXAPMLES_DIR = "src/pages/components/examples";
const EXAPMLES_COMPONENT_DIR = "src/components/examples";
const EXAPMLES_URL = "/components/examples";

export type exampleUrlAndFilePath = {
  url: string;
  code: string;
};

// スニークケースをキャメルケースに変換する。先頭は大文字に
const toCamelCase = (str: string): string => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

// expampleKeyとしてstackを投げると
// src/pages/components/examples/stack/* を検索する
// マッチしたディレクトリから、例えば /components/examples/stack/multiple.astro と src/components/examples/stack/multiple.tsx を組み立てて返す
export const getAllExampleUrlAndCode = (
  exampleKey: string
): exampleUrlAndFilePath[] => {
  const exampleDir = path.join(EXAPMLES_DIR, exampleKey);
  const exapmleComponentDir = path.join(EXAPMLES_COMPONENT_DIR, exampleKey);
  const exampleUrl = path.join(EXAPMLES_URL, exampleKey);

  const files = fs.readdirSync(exampleDir);

  return files.map((file) => {
    const filePath = path
      .join(exapmleComponentDir, file)
      .replace(".astro", ".tsx");
    const code = fs.readFileSync(filePath, "utf-8");

    // .astroを外してURLに組み立てる
    const url = path.join(exampleUrl, file.replace(".astro", ""));

    return { url, code };
  });
};

export const buildComponentPath = (exampleKey: string): string => {
  return `./node_modules/@ubie-inc/ofro-elements/dist/components/${toCamelCase(
    exampleKey
  )}/${toCamelCase(exampleKey)}.d.ts`;
};
