---
layout: post
title: 2 Basic Things for Powerful SEO and Social Network 
date: 2020-04-03 00:00:00
thumbnail: /assets/img/posts/how-to-create-css-keyframe-animations/thumbnail.png
category: SEO
tags:
- seo
- html
- webdev
---

Hi guys,

In the last one or two months, I spent a lot of time working on SEO optimization in the company I work for. I was very happy that these efforts were not wasted and the improvements I made were useful. Today I will talk about open graph(og) tags and google structured data that i developed and implemented in this process. 

<h2>Open Graph</h2>

<h4>What is Open Graph</h4>
Open graph is a protocol that fully reads tags. It creates a preview of your content thanks to the tags you give it and allows you to create more attractive shares.

In the past, when you shared a link on sites like facebook or twitter, the system would choose any image and content description from the link and showed it. The system could choose any ridiculous image. For example, social media links on footer. Open graph is a protocol developed to solve this problem. For example, you can choose the description, image and title that will appear when you share a blog post on Twitter, thanks to the open graph.

Open graph is currently a protocol adopted by many major platforms such as Facebook, Youtube and Twitter.

<h4>Open Graph Tags</h4>
The 4 tags below are enough tags to create a basic preview. In addition, you can see all other tags from [here](https://ogp.me/).
```html
<meta property="og:title" content="PAGE TITLE" />
<meta property="og:description" content="PAGE DESCRIPTION" />
<meta property="og:url" content="PAGE URL" />
<meta property="og:image" content="PAGE IMG" />

```

Also, you can use [Twiter Card Validator](https://cards-dev.twitter.com/validator) and [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) to how your links will look on facebook and twitter. 

<h2>Google Structured Data</h2>
<h4>What is Google Structured Data:question:</h4>
Google structured data is a type of data used to give hints to the google bots to understand the page. By providing information about the page, you can help google to classify your page. 

If you want to be with enhanced views on Google Search, you need to add all the features required. Defining more recommended features can make you stand out from these searches. However, it is more important to provide fewer but more complete features rather than entering a missing or incorrect feature.

Google can also use schema.org and sameAs property. Some of these can be used to provide search features if the benefits are seen.

![Google Structured Data](https://dev-to-uploads.s3.amazonaws.com/i/avjby2b6jp7sloebnf8w.png)

I took the photo from [Google Developers](https://developers.google.com)
As you can see in the picture, when each feature of the recipe is labeled separately, users can search for the recipe using ingredients, calories, cooking time and other features.

Google structured data supports the following formats:
<ul>
 <li>JSON-LD (suggested)</li>
 <li>Micro Data</li>
 <li>RDFa</li>
</ul>



<h4>Google Structured Data Rules</h4>
There are certain rules for adding structured data to google search results. If these rules are not followed, google can reduce the popularity of your site or It might mark your site as spam.

I have listed some of these rules from by the Google developers page
              
1. Provide updated information. Google, no longer show rich snippets for time-sensitive content that is not relevant.                
2. Provide original content created by you or your users.            
3. Don't flag irrelevant or misleading content, such as fake comments or content that has nothing to do with the main idea of ​​the page.       
4. Do not use structural data to deceive or mislead users. Do not imitate any person or institution 
5. Indicate all the features required for your rich result type. Items with missing required features are not suitable for rich results.           
6. If you have duplicate pages for the same content, place the same structured data on all copies of the page, not just the standard page. 
7. Try to use the most obvious valid type and feature names defined by schema.org for your markup.      
8. All image URLs must be crawlable and indexable. Otherwise, Google Search cannot find them and display them on the search results page.       

<h4>Define the Type of Structured Data</h4>

To define the type of structured data;

Open A script tag of type application/ld+json into the head.
```html
<head>
 <script type="application/ld+json">

 </script>
</head>

```

Let's add the tag indicating that you will use schema.org in the script tag.

```html
<head>
 <script type="application/ld+json">
  {
   "@context": "http://schema.org/",
  }
 </script>
</head>

```


To tell Google what you explained.

```html
<head>
 <script type="application/ld+json">
  {
   "@context": "http://schema.org/",
   "@type": "Website"
  }
 </script>
</head>

```
Above we see an example of structured data in its simplest form. You can review schema.org to add the suggested features.

I will share an example of how the Organization scheme looks like below.
```html
<head>
 <script type="application/ld+json">
  {
   "@context": "http://schema.org",
   "@type": "Organization",
   "description": "Personal blog by Şefik Furkan Bayram. Furkan is a frontend 
    developer specializing in UI Design and JavaScript. He has been developing 
    web apps since 2018.",
   "url": "https://www.sfb.dev/",
   "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+905465459634",
    "contactType": "Personal"
    },
   "sameAs": [
    "https://www.twitter.com/sfbdev/",
    "https://www.dev.to/sfbdev/",
    "https://www.github.com/sfbdev/",
    "https://www.linkedin.com/in/sefikfurkanbayram/"
   ]
  }
 </script>
</head>

```

<h4>Validate the structured data</h4>
Finally, to test Google structured data you should use [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/u/0/). You can make your test either by URL or by adding code snippet.
![Google Structured Data Testing Tool](https://dev-to-uploads.s3.amazonaws.com/i/mlkr1yszg9dgdu7o1lr0.png)

If you are still here thank you for reading :)


