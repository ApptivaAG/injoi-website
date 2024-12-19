# injoi Website

## Stack

### Web framework

Uses [Astro](https://astro.build/) to static build the site.

```sh
npm start # start dev env
npm run build # build site
npm run preview # serve the built site
npm run netlify # dev env with netlify (rerouting for language)
```

### Dependency Managment

Use [pnpm](https://pnpm.io/) to manage dependencies.
```sh
pnpm i # install deps
pnpm add -D {my-new-dependency} # add
pnpm rm {dependency-i-want-to-remove} # remove
pnpm up --latest # update all deps to the latest version 
```
