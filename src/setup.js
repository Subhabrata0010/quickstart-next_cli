import ora from "ora";
import { execa } from "execa";
import chalk from "chalk";
import path from "path";
import { setupShadcn } from "./shadcn.js";
import { cleanupAssets } from "./cleanup.js";
import { createBoilerplate } from "./boilerplate.js";

export async function setupProject(appName, lang) {
  const spinner = ora("Creating Next.js app...").start();

  try {
    const args = [
      appName,
      lang === "js" ? "--js" : "--ts",
      "--eslint",
      "--tailwind",
      "--app",
      "--turbopack",
      "--no-src-dir",
      "--no-import-alias"
    ];

    await execa("npx", ["create-next-app@latest", ...args], {
      stdio: "inherit",
      shell: true,
    });

    spinner.succeed("Next.js project scaffolded!");

    const projectPath = path.resolve(process.cwd(), appName);
    process.chdir(projectPath);

    await setupShadcn();
    await createBoilerplate(lang);
    await cleanupAssets();

    console.log(chalk.green("\n✅ Project setup complete!"));
    console.log(chalk.cyan(`\n👉 Just \n cd ${appName} \n in a new terminal`));

    await execa("npm", ["install"], { stdio: "inherit" });
    await execa("npm", ["run", "dev"], { stdio: "inherit" });

  } catch (err) {
    spinner.fail("Error creating project");
    console.error(err);
    process.exit(1);
  }
}
