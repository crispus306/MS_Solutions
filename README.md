# Solutions architect portfolio

Static site: no build step, no dependencies.

## Run it
Open `index.html` in a browser, or in VS Code install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**.

## Where to edit
- `index.html`: all text (name, hero, approach, about, stats, contact email).
- `script.js`: the `P` array at the top holds the four projects (title, sector, description, tags, two gradient colors).
- `styles.css`: colors live in the `:root` block at the top (`--bg`, `--gold`, `--ink`). Change `--gold` to re-accent the whole site.

## Adding real images
Replace the blueprint SVG in `.hero` with a CSS background:
`background:linear-gradient(rgba(14,13,11,.6),rgba(14,13,11,.85)),url(images/hero.jpg) center/cover;`
For projects, change the `art()` call in `show()` to output `<img src="images/project1.jpg" alt="">`.
