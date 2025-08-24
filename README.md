# ⚡ Qwikstart Next
### The Next.js Boilerplate, Upgraded like never before 🚀  

A powerful CLI tool to scaffold **Next.js apps** in seconds with **TailwindCSS v4** and **Shadcn UI**, minus the clutter.  
Perfect for developers who want to **start building immediately**, without wrestling with configs.  

[![npm version](https://img.shields.io/npm/v/quickstart-next?color=blue&logo=npm)](https://www.npmjs.com/package/quickstart-next) 
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE) 
![Made with ❤️](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red) 
![Hackathon Ready](https://img.shields.io/badge/Hackathon-Ready-orange?logo=vercel) 
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js) 
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38BDF8?logo=tailwindcss) 
![Shadcn UI](https://img.shields.io/badge/Shadcn-UI-9333EA?logo=react)  

---

## ✨ Why Choose Quickstart Next?  

Forget the noise of `create-next-app`. With **Quickstart Next**, you get a **minimal, production-ready Next.js setup** instantly:  

- 🚀 **Zero Setup Hassle** – Skip configs, start coding  
- 🎨 **Shadcn UI Built-In** – Choose components at install  
- 🧹 **Clean Boilerplate** – No logos, no clutter, just code  
- ⚡ **Tailwind v4 Ready** – Pre-configured with `tw-animate-css`  
- 🔥 **Hackathon Friendly** – Get running in <30s  

>If `create-next-app` is the **raw clay**, **Qwikstart Next** is the **ready-to-build sculpture**.  

---

## 🎯 Perfect For  

- 🏆 **Hackathons** – Ship fast, win big  
- 🚀 **Startups** – MVP ready in minutes  
- 👩‍🎓 **Students** – Learn modern web dev without config pain  
- 🧑‍💻 **Freelancers** – Deliver client projects quicker  
- 📚 **Prototypers** – Test ideas with minimal friction  

---


## 🚀 Usage  

```jsx
npx qwikstart-next <your-app>
```

### You’ll be prompted to choose:
- **Language** → TypeScript (default) or JavaScript
- **Shadcn components** → e.g. Button, Card, Form, Toast

---

### Example:
```jsx
npx qwikstart-next <your-app>
```
🛠 Example Output

```jsx
my-app/
├── node_modules
├── app/               ← favicon.ico removed
│   ├── layout.tsx
│   ├── page.tsx       ← cleaned boilerplate
│   └── globals.css
├── components/        ← Shadcn components here
├── public/            ← Cleaned (logos & svgs removed)
├── postcss.config.mjs
├── components.json
└── package.json
...
```

``globals.css``
```css
@import "tailwindcss";
@import "tw-animate-css";
```
---
## 🎨 Shadcn Components
Use **space bar** to select components to install and **arrow keys** to toggle between components
```jsx
? Select Shadcn components to install:
› (*) Button    <-- selected
› ( ) Card
› ( ) Form
› ( ) Toast
```
---
## 🏁 Qwikstart
Just run and it will auto run your app
```jsx
npx qwikstart-next <your-app>
```
to use the terminal split the previous one or open a new terminal and run 
```bash
cd <your-app>
```
# Now open:
```js
http://localhost:3000
```
---
## 📊 Quick Comparison
| Feature | ``create-next-app`` | Qwikkstart Next ⚡|
| --- | --- | -- |
|Next.js App Router|	✅| ✅|
|TailwindCSS v4|❌ (manual)	|✅ pre-configured|
|Shadcn UI Integration	|❌|	✅ built-in|
|Clean Boilerplate (no logos)|	❌	|✅|
|ESLint Setup	|Optional|	✅ configured|
|Auto npm install|	❌	|✅|
|Hackathon/MVP Ready|	❌	|✅ in <30s|
|Animations (``tw-animate-css``)	|❌|	✅ included|

> **Verdict:** Qwikstart Next = ``create-next-app`` + Tailwind v4 + Shadcn UI + Clean Boilerplate → **all in one**.

## ⚡ Features
✅ Next.js 15 scaffold with App Router

✅ TailwindCSS v4 pre-configured

✅ Shadcn UI integration with optional components

✅ Minimal boilerplate → no logos, no placeholders

✅ ESLint setup → clean code from day one

✅ Auto npm install for instant start

## 🧑‍💻 Contributing
Clone the repo on your local machine

```jsx
git clone https://github.com/Subhabrata0010/qwikstart-next.git
```
```jsx
cd qwikstart-next
```
Install dependencies and link in your local machine to test in global scope
```jsx
npm install
npm link
```
create your feature branch
```jsx
git checkout -b feature/<your-feature>
```
Add your features & Test it locally
```jsx
npx quickstart-next <your-demo-app>
```
Commit your changes
```jsx
git commit -m "Add your feature description".
```
Push to your feature branchgit 
```jsx
push origin feature/your-feature.
```
Submit a pull request and wait for approval.

---

## 🔖 Footnotes
🔧 Designed to stay up-to-date with Next.js, Tailwind, and Shadcn

💡 Made for speed, productivity, and developer happiness

🏁 Perfect balance of minimalism + power

Pro Tip: Use Quickstart Next in your next hackathon or MVP build. It’s like create-next-app, but on steroids.

>🔥 With qwikstart-next, you spend 0 mins configuring and 100% coding.