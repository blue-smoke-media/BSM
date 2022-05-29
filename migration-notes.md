READ ALL CODE IN WEBSITE FOR COMPLETE MIGRATION

remove .html from url a2hosting Apache

internal server server set server admin email

- ALL PAGES
  Global Stylesheet (excluding privacy and index)(check css for uniform text color and background (text going into italics w/o it 'help.html'))
  Fix all links and hrefs with new file structure
  remove all extra comments and unneeded code
  Check all images loading properly
  Check Styling
  spell check

  - <head>
    Check canonical Links (some misspelled)
    check for duplicate meta tags
    Check title tags " |BSM"
    re-organize to convention

navigation - styling home vs other pages
(privacy page overwrites the font)

- HELP page - import Carousel at top of body(new carousel)

- 404 page - COBE

- Footer? populate like nav on all pages (append to body?)

- articles page and articles.js -> fix all content, html, and css -- COBE

from 404 page if go back a page from articles -> go back 2 pages (to not just redirect right back to 404 page)

- turn privacy section 2 into a list?

index page Pricing

- finish pricing plans included
- enterprise and business swapped?
- professional -> personal
- $99-$100
- add text shadow on hover of getStarted

index - Services
"The map pack"?
center aligned text?

CHECK ALL RESPONSIVE PAGES (index top is broken)

navigation css getting overridden on some pages (contact page causing italics, home it shrinks -- because its in each body tag)
(font size maybe?)

---

COBE:
php redirect or success page (CoBe)

- Index Page - action="/src/php/contactForm.php"
- reduce number of email accounts we are using on cpanel...
  change bootstrap.js -> bootstrap.min.js
  remove 'our features'

- after index update from CoBe, rid of src folder as code is mostly already 'minimized'

- href="bluesmokemedia/seo"...kinda
  tel:+ -> tel:

- Team desc - all 1-3'st persons
  Shorter CoBe "She, She, She"
  Check all descriptions

- shorter title tags
  Blue Smoke Media | page

hero images -> squishy when smashed :P (print and graphic design services page example)

add more cities to footer for SLC (Provo, Cache Valley, Midvale,Park City, )

comment out all js files in index (not needed? just nav)

## generate sitemap.xml - html/sitemap.xml

Go through all images used/not used

CONVENTIONS
Folders: Title Case, hyphens
src -> primary folders -> lowercase

Files: Lowercase, use hyphens
Images: ???

file path: /src/folder/file
use ../../ (relative file path) when in .scss or using import() in js

JQUERY
google CDN -> local backup (change link to "/src/js/jquery-1.11.3.min.js")

<Head>
Title
Link
  javascript
  stylesheet
Meta
</Head>

article links

Do I need '/src/html/page.html' on links for on apache server stripping out /src/html and .html

check any internal links for dead links (team page on website-logo-design)

![](https://i.stack.imgur.com/oKRnc.png)
https://stackoverflow.com/questions/5730092/how-to-remove-html-from-url

minimization code: https://stackoverflow.com/questions/1737388/how-to-minify-javascript-code
