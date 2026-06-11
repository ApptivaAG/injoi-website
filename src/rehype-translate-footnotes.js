const translations = {
  de: 'Fussnoten',
  fr: 'Notes de bas de page',
  it: 'Note a piè di pagina',
  en: 'Footnotes',
}

export default function rehypeTranslateFootnotes() {
  return function (tree, vfile) {
    const lang = vfile.data.astro?.frontmatter?.lang
    const label = translations[lang] || translations.en
    if (!label) return

    function visit(node) {
      if (
        node.type === 'element' &&
        node.tagName === 'h2' &&
        node.properties?.id === 'footnote-label'
      ) {
        if (node.children && node.children.length > 0) {
          node.children[0].value = label
        }
        return
      }
      if (node.children) {
        for (const child of node.children) {
          visit(child)
        }
      }
    }

    visit(tree)
  }
}
