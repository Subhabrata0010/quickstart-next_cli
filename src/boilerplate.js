import fs from "fs";
import path from "path";
import chalk from "chalk";

const templates = {
  ts: {
    page: `export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-bold text-4xl">Welcome to Next.js!</h1>
      <p className="text-lg">Get started by editing this file.</p>
    </main>
  );
}
`,
  },
  js: {
    page: `export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-bold text-4xl">Welcome to Next.js!</h1>
      <p className="text-lg">Get started by editing this file.</p>
    </main>
  );
}
`,
  },
};

export async function createBoilerplate(lang) {
  const isTs = lang === "ts" || lang === "tsx";
  const appDir = path.join(process.cwd(), "app");

  const pageFile = path.join(appDir, `page.${isTs ? "tsx" : "jsx"}`);
  const globalsFile = path.join(appDir, "globals.css");

  fs.writeFileSync(pageFile, templates[lang].page);
  fs.writeFileSync(
    globalsFile,
    `@import "tailwindcss";\n@import "tw-animate-css";\n`
  );

  console.log(chalk.green("\n✨ Boilerplate cleaned and replaced successfully!"));
}
