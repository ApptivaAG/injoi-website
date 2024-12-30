import type { BlogPost, Language } from './types'

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

