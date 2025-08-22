import ora from "ora";
import { execa } from "execa";
import prompts from "prompts";
import chalk from "chalk";

export async function setupShadcn() {
  const spinner = ora("Installing Shadcn UI...").start();

  try {
    const shadcn = execa("npx", ["--yes", "shadcn@latest", "init"], {
      stdio: ["pipe", "inherit", "inherit"],
      shell: true,
    });

    shadcn.stdin.write("\n");
    shadcn.stdin.end();

    await shadcn;

    spinner.succeed("Shadcn UI installed!");

    const { components } = await prompts({
      type: "multiselect",
      name: "components",
      message: "Select Shadcn components to install:",
      choices: [
        { title: "Button", value: "button" },
        { title: "Card", value: "card" },
        { title: "Input", value: "input" },
        { title: "Dialog", value: "dialog" },
        { title: "Form", value: "form" },
        { title: "Badge", value: "badge" },
        { title: "Dropdown Menu", value: "dropdown-menu" },
        { title: "Toast/Sonner", value: "sonner" },
      ],
      hint: "- Space to select. Enter to confirm",
      instructions: false,
    });

    if (components?.length > 0) {
      console.log(chalk.cyan(`\n📦 Installing components: ${components.join(", ")}`));

      await execa("npx", ["--yes", "shadcn@latest", "add", ...components], {
        stdio: "inherit",
        shell: true,
      });

      console.log(chalk.green("\n✅ Components installed successfully!"));
    } else {
      console.log(chalk.yellow("\n⚠️ No components selected."));
    }
  } catch (err) {
    spinner.fail("Error setting up Shadcn");
    console.error(err);
    process.exit(1);
  }
}
