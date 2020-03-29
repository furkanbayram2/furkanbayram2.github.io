---
layout: post
title: What is CSS Preprecessors? (for begginers)
date: 2020-03-26 12:30:00
category: scss
tags:
- css
- scss
- sass
---

Hello to everyone

Today I will give information about SASS and SCSS from CSS-preprocessors.

<h2>What is CSS Preprocessor :question:</h2>
Preprocessors provides us opportunities such as creating functions, defining variables, using operators while writing CSS as in programming languages.

There are 3 preprocessor that are popular right now. These are <strong> SASS, LESS, </strong> and <strong> Stylus </strong>. In this article, I will talk about <strong> SASS </strong> and <strong> SCSS </strong>.

<h2> What is SASS :question:</h2>
<strong> SASS </strong> is a Ruby Gem that started to be developed in 2006 and aims to write CSS in a language close to the Ruby language. It is currently being developed as an open source technology.

We wouldn't expect CSS to remain an old technology in the constantly evolving software world. Thanks to <strong> SASS </strong> we started dynamically writing CSS, and making advanced animations without including javascript on our pages has become easier and simpler thanks to <strong>SASS</strong>.

<strong> SASS </strong> is an extension language. It is a technology that allows us to write our work with CSS easier, faster and more readable. It is written with a Ruby-like syntax and these codes are converted to CSS.

<h2> What is SCSS?</h2>
<strong> SCSS is SASS more like CSS as syntax. </strong>

Developers accustomed to writing CSS were having trouble writing <strong> SASS </strong> because no parentheses and semicolons were used when writing SASS. For this reason, using <strong> SCSS </strong>, brackets and semicolons are back. Syntax look a bit more like CSS.

<h2> Why Should We Use SCSS?</h2>
You will understand why you should use <strong> SCSS </strong> more easily with the examples I will show in other articles, but for now let me tell you about a few awesome features of <strong> SCSS </strong>.

1. I think the most important reason we use <strong> SCSS </strong> is that we can remove CSS from the static structure and use it like a dynamic programming language.
2. It allows us to quickly create style files.
3. As projects grow, our CSS files become more complex. After a certain time, the codes start to repeat, which causes us to write code unnecessarily. <strong> SCSS </strong> saves us from this complexity and prevents us from repeating code.

<h2> How to Install SASS and SCSS?</h2>
We do not install SASS and SCSS separately. As I mentioned above, both work under the same roof, only syntax difference. The setup below applies to both.

We have two options to install on your computer. The first is with utility desktop programs, and the second is setup from the command line. I will tell you the setup from the command line...

1. To work with <strong> SASS </strong> and <strong> SCSS </strong>, Ruby must be installed on our computer.
You can download and install <a href="https://rubyinstaller.org/downloads/"> here </a> by selecting the version that is appropriate for your operating system.

2. After installing Ruby on our computer, we come to the desktop, press the <strong> Windows + R </strong> keys and start the command line by typing <strong> cmd </strong> in the field that opens.

3. We install the sass by typing the following command on the command line.

```ruby
gem install sass
```


Type the following command to check that the installation is taking place and as a result, if it returns the sass version installed on your computer, the installation is complete.

```ruby
sass -v
```

<h2>Result</h2>
There is no need to explain the importance of a clean and readable code structure. As the projects grow, the CSS files become unusable and it is very difficult to write these style files in a clean and legible way with CSS only. This is where <strong> CSS preporecessors </strong> come into play. The reason I use SCSS is that the syntax is very similar to CSS and there are many sources.

If you don't be careful when you write <strong> SCSS </strong>, after a while it will not be different from normal CSS. This means that there is no point in using <strong> CSS preporecessor </strong>. So you need to code carefully and cleanly.

In my next article, I will talk about how to make SASS and SCSS settings. I would be very happy if this will help you.

Have a nice day!
