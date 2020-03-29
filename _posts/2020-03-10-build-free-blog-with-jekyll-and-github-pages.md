---
layout: post
title: Build Free Blog with Jekyll
date: 2020-03-10 12:30:00
thumbnail: /assets/img/posts/whats-new-and-updateds-in-vue-cli-4/thumbnail.png
category: webdev
tags:
- jekyll
- github
- webdev
---
Hi everybody, Firstly, I tell about what is <a href="https://jekyllrb.com/">Jekyll</a>? What should we use? <a href="https://jekyllrb.com/">Jekyll</a> is a tool that allows us to create static web pages developed by Github with ruby. When we entered Jekyll's official website, we saw, "Transform your plain text into static websites and blogs." It is completely free and has a considerable number of users. Without further ado, I want to talk about how to install jekyll, how to make it work .



<strong>NOTE: I use Debian 9, So I will make my narration on Linux operating systems.</strong>

<h2>Advantage/Disadvantage</h2>
<h3>+</h3>
As with WordPress, you don't have to deal with plugins. You produce your content, Jekyll will do the rest. When you do not tire the server with the plugins and do not require a database on top, the sites you will create with Jekyll will be very high performance.

<h3>-</h3>
 It is not so easy to install a plugin / theme with one click, as in WordPress platform, you should know a little technical information about HTML - CSS - JS-Ruby photos server configuration.



<h2>Install Jekyll</h2>

If you want to use <a href="https://jekyllrb.com/">Jekyll</a>, you need to install ruby to the computer. 

{% highlight bash %}

su 	// you need to be root on the system to install ruby

{% endhighlight %}
It will ask us for our system password. After entering, we press enter and continue.

{% highlight bash %}

apt-get install ruby-full 	// installing ruby

exit 				// exit root.

{% endhighlight %}
After installing Ruby, we exit root mode with the <strong>exit</strong> command.

{% highlight bash %}

gem install jekyll 		// install jekyll

{% endhighlight %}

NOTE: The reason I passed these places quickly is that there is a lot of resources and documentation on the internet. If you get an error or encounter a problem, you can contact me on my social media accounts. I try to help as much as I can.

<h2>Create a Jekyll Project</h2>

{% highlight bash %}

jekyll new project_name 		// create project
	
cd project_name 			// go to project folder

jekyll serve 			// run project

{% endhighlight %}

We created our first project with the <strong>new</strong> command. Then we go into the folder where we created our project and run our project with the <strong>jekyll serve</strong> command.

![Bash](https://dev-to-uploads.s3.amazonaws.com/i/e350urm0crel426gcjff.png)

If we get an output like above, our site has been created and working successfully.
If we open our browser and enter <strong>localhost:4000</strong> in the address bar, our site will open.

![Bash 2](https://dev-to-uploads.s3.amazonaws.com/i/jsboco7o37avq9ewwk0v.png)

And our site is ready. In the next articles, I will explain what the folders in the project do, how to use a ready-made theme, how to publish it on github and how to use our own domain name.



