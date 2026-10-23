# FUTURE_FS_01 - Personal Portfolio

A simple, responsive, single-page portfolio built with **HTML, CSS and vanilla JavaScript** only. No frameworks.

Sections: Home, About, Skills, Education, Projects, Resume, Contact.

## Files

| File | Purpose |
|------|---------|
| `index.html` | All page content (the 7 sections) |
| `styles.css` | Colors, layout, mobile styles |
| `script.js` | Mobile menu, active link highlight, contact form, print button |
| `Krishna_Saxena_Resume.pdf` | Your resume (the Download Resume button uses this file) |
| `README.md` | This guide |

## Run it

Double-click `index.html`. That's it. (The Google Fonts need internet to load; otherwise a fallback font is used.)

## Things YOU must fill in (placeholders)

All content now comes from your resume (`RESUME_krishna.pdf`) and your BCA details. Nothing was invented.

Still optional:
1. Add GitHub / LinkedIn links in the Contact section.
2. Add links for the Hotel Management Website and School Management System if you host them (e.g. on GitHub).
3. To update your resume later, replace `Krishna_Saxena_Resume.pdf` with the new file (keep the same name).

## How the important code works (simple English)

**Smooth navigation**
- Each nav link is like `<a href="#about">`. The `#about` matches `<section id="about">`, so the browser jumps there.
- `html { scroll-behavior: smooth; }` in the CSS makes that jump a smooth slide.
- `scroll-margin-top` on `.section` keeps the fixed header from covering the section title.

**Responsive design**
- `<meta name="viewport" ...>` tells phones to use their real width.
- `display: grid` with `repeat(3, 1fr)` makes 3 equal columns on desktop.
- `@media (max-width: 700px)` is a rule that only applies on small screens: columns become 1, text gets smaller.

**Mobile menu (script.js)**
1. On phones the CSS hides the menu and shows the hamburger button.
2. Clicking the button runs `classList.toggle('open')`, adding or removing a class named `open`.
3. CSS says `.nav-links.open { display: flex; }`, so the menu appears only when `open` is present.

**Active link highlight (script.js)**
- `IntersectionObserver` watches each section. When a section reaches the middle of the screen, its matching nav link gets the `active` class, which turns it purple.

**Contact form (script.js)**
1. `event.preventDefault()` stops the page reloading.
2. The code reads the name, email and message.
3. It opens `mailto:` so the visitor's email app opens with everything filled in.
   (A static site has no server to store messages. If you want that later, use a service like Formspree.)

**Download Resume**
- The button is a normal link: `<a href="Krishna_Saxena_Resume.pdf" download>`. The `download` word tells the browser to save the file. The PDF must sit in the same folder as `index.html`.

## Test checklist

- [ ] Every nav link scrolls to the right section
- [ ] Hamburger menu opens/closes on a narrow window
- [ ] "View Projects" and "Contact Me" buttons scroll correctly
- [ ] Phone link opens the dialer; email link opens the mail app
- [ ] Contact form opens your email app with the message
- [ ] "Download Resume (PDF)" downloads the PDF
- [ ] "Visit website" opens www.smarttalk.site in a new tab

## GitHub setup (repository name: `FUTURE_FS_01`)

1. Create a free account at https://github.com and sign in.
2. Click **+** (top right) -> **New repository**.
3. Repository name: `FUTURE_FS_01`. Choose **Public**. Do **not** tick "Add a README" (you already have one). Click **Create repository**.
4. Install Git from https://git-scm.com if you don't have it.
5. Open a terminal inside the `FUTURE_FS_01` folder and run:

```bash
git init
git add .
git commit -m "Initial commit: personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/FUTURE_FS_01.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Put it online free (GitHub Pages)

1. In the repo, go to **Settings -> Pages**.
2. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
3. After 1-2 minutes your site is live at `https://YOUR_USERNAME.github.io/FUTURE_FS_01/`.

### Updating later

```bash
git add .
git commit -m "Describe your change"
git push
```
