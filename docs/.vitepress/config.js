import { defineConfig } from "vitepress";
export default defineConfig({
  title: "ldf-blog",
  titleTemplate: "Vite & Vue powered static site generator",
  description: "A VitePress site",
  lastUpdatedText: "Updated Date",
  editLink: {
    pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
    text: "Edit this page on GitHub",
  },
  themeConfig: {
    outlineTitle: "In hac pagina",
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      { icon: "twitter", link: "..." },
      // 你也可以自定义svg的icon:
    ],
    sidebar: [
      {
        text: "Javascript",
        collapsed: true,
        items: [
          { text: "BOM", link: "/javascript/bom" },
          { text: "DOM", link: "/javascript/dom" },
        ],
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
    carbonAds: {
      code: "your-carbon-code",
      placement: "your-carbon-placement",
    },
    docFooter: {
      prev: "Pagina prior",
      next: "Proxima pagina",
    },
  },
});