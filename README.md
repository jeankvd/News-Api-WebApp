# API Magazine
## Link
[API Magazine](http://jeanvillalobos.me/portfolio/magazine/index.html)
## Description
As a huge reddit fan, I find that what I like the most about reddit is the conjuction of multiple news sources. Because of this I created this webapp. It uses the newsapi.org API to gather news article from around the web. After the AJAX request is completed it parses the results into BootStrap Cards.  
## Technologies
- AJAX
- Rest APIs
- BootStrap
- JavaScript
- Jquery
## Issues

1. The Sidebar stylings when applied from app.js caused inconsistencies across browsers. Styles were delegated to style.css and app.js is only on charge of displaying or hiding .section text.
2. setting the numbers of columns to 4 on style.css does not create 4 columns. It leaves a gap on the right. This made large viewport optimization harder than it needed to be. I settled for 3 columns with some right margin on large viewports. SASS mixins could probably solve the issue according to BootStrap documentation, so I will have to learn more and revisit this project.

## Next Steps
I had a lot of fun with this project and I really enjoyed writing the JavaScript for this app. I am currently learning SASS and React.JS so in the future I can revisit this project and do it all over again with using only React.JS for the UI.