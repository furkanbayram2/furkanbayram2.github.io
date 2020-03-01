---
layout: post
title: Coolest Tool for Writing Documentation - VuePress
date: 2020-02-09 12:00:00
thumbnail: /assets/img/posts/coolest-tool-for-writing-documantation-vuepress/thumbnail.png
category: webdev
tags:
- javascript
- vue
- webdev
---


# Introduction

Last week was my first week in my new job and don't have much idea about our projects. We have decided as a team to write documantation. My team lead asked me to create a documentation project for all of our projects. So i did some research and saw a cool star. Then i noticed it was VUEPREEESSS

:coffee:

It's really simple and useable.

## What is VuePress

> VuePress is composed of two parts: a minimalistic static site generator with a Vue-powered theming system and Plugin API, and a default theme optimized for writing technical documentation. It was created to support the documentation needs of Vue’s own sub projects.


You encounter this part when you open the site of VuePress. I used VuePress to create a documentation project. 

## How to Create a VuePress Project?

I used npm to install vuepress.

    # install vuepress
    npm install -g vuepress # OR yarn global add vuepress
    
    # create the project folder
    mkdir vuepress-project
    
    # create a markdown file for homepage
    echo '# Hello VuePress' > README.md
    
    # run project
    vuepress dev
    
    # for build
    #vuepress build

After this, you will see just an empty page and Hello VuePress text. You will need a config file to customize to your project.

# Customize the project

It is suggested that we create a directory named .vuepress in the Vuepress documentation. Everything about of VuePress will be here.

### Config File

You should create a config file to customize the project and should export configs. It is config.js and must be in .vuepress file.



    module.exports = {
    	title: 'Project Title',
    	description: 'Project Description',
        themeConfig: {
            nav: [
              	{ text: 'Home', link: '/' },
              	{ text: 'Guide', link: '/guide/introduction' },
            ],
    
            sidebar: [
               {
                   title: 'Home',
                   path: '/home/',
               },
               {
                   title: 'Submenu',
                   path: '/submenu/',
               }
            ],
        }
    }

I wrote my project name and description. In addition I created a navbar and sidebar for navigation.

![Basic Project](https://dev-to-uploads.s3.amazonaws.com/i/6ylealt1xo11xh8vycfi.png)

### Customize the Homepage

To customize the homepage, you can edit the readme.md file of the homepage **(./README.md)** as follows.

    ---
    home: true
    heroImage: /img/logo.jpg
    heroText: Welcome
    actionText: Get Started
    actionLink: /home/
    features:
    - title: Simplicity First
      details: Minimal setup with markdown-centered project structure helps you focus on writing.
    - title: Vue-Powered
      details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
    - title: Performant
      details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
    footer: Copyright © 2020
    --- 

And your homepage will looks like this.
![Homepage](https://dev-to-uploads.s3.amazonaws.com/i/58fmlo9kevnkzjpg9iuf.png)


Your project looks like this and the document structure is as follows:

    .
    ├─ .vuepress
    │    └─ config.js
    ├─ home
    │	  └─ README.md
    ├─ submenu
    │	  └─ README.md
    ├─ README.md
    └─ package.json

## What's the next?

**_IT'S TIME TO WRITE DOCUMANTATION FOR FUTURE GENERATIONS!!!_**

As you can see it's much easy. You can use an editor to write .markdown and so can write documentation fastly. 

Thank you for read. If you enjoy this article please like and share! See you! 