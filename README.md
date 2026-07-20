# Portfolio — Multiplatform Application Development

Modern, bilingual (EN/ES), single-page portfolio for a vocational student in **Desarrollo de Aplicaciones Multiplataforma (DAM)**.

Built with **HTML + Tailwind CSS (CDN) + vanilla JavaScript**. No build step required.

## Features

- Fully responsive layout (mobile → desktop)
- Dynamic English / Spanish language toggle (no reload; preference saved in `localStorage`)
- Smooth scrolling navigation + mobile menu
- Sections: Hero, About, Projects, Certificates, Skills, Education, Contact, Footer
- Featured certificates (Stanford Code in Place, Cambridge C1)
- Contact form with validation + `mailto:` fallback
- Subtle animations and tech-themed dark UI
- Downloadable resume button (`assets/resume.pdf`)

## Project structure

```
portfolio/
├── index.html          # Main page
├── css/styles.css      # Custom styles & animations
├── js/
│   ├── i18n.js         # EN/ES translations + language switcher
│   └── main.js         # Menu, scroll, form, reveals
├── assets/
│   └── resume.pdf      # Place your CV here (optional)
└── README.md
```

## Local preview

From this folder, start any static server:

```bash
# Python
python -m http.server 5500

# Node (if you have npx)
npx serve .

# VS Code / Cursor: Live Server extension
```

Then open: [http://localhost:5500](http://localhost:5500)

## Customize your details

| What | Where |
|------|--------|
| **Name** | `index.html` (logo, hero `h1`, footer, code window) |
| **Email / social URLs** | `index.html` (mailto + GitHub/LinkedIn links) and `js/main.js` → `CONTACT_EMAIL` |
| **About / projects text** | `js/i18n.js` (both `en` and `es` keys) |
| **Project tech tags & links** | `index.html` project cards |
| **Certificates dates / links** | `index.html` certificates section |
| **Skills** | `index.html` skills grid |
| **School name / years** | `js/i18n.js` → `edu.*` keys |
| **Resume PDF** | Put file at `assets/resume.pdf` |
| **Project screenshots** | Replace `.project-thumb` gradients with `<img>` tags |

### Example: replace a project screenshot

```html
<div class="project-thumb">
  <img src="assets/projects/taskflow.png" alt="TaskFlow screenshot"
       class="absolute inset-0 h-full w-full object-cover" />
</div>
```

### Production contact form (optional)

Replace the `mailto:` approach with [Formspree](https://formspree.io):

1. Create a form → get endpoint URL
2. Set `action="https://formspree.io/f/YOUR_ID"` and `method="POST"` on the form
3. Remove or simplify the JS submit handler in `main.js`

## Deploy for free

Any static host works. Recommended:

### GitHub Pages

1. Create a repo (e.g. `yourusername.github.io` or `portfolio`)
2. Push this folder to `main`
3. Settings → Pages → Source: **Deploy from branch** → `main` / root
4. Site URL: `https://yourusername.github.io` (or `/portfolio`)

### Netlify

1. Drag & drop the folder on [app.netlify.com/drop](https://app.netlify.com/drop)  
   **or** connect the GitHub repo
2. Publish directory: `/` (root)
3. Free HTTPS + custom domain supported

### Vercel

1. Import the GitHub repo at [vercel.com](https://vercel.com)
2. Framework preset: **Other**
3. Deploy — done

### Cloudflare Pages

1. Connect repo → build command empty → output directory `/`

## Tips

- Keep both languages in sync when you edit copy in `js/i18n.js`
- Prefer real project screenshots and live demos for recruiters
- Add Open Graph tags later if you want rich social previews
- For offline fonts, download Inter / JetBrains Mono instead of Google Fonts

## License

Personal portfolio template — free to customize for your own use.
