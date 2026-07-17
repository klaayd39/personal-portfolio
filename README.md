# ⚡ Klyde Joseph | Professional Automation Portfolio

A high-end, responsive portfolio built with **React**, **Vite**, and plain CSS — designed to deploy on **Vercel**. Ported from an original Streamlit app, keeping the glassmorphism look, gradient typography, and Lottie animations, rebuilt as a static SPA.

## 🚀 Features
- **Client-side routing:** Home, Projects, Resume, and Contact pages via `react-router-dom`.
- **Glassmorphism UI:** Frosted-glass cards over a dark navy gradient backdrop.
- **Lottie animations:** Sidebar and contact-page animations loaded via `lottie-react`.
- **Project grid:** Category-grouped cards pulling from a simple JS data array.
- **Contact form:** Client-side validation and success state (front-end only — see note below).
- **Responsive:** Sidebar collapses into a sticky mobile top nav under 760px.

## 🛠️ Tech Stack
- **Framework:** React 19 + Vite
- **Routing:** react-router-dom
- **Animations:** lottie-react
- **Styling:** Plain CSS (`src/index.css`), custom properties for the color system
- **Hosting:** Vercel

## 📂 Project Structure
```text
├── public/
│   ├── ID.png         # Profile picture — REPLACE with your real photo
│   └── resume.jpg      # Resume image — REPLACE with your real resume
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx     # Desktop nav + Lottie + resume download
│   │   ├── MobileNav.jsx   # Sticky top nav for small screens
│   │   └── navItems.js     # Shared nav link data
│   ├── hooks/
│   │   └── useLottieUrl.js # Fetches a Lottie JSON from a URL
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vercel.json          # SPA rewrite rule
└── package.json
```

## 🖼️ Before you deploy
1. Replace `public/ID.png` and `public/resume.jpg` with your real photo and resume image (current files are placeholders).
2. Edit project entries in `src/pages/Projects.jsx` if anything's changed.
3. Update the email / location in `src/pages/Contact.jsx`.

## 📨 About the contact form
Like the original Streamlit version, the form is **front-end only** — it validates fields and shows a success message, but doesn't actually send an email anywhere. To make it real, wire `handleSubmit` in `src/pages/Contact.jsx` to a service such as:
- [Formspree](https://formspree.io/)
- [Resend](https://resend.com/) (via a small Vercel serverless function)
- [EmailJS](https://www.emailjs.com/)

## 💻 Local development
```bash
npm install
npm run dev
```

## 🌐 Deploying to Vercel

**Option A — Vercel dashboard:**
1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — no config needed. Click **Deploy**.

**Option B — Vercel CLI:**
```bash
npm i -g vercel
vercel
```

The included `vercel.json` adds a catch-all rewrite so client-side routes like `/projects` and `/contact` work on refresh and direct links.
