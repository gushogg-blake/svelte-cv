svelte-cv
===

Use this repo as a template to create a CV like [this one](//cv.gushogg-blake.com).

The idea is that you can send out a clean, one-page PDF CV where each previous employment listing links to an online version with more detail.

Configuration
---

To set up your CV, fill in the configuration details in [src/config.js](./src/config.js) and (if you want to automatically update the PDF version) in [.github/workflows/pdf.yml](./.github/workflows/pdf.yml).

You will also need to update the Svelte layout and routes -- the content is specified directly in them as opposed to in e.g. JSON, to allow for maximal flexibility in how things are laid out and formatted. This means that some things need to be updated in more than one place, e.g. previous employment details in both the summary and detail views.

Deployment
---

I recommend using Vercel to deploy -- just create an account, click New project, and import your repo.
