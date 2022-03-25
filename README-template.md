# Frontend Mentor - Meet landing page solution

This is my solution to the [Meet landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Github](https://github.com/Mabchir/meet-landing-page-challenge)
- Live Site URL: [Netlify](https://github.com/Mabchir/meet-landing-page-challenge)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JQuery

### What I learned

How to add a virtual line

```html
<style>
  .vl {
    border-left: 6px solid green;
    height: 500px;
  }
</style>

<div class="vl"></div>
```

how to add a color to a background image using box-shadow

```css
html {
  min-height: 100%;
  background: url(http://lorempixel.com/800/600/nature/2);
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(255, 0, 150, 0.3);
}
```

move elements according to window size

```js
$(window).resize(function () {
  if ($(window).width() < 768) {
    $("#moveElement").appendTo(".b");
  } else {
    $("#moveElement").appendTo(".a");
  }
});
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [w3schools](https://www.w3schools.com/howto/howto_css_vertical_line.asp) - How to add a virtual line .
- [stackoverflow](https://stackoverflow.com/questions/38145368/css-workaround-to-backdrop-filter) - the backdrop-filter and how it's not supported by all browsers
- [stackoverflow](https://stackoverflow.com/questions/36679649/how-to-add-a-color-overlay-to-a-background-image) - how to add a color overlay to a background image using box-shadow
- [cssTricks](https://css-tricks.com/how-to-stack-elements-in-css/) - how to stack different children elements
- [theprogrammingexpert](https://theprogrammingexpert.com/jquery-move-element-after-another/) - use jguery to move elements after another
- [coderWall](https://coderwall.com/p/_jothq/jquery-when-to-use-document-ready-and-when-window-load) - $(document).ready vs $(window).load
- [stackoverflow](https://stackoverflow.com/questions/43229447/how-to-move-div-inside-another-in-on-responsive) - how to move elements depending on screen size
- [nekocalc](https://nekocalc.com/px-to-rem-converter)- convert px to rem

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
