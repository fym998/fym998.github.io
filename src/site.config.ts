import type { AstroExpressiveCodeOptions } from "astro-expressive-code";
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "fym998",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "zh-Hans",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Used as the default description meta property and webmanifest description
	description: "Fym998's Blog",
	// HTML lang property, found in src/layouts/Base.astro L:18 & astro.config.ts L:48
	lang: "zh-Hans",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "zh_Hans",
	/*
		- Used to construct the meta title property found in src/components/BaseHead.astro L:11
		- The webmanifest name found in astro.config.ts L:42
		- The link value found in src/components/layout/Header.astro L:35
		- In the footer found in src/components/layout/Footer.astro L:12
	*/
	title: "Fym998's Blog",
	// ! Please remember to replace the following site property with your own domain, used in astro.config.ts
	url: "https://fym998.github.io/",
};

// Used to generate links in both the Header & Footer.
export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "首页",
	},
	{
		path: "/about/",
		title: "关于",
	},
	{
		path: "/posts/",
		title: "博文",
	},
	{
		path: "/notes/",
		title: "小记",
	},
	{
		path: "https://github.com/fym998/fym998.github.io",
		title: "GitHub",
	},
];

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		// return default selector
		return `[data-theme="${theme.name}"]`;
	},
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ["dracula", "github-light"],
	useThemedScrollbars: false,
};

/**
	Uses https://www.astroicon.dev/getting-started/
	Find icons via guide: https://www.astroicon.dev/guides/customization/#open-source-icon-sets
*/
export const socialLinks: {
	friendlyName: string;
	isWebmention?: boolean;
	link: string;
	iconName: string;
}[] = [
	{
		friendlyName: "Email",
		link: "mailto:fujun998@outlook.com",
		iconName: "tabler:mail",
	},
	{
		friendlyName: "Github",
		link: "https://github.com/fym998",
		iconName: "tabler:brand-github",
	},
	{
		friendlyName: "bilibili",
		link: "https://space.bilibili.com/443851006",
		iconName: "tabler:brand-bilibili",
	},
];
