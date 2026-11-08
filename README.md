# Eduardo Fernández Zarza — Portfolio

<img width="1164" height="540" alt="Screenshot From 2026-11-08 10-21-44" src="https://github.com/user-attachments/assets/c65b7250-d799-4c3a-9bee-00557dfdb327" />

**Developer in Training — Python, Backend & Data Engineering**  
Student of **Higher Vocational Education in Multiplatform Application Development (FP DAM)**

Fully responsive, bilingual website (English / Spanish).

---

## 🌐 Live Demo

[View Portfolio →](https://edufz17.github.io/portfolio/)

---

## 🧠 How This Site Was Built (AI-Agent-Assisted)

As a DAM student with a **clear focus on Python, Backend, and Data Engineering** (OOP, ETL pipelines, REST APIs, databases, and data processing), frontend development is not my primary area of specialization.

However, knowing how to **direct, review, and refine AI-generated code** is a highly valuable engineering skill. This portfolio demonstrates that workflow:

- I used **AI coding agents** to generate the initial scaffold, responsive layout, and internationalization framework.
- I audited, corrected, and refined the generated code: bilingual content, project and certificate data, navigation, responsive details, accessibility, and contact links.
- I iterated on the result to deliver a clean, maintainable product aligned with my technical goals.

The goal was not to bypass learning frontend, but to **demonstrate critical and productive use of AI coding agents** while keeping my focus on architecture, logic, and core project value.

---

## ✨ Features

- **Fully bilingual** (English ↔ Spanish) with dynamic language switching and `localStorage` persistence — no page reloads
- Modern, clean, and 100% responsive mobile-first design
- **Featured data-engineering project**: the Spanish Electricity Market Analyzer is highlighted first with an ETL pipeline visual (Extract → Transform → Load)
- Project showcase with GitHub/demo links, tech tags, and a dedicated AI-agent workflow label for this site
- Featured certifications section (Stanford Code in Place, Cambridge C1 Advanced, and Backend with Python + FastAPI)
- Resume download
- Direct contact via email and social profiles
- Smooth animations, scroll reveals, and reduced-motion support
- Lightweight, no-build static site (Tailwind CSS CDN + vanilla JavaScript)

---

## 🛠 Tech Stack

- **HTML5**, **Tailwind CSS**, **Vanilla JavaScript**
- Custom internationalization (i18n) engine with English/Spanish dictionaries
- Mobile-first, accessible design patterns
- Direct email contact through `mailto:` links

---

## 📂 Project Structure

```bash
portfolio/
├── index.html
├── assets/
│   ├── certificates/
│   │   ├── stanford-code-in-place.pdf
│   │   ├── cambridge-c1.pdf
│   │   └── FastAPI.pdf
│   └── resume.pdf
├── css/
│   └── styles.css
├── js/
│   ├── i18n.js
│   └── main.js
└── README.md
```

---

## 🚀 Featured Projects

- **[Spanish Electricity Market Analyzer](https://github.com/edufz17/PipelineETL)** — End-to-end ETL pipeline in Python: extracts Spanish electricity market data from a public API, transforms it with Pandas, and loads it into PostgreSQL.
- **MatriculasSpring** — REST API for school enrollment management built with Java 21, Spring Boot, Spring Data JPA, Hibernate, and MySQL.
- **Portfolio Web** — This site: an AI-agent-assisted project later audited, corrected, and refined by hand.

---

## 📜 Featured Certifications

- **Stanford Code in Place** — Stanford University
- **Cambridge C1 Advanced English** — Cambridge Assessment English
- **Backend Development with Python & FastAPI**

---

## 💻 Run Locally

No build step required. From the project root:

```bash
# Python
python -m http.server 5500

# Node (if available)
npx serve .
```

Then open `http://localhost:5500`.
