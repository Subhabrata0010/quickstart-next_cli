import { Command } from "commander";
import prompts from "prompts";
import chalk from "chalk";
import { setupProject } from "./setup.js";

const program = new Command();

program
  .name("qwikstart-next")
  .description("Quickly bootstrap a Next.js project with Shadcn UI")
  .argument("<app-name>", "Name of your Next.js app")
  .action(async (appName) => {
    console.log(chalk.cyan("🚀 Qwikstart Next.js setup"));

    const response = await prompts({
      type: "select",
      name: "lang",
      message: "Choose language:",
      choices: [
        { title: "TypeScript", value: "ts" },
        { title: "JavaScript", value: "js" }
      ],
      initial: 0
    });

    await setupProject(appName, response.lang || "ts");
  });

program.parse();
