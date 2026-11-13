# rtic27
# RTIC'27 Website 🎓

**Recent Trends in Intelligent Computing**: the website we're building in 3 days.

Live site: https://samanvithakapu06-gif.github.io/rtic27/

Read this once. It takes 3 minutes and saves us hours.

---

## 🧱 The big idea

We're 3 people building 1 website. To keep it from turning into chaos:

- Everyone gets **their own pages**, so no one edits the same file at the same time.
- Everyone works on **their own branch**, which is a private copy of the project.
- Saman joins everything together. Nobody touches `main` directly.

Think of it like a group assignment where everyone writes their own chapter and one person staples the book together.

---

## 🗂️ Who builds what

| Person | Pages |
|---|---|
| Saman | `index.html`, `about.html` + shared files |
| Rathi | `call-for-papers.html`, `dates-registration.html` |
| Aliya | `people.html`, `contact.html` |

Each of you can also create **one CSS file for your own pages**, like `css/people.css`, and link it in your page's `<head>`.

---

## 🔒 Hands off (Saman only)

These files make the whole site look the same. If one changes, every page changes.

- `css/base.css`
- `js/main.js`
- `template.html`
- the **header** and **footer** on every page

Need a new style or a menu change? **Message Saman.** Don't edit these yourself.

---

## 🎨 Easy styling: use our ready-made blocks

You don't need to design anything. Just use these class names:

| Class | What you get |
|---|---|
| `container` | Keeps content centered and neat |
| `section` | A page block with spacing |
| `grid` | Cards that stack on phones and sit side by side on laptops |
| `card` | A white rounded box with a soft shadow |
| `btn` / `btn btn--outline` | Pretty buttons |
| `page-hero` | The rose title banner at the top |
| `table-wrap` | Put tables inside this so they scroll on phones |

Example:
```html
<div class="grid">
  <div class="card"><h3>Dr. Name</h3><p>Role here</p></div>
</div>
```

**Build only inside `<main> ... </main>`** on your page.

---

## ✏️ Naming rules

- File names: **lowercase, no spaces, use dashes** → `keynote-speaker.jpg` ✅  `Keynote Speaker (1).JPG` ❌
- Images go in the `img/` folder. Keep each one **under 500 KB** so the site loads fast on phones.
- Add `alt` text to every image: `<img src="img/name.jpg" alt="Dr. Name">`
- **Don't invent content.** Use only what Saman gives you. Missing something? Ask.

---

## 🚀 First time setup (once)

Open a terminal in the folder where you keep projects, then:

```
git clone https://github.com/samanvithakapu06-gif/rtic27.git
cd rtic27
code .
git checkout -b yourname-pages
```

The last line creates **your own branch**. Example: `priya-people`.

---

## 🔁 Your daily routine

**Every time you sit down to work:**
```
git checkout main
git pull
git checkout yourname-pages
git merge main
```
*(This brings the latest team changes into your branch.)*

**While you work:**
- Open your page by double-clicking the `.html` file to preview it in your browser.
- Resize the browser to check the phone layout.

**When you finish a chunk of work (do this often, at least 2 or 3 times a day):**
```
git add .
git commit -m "Say what you did in plain words"
git push -u origin yourname-pages
```
*(After the first time, a plain `git push` is enough.)*

**When a page is ready for review:**
1. Go to the repo on GitHub.
2. Click the yellow **"Compare and pull request"** banner (or **Pull requests → New**).
3. Write one line about what's in it, then click **Create pull request**.
4. Tell Saman in the group chat. Saman reviews and merges it.

---

## 🚫 The 6 golden rules

1. **Never push directly to `main`.** Always use your branch.
2. **Only edit your own pages.** If you must touch another file, ask first.
3. **Pull before you start.** Every single time.
4. **Commit small and often.** A small save point is easy to fix. A giant one is scary.
5. **Test on your phone-size screen** before saying "done".
6. **If you see red text in the terminal, don't panic and don't keep typing commands.** Screenshot it and send it to the group.

---

## 🆘 Stuck?

- Merge conflict, weird error, or something looks broken? **Screenshot it and message Saman.** Don't try random fixes, because they can make it worse.
- Need to work live together? Use **VS Code Live Share**.

---

## ✅ Done checklist (before opening a pull request)

- [ ] Works on a phone-size window and on a full laptop screen
- [ ] No spelling mistakes in the content
- [ ] All images load and have alt text
- [ ] Header and footer are unchanged
- [ ] Links work

Let's build something we're proud of. 🌸
