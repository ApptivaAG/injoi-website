import type { BlogPost, Language } from './types'
import type { getImage as GetImage } from '@astrojs/image'
import type { ImageMetadata } from '@astrojs/image/dist/vite-plugin-astro-image'

export const mkIsCurrentPage =
  (currentPathname: string) =>
  (path: string, { exact = false } = {}) => {
    const pathname = addSlashToEndIfMissing(currentPathname)
    if (exact) return pathname === path
    return pathname.includes(path) ? 'page' : undefined
  }

export const getCurrentLanguage = (currentPathname: string): Language => {
  if (currentPathname.substring(3, 4) !== '/') return 'en'
  return currentPathname.substring(1, 3) as Language
}

export const takeSortedBlogPosts = (
  blogPosts: BlogPost[],
  language: Language,
  take?: number
) =>
  [...blogPosts]
    .sort(
      (a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date)
    )
    .filter((post) => post.frontmatter.lang === language)
    .slice(0, take)

export const addSlashToEndIfMissing = (url: string) =>
  url.endsWith('/') ? url : `${url}/`

export const currency = Intl.NumberFormat('de-CH', {
  style: 'currency',
  currency: 'CHF',
  notation: 'compact',
  compactDisplay: 'short',
})

type Images =
  | {
      image: ImageMetadata
      fixed: string
    }
  | undefined
export const mkHeroImages =
  (getImage: typeof GetImage) =>
  async (
    slug: string | undefined,
    name: string | undefined,
    base: string | undefined,
    lang: Language,
    alt: string
  ): Promise<Images> => {
    if (name === undefined || slug === undefined || base === undefined) {
      return undefined
    }
    const img = (
      await import(`./pages/${lang}/blog/${slug.split('/').at(-2)}/${name}.jpg`)
    ).default

    const { src } = await getImage({
      src: img,
      width: 1200,
      height: 630,
      alt,
    })
    const openGraphImage = src
      ? new URL(src, base).href
      : new URL('/injoi-bestell-app.png', base).href

    return { image: img, fixed: openGraphImage }
  }
