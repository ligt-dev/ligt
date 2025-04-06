import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ligt RDF Vocabulary",
  description: "A reference and examples for Ligt RDF vocabulary",
  base: '/ligt/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Getting Started', link: '/guide' },
      { text: 'Reference', link: '/reference' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Interlinear Glossed Text', link: '/guide/index.md' },
          { text: 'Basic Concepts', link: '/guide/basic-concepts.md' },
          { text: 'Layers', link: '/guide/layers.md' },
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Vocabulary', link: '/reference/index.md' },
          { text: 'Classes', link: '/reference/classes.md' },
          { text: 'Properties', link: '/reference/properties.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ligt-dev/ligt' }
    ]
  }
})
