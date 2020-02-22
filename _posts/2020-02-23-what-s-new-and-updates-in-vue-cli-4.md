---
layout: post
title: What's New and Updates in Vue CLI 4.0
date: 2020-02-22 12:30:00
category: vue
tags:
- vue
- javascript
- webdev
---


Hi guys

Today, I will talk about new features that come with Vue CLI 4.0.

# How to Install or Update to 4.0 ?

## Install

If no vue cli version is installed on your computer, you can download the latest cli version by running the command below.
```javascript
npm install -g @vue/cli #for npm
# OR
yarn global add @vue/cli #for yarn
```

## Update

If you have vue cli on your computer, you can update it latest version by running the command below.

    vue upgrade

# What's New?

## The default directory structure was changed for Vuex and Router

In v3 the default directory structure is **src/router.js** for router
In v4 the default directory structure is **src/router/index.js** for router

In v3 the default directory structure is **src/store.js** for vuex
In v4 the default directory structure is **src/store/index.js** for vuex


**In addition:** It's time to `api.hasPlugin('router')` time. `api.hasPlugin('vue-router')` is no longer supported. 

## Extra Approval Step to Prevent Overwriting

 If you have uncommitted changes in the current repository, you will see a one more step when you run vue add or vue upgrade or vue invoke.
```bash
PS C:\Projects\FURKAN\weatherapp> vue add eslint
WARN  There are uncommited changes in the current repository, It's recommended to
commit or stash them first.
? Still proceed? (y/N)
```

## About SASS/SCSS

In version3 there is `sass-loader@7` by default. `sass-loader@8` is default version now.

If you look vue cli documantation, you will see this block.

`@vue/cli-service` will continue to support `sass-loader@7` in v4, but we strongly recommend you to take a look at the v8 release and upgrade to the latest version.

## Whitespace handling in the template block

To get a smaller package, the preserveWhitespace option of vue-template-compiler is disabled by default in Vue CLI v3.


```html
<span>
    This is <strong>an</strong> <strong>example.</strong>
    Can't touch <strong>this</strong>
</span>
```

With whitespace: 'condense'

```html
<span> This is <strong>an</strong> <strong>example.</strong> Can't Touch <strong>this</strong> </span>
```

With preserveWhitespace: false, 

```html
<span> This is <strong>an</strong><strong>example.</strong> Can't touch <strong>this</this> </span>
```

Note the **inline** whitespace between tags is now preserved.

## Build Command for Development Mode

When you running the build command in version 3 in development mode, the dist folder would be different from the production mode. Now, the directory structures across all modes would be the same.

## About Plugins

I got the this part from [https://cli.vuejs.org/migrating-from-v3](https://cli.vuejs.org/migrating-from-v3) 

### @vue/cli-plugin-typescript

When importing a file without extension, the webpack resolve options now prefer .ts(x) files over .js(x) and .vue ones. We strongly recommend you to always include the file extension when importing .vue files.

### @vue/cli-plugin-jest

Jest is updated from v23 to v24.

The unit-jest plugin now comes with 4 configuration presets:

- `@vue/cli-plugin-unit-jest` The default preset for the most common type of projects
- `@vue/cli-plugin-unit-jest/presets/no-babel` If you don't have `@vue/cli-plugin-babel` installed and don't want to see babel files in the project
- `@vue/cli-plugin-unit-jest/presets/typescript` The preset with TypeScript support (but no TSX support)
- `@vue/cli-plugin-unit-jest/presets/typescript-and-babel` The preset with TypeScript (and TSX) and babel support.

If you haven't changed the default Jest configurations (lies in either `jest.config.js` or the `jest` field in `package.json`) ever since project creation, you can now replace the massive configuration object with one single field: 

```javascript
module.exports = {
 // Replace the following preset name with the one you want to use from the above list
    preset: '@vue/cli-plugin-unit-jest'
}
```

**A Reminder**                                                                                                                           The default test environment in the new presets is jsdom@15, which differs from the default one in Jest 24 (jsdom@11). This is to be aligned with the upcoming Jest 25 updates. Most users won't be affected by this change. For a detailed changelog with regard to jsdom, see **[https://github.com/jsdom/jsdom/blob/master/Changelog.md](https://github.com/jsdom/jsdom/blob/master/Changelog.md)**

### @vue/cli-plugin-unit-mocha

- Use mochapack instead of mocha-webpack, see changelog at **[https://github.com/sysgears/mochapack/releases](https://github.com/sysgears/mochapack/releases)**. This change is not likely to affect actual usage.

### @vue/cli-service-global

See breaking changes in the **`[@vue/cli-service](https://cli.vuejs.org/migrating-from-v3/#vue-cli-service)`** & **`[@vue/cli-plugin-eslint](https://cli.vuejs.org/migrating-from-v3/#vue-cli-plugin-eslint)`** packages.

### @vue/cli-plugin-eslint

This plugin now **[requires ESLint as a peer dependency](https://github.com/vuejs/vue-cli/pull/3852)**.

This won't affect projects scaffolded with Vue CLI 3.1 or later.

If your project was scaffolded with Vue CLI 3.0.x or earlier, you may need to add `eslint@4` to your project dependencies (This is automated if you upgrade the plugin using `vue upgrade eslint`).

It's also recommended to upgrade your ESLint to v5, and ESLint config versions to the latest. (ESLint v6 support is still on the way)

---

**The Prettier Preset**

The old implementation of our prettier preset is flawed. We've updated the default template since Vue CLI v3.10.

It now requires `eslint`, `eslint-plugin-prettier` and `prettier` as peer dependencies, following the **[standard practice in the ESLint ecosystem](https://github.com/eslint/eslint/issues/3458)**.

For older projects, if you encountered issues like `Cannot find module: eslint-plugin-prettier`, please run the following command to fix it:

`npm install --save-dev eslint@5 @vue/eslint-config-prettier@5 eslint-plugin-prettier prettier`
---
### @vue/cli-plugin-e2e-cypress

Before Vue CLI v3.0.0-beta.10, the default command for E2E testing was `vue-cli-service e2e`. Later we changed it to `vue-cli-service test:e2e`. The previous command was since deprecated but still supported. We have now completely **[dropped support for this legacy command](https://github.com/vuejs/vue-cli/pull/3774)**.

### @vue/cli-plugin-e2e-nightwatch

Nightwatch.js has been upgraded from 0.9 to 1.x. Be sure to read the **[Nightwatch migration guides](https://github.com/nightwatchjs/nightwatch/wiki/Migrating-to-Nightwatch-1.0)** first.

The bundled config and generated tests **[have been completely overhauled](https://github.com/vuejs/vue-cli/pull/4541)**. Please follow the link for more details. Most use cases in Vue CLI v3 are still supported. They are just new features.

As ChromeDriver has changed its version strategy since version 73, we've made it a peer dependency in the project. A simple browser version check is implemented in the plugin, so if you've upgraded to an incompatible version of Chrome, there will be a warning to prompt you to upgrade the depended ChromeDriver version.

---


**I would like to state that I have received some of the places in this post from [Vue CLI](https://cli.vuejs.org/migrating-from-v3/). See the references section for more information.**

I hope that gives a basic idea about cli 4.0 is and what came with it. If you are still here thank you for reading :)

## References
[Migrating from v3](https://cli.vuejs.org/migrating-from-v3/)