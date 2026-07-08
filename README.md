# Gené van Aswegen Private Portfolio

Version 1 of the private portfolio website for Gené van Aswegen. The build uses Next.js App Router, TypeScript, Tailwind CSS, local sample project data and browser storage for the admin flow.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/portfolio`.

For local admin access, create `.env.local`:

```bash
ADMIN_PASSWORD=studio-v1
```

Restart the dev server after changing environment variables.

## Main Links

- Portfolio: `/portfolio`
- Case study pages: `/projects/[slug]`
- Admin project manager: `/admin/projects`

The admin link is intentionally not shown on the public portfolio.

## Admin Access

Version 1 uses a simple password gate checked by a server route. The password is read from:

```bash
ADMIN_PASSWORD
```

Local default for this workspace is `studio-v1` in `.env.local`. Change it before sharing the deployed admin URL.

## Project Editing

Go to `/admin/projects` after unlocking the admin area.

- Add a project with `Add New Project`.
- Edit an existing project with `Edit`.
- Preview any draft, hidden or published project with `Preview`.
- Duplicate a project with `Duplicate`; the copy is saved as a hidden draft.
- Delete a project with `Delete`; a confirmation modal appears first.
- Publish/unpublish from the edit screen.
- Mark projects as hidden or featured from the edit screen.
- Reorder projects by editing the `Order` field.

Only projects with `status: "published"` and `hidden: false` appear on `/portfolio`.

## Images For Now

Cover and gallery fields currently accept image paths or URLs as plain text.
The admin editor also supports uploading images from your device for Version 1. These uploads
are compressed in the browser and saved to local browser storage with the project entry.

Imported portfolio assets live in:

```txt
public/portfolio-assets/
```

Profile and CV assets live in:

```txt
public/images/
public/cv/
```

Example image path:

```txt
/portfolio-assets/kleinkrans/cover.webp
```

To replace an image now, either upload it in the admin editor or add the file to
`public/portfolio-assets/` or another folder inside `public/`, then update the path in admin.
Real cloud uploads and hosted asset storage will be handled later.

## Local Data

Seed project data lives in:

```txt
lib/projects.ts
```

Admin changes are saved to browser `localStorage` under `gene-portfolio-projects-v2`. This keeps Version 1 simple while allowing the full add/edit/delete/publish flow to work before Supabase.

On Vercel, project edits are still browser-local in Version 1. Supabase will later replace local browser storage, static seed data as the primary source, and manual image paths.

## Privacy

The portfolio and project pages include `noindex`/`nofollow` metadata:

- `app/portfolio/page.tsx`
- `app/projects/[slug]/page.tsx`

`app/robots.ts` also disallows crawling for the full site in this private Version 1.

## Vercel Deployment

1. Push this project to GitHub.
2. In Vercel, create a new project and import the GitHub repo.
3. Use the default Next.js settings.
4. Add the environment variable listed below before deploying.
5. Deploy.
6. Open `/portfolio` on the Vercel domain.
7. Open `/admin/projects` manually when you need the admin portal.

Vercel build command:

```bash
npm run build
```

Vercel install command:

```bash
npm install
```

## Vercel Environment Variables

Add exactly this variable in Vercel:

```bash
ADMIN_PASSWORD=your-private-admin-password
```

Add it to Production, Preview and Development environments if you want the admin portal to work in all Vercel deployments.

## Design Reference

The exported Stitch design files are preserved in:

```txt
public/reference/
```

Read `DESIGN.md` before changing layouts or visual styling.
