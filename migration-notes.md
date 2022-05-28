READ ALL CODE IN WEBSITE FOR COMPLETE MIGRATION

- Index Page - action="/src/php/contactForm.php"

- Team desc - all 1-3'st persons
  Shorter CoBe "She, She, She"
  Check all descriptions

- shorter title tags
  Blue Smoke Media | page

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

- HELP page - import Carousel at top of body

- 404 page - COBE

- Footer? populate like nav on all pages (append to body?)

- articles page and articles.js -> fix all content, html, and css -- COBE

remove .html from url a2hosting Apache

from 404 page if go back a page from articles -> go back 2 pages (to not just redirect right back to 404 page)

- turn privacy section 2 into a list?

index page Pricing

- finish pricing plans included
- enterprise and business swapped?
- professional -> personal
- 99-100
- add text shadow on hover of getStarted

index - Services
"The map pack"?
center aligned text?

CHECK ALL RESPONSIVE PAGES (index top is broken)

remove 'our features' - index

add more cities to footer for SLC

generate sitemap.xml - html/sitemap.xml

get php to work for contact form

hero images -> squishy when smashed :P (print and graphic design services page example)

navigation css getting overridden on some pages (contact page causing italics, home it shrinks -- because its in each body tag)

Optimization/Dry: load and prepend jquery navigation to body

remove documentation folder

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
