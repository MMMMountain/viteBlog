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
            text: "一、什么是 JavaScript",
            link: "/javascript/what-is-javascript/index",
          },
          {
            text: "二、HTML 中的 JavaScript",
            link: "/javascript/javascript-in-html/index",
          },
          {
            text: "三、语言基础 ",
            link: "/javascript/language-base/index",
          },
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
          {
            text: "十、函数",
            link: "/javascript/function/index",
          },
          {
            text: "十一、期约与异步函数 ",
            link: "/javascript/promise-async/index",
          },
          {
            text: "十二、BOM ",
            link: "/javascript/bom/index",
          },
          {
            text: "十三、客户端检测 ",
            link: "/javascript/client-detection/index",
          },
          {
            text: "十四、DOM ",
            link: "/javascript/dom/index",
          },
          {
            text: "十五、DOM 扩展",
            link: "/javascript/dom-extend/index",
          },
          {
            text: "十六、DOM2和DOM3",
            link: "/javascript/dom2-dom3/index",
          },
          {
            text: "十七、事件",
            link: "/javascript/event/index",
          },
          {
            text: "十八、动画与 Canvas 图形",
            link: "/javascript/animation-canvas/index",
          },
          {
            text: "十九、表单脚本",
            link: "/javascript/form-script/index",
          },
          {
            text: "二十三、JSON",
            link: "/javascript/json/index",
          },
          {
            text: "二十四、网络请求与远程资源",
            link: "/javascript/network-remote-resource/index",
          },
          {
            text: "二十四、客户端存储",
            link: "/javascript/client-storage/index",
          },
        ],
      },
      {
        text: "设计模式",
        collapsed: true,
        items: [
          {
            text: "一、面向对象的 JavaScript",
            link: "/design-mode/object-javascript/index",
          },
          {
            text: "二、this、call 和 apply",
            link: "/design-mode/this-call-apply/index",
          },
          {
            text: "三、闭包和高阶函数",
            link: "/design-mode/closure-function/index",
          },

          {
            text: "十八、单一职责",
            link: "/design-mode/srp/index",
          },
          {
            text: "十九、最少知识原则",
            link: "/design-mode/less-knowledge-principle/index",
          },
          {
            text: "二十、开放-封闭原则",
            link: "/design-mode/open-close-principle/index",
          },
          {
            text: "二十二、代码重构",
            link: "/design-mode/ code-refactor/index",
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
