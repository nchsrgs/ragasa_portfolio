# Nichos Ragasa Portfolio

A statically exported Next.js portfolio. Content is kept in one typed file so it can be updated without editing page components.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Use `npm run build` to create the static site in `out/`.

## Edit content

- `src/data/portfolio.ts`: name (`nameLines`), bio, contact details, social links, skills, experience, education, projects, certifications, and achievements.
- Skill names have an icon mapping in `src/components/skill-icon.tsx`; add a mapping when adding a new skill name.
- Add or remove items in `experiences` and `education`. The first experience `contributions` item appears in the timeline; remaining contributions expand inline. Optional `systems`, `tools`, and `methodologies` appear in that expanded view.
- Add a public project with a short card description and a full detail description. Links, features, architecture notes, contribution, and image are optional.

```ts
{
  id: "my-project",
  name: "My Project",
  shortDescription: "A one-sentence summary for the card.",
  description: "What the project does and why it was built.",
  date: "2026",
  technologies: ["Node.js", "PostgreSQL"],
  websiteUrl: "https://example.com",
  repositoryUrl: "https://github.com/example/my-project",
  features: ["A notable feature"],
}
```

- For a restricted project, set `isNDA: true` and include only an approved `shortDescription` and public-safe `technologies`. Do not put confidential descriptions, files, links, or screenshots in this repository or its `public/` folder. This is a static site: hiding data in the UI does not make it private.
- Put certificate PDFs or images in `public/certificates/` and add an item to `certifications`. Images need meaningful `alt`, `width`, and `height`; PDFs use `kind: "pdf"`. The section stays hidden when the array is empty. Certificate content loads only when its detail view opens.

```ts
{
  id: "java-certification",
  name: "Java Programming Certification",
  acquiredAt: "September 2026",
  issuer: "Issuer name",
  asset: { kind: "pdf", src: "/certificates/java-certification.pdf" },
}
```

- Add items to `achievements` to reveal that section; leave it empty to hide it.
- Replace `public/images/nichos-portrait.jpg` to change the hero photo. Update `profile.photo.alt` if its content changes.
- Replace `public/favicon.svg` to change the site icon.
- Replace `public/resume/nichos-ragasa-resume.pdf` to update the downloadable resume. This is a copy of the original CV, not generated from the site data.

All external profile links are defined in `socialLinks`. The visible name is "Nichos Ragasa"; the downloadable CV includes the full name.
