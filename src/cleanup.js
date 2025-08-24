import fs from "fs";
import path from "path";
import chalk from "chalk";

export async function cleanupAssets() {
  const projectRoot = process.cwd();
  const publicDir = path.join(projectRoot, "public");
  const appDir = path.join(projectRoot, "app");

  try {
    // ✅ Wipe contents of public/
    if (fs.existsSync(publicDir)) {
      fs.readdirSync(publicDir).forEach((file) => {
        const filePath = path.join(publicDir, file);
        fs.rmSync(filePath, { recursive: true, force: true });
      });
      console.log(chalk.green("🧹 Cleaned up /public folder"));
    }

    // ✅ Remove favicon.ico from app/
    const faviconPath = path.join(appDir, "favicon.ico");
    if (fs.existsSync(faviconPath)) {
      fs.rmSync(faviconPath, { force: true });
      console.log(chalk.green("🧹 Removed app/favicon.ico"));
    }

    console.log(chalk.cyan("\n✨ Cleanup complete!"));
  } catch (err) {
    console.error(chalk.red("❌ Error cleaning assets"), err);
    process.exit(1);
  }
}
