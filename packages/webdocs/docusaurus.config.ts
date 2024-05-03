import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Innomotics BRAND EXPERIENCE",
  tagline: "UX package",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://innomotics.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/brand-experience/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "innomotics", // Usually your GitHub org/user name.
  projectName: "inno-UX", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.scss",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-sass",
      { sassOptions: { includePaths: ["../../node_modules"] } },
    ],
  ],
  markdown: {
    mermaid: true
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      style: "dark",
      logo: {
        alt: "Inno Logo",
        src: "img/innomotics-logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "layoutSidebar",
          position: "left",
          label: "Layout",
        },
        {
          type: "docSidebar",
          sidebarId: "componentSidebar",
          position: "left",
          label: "Components",
        },
        {
          type: "docSidebar",
          sidebarId: "fontsSidebar",
          position: "left",
          label: "Fonts",
        },
        {
          type: "docSidebar",
          sidebarId: "iconsSidebar",
          position: "left",
          label: "Icons",
        },
        {
          type: "docSidebar",
          sidebarId: "colorsSidebar",
          position: "left",
          label: "Colors",
        },
        {
          href: "https://github.com/innomotics/brand-experience",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/innomotics/brand-experience",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Innomotics. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: { dark: 'neutral' }
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
