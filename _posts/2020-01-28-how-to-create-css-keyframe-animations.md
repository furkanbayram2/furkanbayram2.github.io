---
layout: post
title: How to create CSS keyframe animations
date: 2020-01-28 13:15:00
thumbnail: /assets/img/posts/how-to-create-css-keyframe-animations/thumbnail.png
category: css
tags:
- css
- beginners
- webdev
---

Firstly hi,

Before, i usually used jquery to make animation for web apps. But with the innovations coming with CSS3, I can say that I am not even looking at the face of the jQuery library about animations anymore. 

Today i will show you what you can do with keyfreames.
__I will not tell magical things :)__ 

With the @keyframes feature, we can make various animations only with CSS without using any plugins. Shift, change color, growth, shrinkage etc. to any DOM element. We can apply effects. In short, we set a certain time interval with @keyframes and we can apply everything that can be done with CSS in this time interval to our item. 

## Browser Support ##
I want to talk about browser support before I begin my narration. All versions of Google Chrome, Mozilla, Opera and Safari support this feature. It is for more detailed table than <a href="https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp" target="_blank">here</a>.


##Usage##
It's really simple 
```css
@keyframes animation-name{
    from { css attributes }
    to { css attributes }
}
```

You can type any variable name that describes your animation in the place that says "animation-name". The __"from"__ part refers to our starting values, the __"to"__ part refers to our end values. Also, we can use it by expressing it in percentiles. Expressing in percentiles in general enables us to establish a more flexible structure.


##Features##
There are a few values that the selector we will apply animation to. These values are;

| Property                  | Description   |
| -------------             |:-------------:|
| animation                 |A shorthand property for setting all the animation properties|
| animation-name            |Specifies the name of the @keyframes animation|
| animation-duration        |Specifies how long time an animation should take to complete one cycle|
| animation-timing-function |Specifies the speed curve of the animation|
| animation-delay           |Specifies a delay for the start of an animation|
| animation-iteration-count |Specifies the number of times an animation should be played|
| animation-direction       |Specifies whether an animation should be played forwards, backwards or in alternate cycles|
| animation-fill-mode       |Specifies a style for the element when the animation is not playing (before it starts, after it ends, or both)|
| animation-play-state      |Specifies whether the animation is running or paused|

##Example##
```css
.box{
    width:25px;
    height:25px;
    background-color:blue;
    animation-name:animasyon-ismi;
    animation-duration:2s;
}

@keyframes animation-name{
10% { 
    width:100px;
    height:100px;
    background-color:red;
 }
50% {
    width:150px;
    height:150px;
    background-color:purple;
 }
100% { 
    width:50px;
    height:50px;
    background-color:yellow;
 } 
}

```

I have divided our animation into 3 parts above. If you want, you can divide it into 100 equal parts :) 10%, 25%, 50%, 75%, 100%… You can see my application by clicking [here](https://codepen.io/furkanbayram2/pen/mLrjKp).