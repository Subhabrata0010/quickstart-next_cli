import fs from "fs-extra";
import chalk from "chalk";

export async function createBoilerplate(lang) {
  const ext = lang === "ts" ? "tsx" : "jsx";

  await fs.ensureDir("components");

  const heroCode = `export default function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold">Welcome to Quickstart Next.js 🚀</h1>
      <p className="mt-4 text-lg text-gray-600">Your project is ready!</p>
    </section>
  )
}`;
  const navbarCode = `export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-100 flex justify-between">
      <span className="font-bold">Logo</span>
      <div className="space-x-4">
        <a href="#">Home</a>
        <a href="#">About</a>
      </div>
    </nav>
  )
}`;
  const footerCode = `export default function Footer() {
  return (
    <footer className="p-4 bg-gray-100 text-center">
      <p>© 2025 Quickstart Next.js</p>
    </footer>
  )
}`;

  await fs.writeFile(`components/Hero.${ext}`, heroCode);
  await fs.writeFile(`components/Navbar.${ext}`, navbarCode);
  await fs.writeFile(`components/Footer.${ext}`, footerCode);

  const pagePath = `app/page.${ext}`;
  const pageCode = `import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  )
}`;
  await fs.writeFile(pagePath, pageCode);

  console.log(chalk.green("📂 Boilerplate components created!"));
}
