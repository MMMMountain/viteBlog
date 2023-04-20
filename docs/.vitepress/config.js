import { defineConfig } from "vitepress";
export default defineConfig({
  title: "LDF",
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
          {
            text: "BOM",
            collapsed: true,
            items: [
              {
                text: "window",
                link: "/javascript/dom/window",
              },
            ],
          },
          { text: "DOM", link: "/javascript/dom" },
          {
            text: "七、迭代器与生成器",
            link: "/javascript/iteration-generator/index",
          },
          {
            text: "八、对象、类与面向对象编程",
            link: "/javascript/object-class/index",
          },
          {
            text: "九、代理与反射",
            link: "/javascript/proxy-reflect/index",
          },
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
