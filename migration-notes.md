git add .
git commit -m "message here with what worked on"
git push

READ ALL CODE IN WEBSITE FOR COMPLETE MIGRATION (WITH RESPONSIVE DESIGN CHECKED)

Build out CTA form's for index page (other CTA) -- GAVE TO COBE TO PUT IN INDEX PAGE
remove /html/ and .html from file path in Apache (/html/ -> drop html files into root directory)(learn regex?)
php redirect or success page (CoBe) ALL FORMS
update scss mixins color-pallet from CoBe -> go and resave all scss files to update new vars in mixins.scss
audit-cta font -> cabin

php - all forms (CTA-other) (4 total)
-footer form
style drop-nav (index vs not)
plans page
add a spam field on all forms

database to create email list

quick-inquiry tab doesn't hit submit button (jumps to next form)

-COBE-
404 page - from 404 page if go back a page from articles -> go back 2 pages (to not just redirect right back to 404 page)

print-and-graphic-design hero image replace (fingers crossed, mobile)

-INDEX-
PRICING
css consistent
finish pricing plans included
enterprise and business swapped?
professional -> personal
action="/src/php/contactForm.php"

overlapping text (somewhere) (custom website design)
breakpoints
change font-family -> add poppins

team descriptions (all same size...)
comment out all js files in index (not needed? just nav)

index-nav sticky after navigation is not on the screen/add sticky index-nav w/ Navigation off view
plans card order
plans - same css
plans - get started button -> contact page
inquiry form - email id -> email

our services - read more? (long long card)

modify contact page form for plans/pricing inquiry

Footer - append to body like nav (componentize footer)
articles page and articles.js -> fix all content, html, and css

generate sitemap.xml - html/sitemap.xml

check all links - (article links as well)(team page on website-logo-design)

---

COBE'S NOTES FROM INDEX PAGE

BreadCrumbs need to connect to the correct navigated page
Starting at “What is a custom website design” - media-queries
Dito for “What is the importance of a custom website design
FREE Website Audit simply isn’t working at all
“How Can A Custom Website Design Help My Business?” media-queries
“Increase Your BRAND AWARENESS with a Custom Website Design” - Just check it out. I’m not sure about the media-queries.
Personal Social Media Links - I want mine and I’m sure Daniel will also. I know you don’t want any listed, so I removed them.
I still like your idea of putting blurbs about each of us - like cta slide outs, only they are blurbs. I think this is important!
I have not been able to fix the footer contact form. The media-queries work fine.
Put Terms &amp; Conditions | Privacy Policy | Disclaimer in the footer NOT under the home tab!

The 2nd row of Price Cards, when reduced to mobile, they either need a margin top or a padding top.

---

- ALL PAGES
  check all links and filepaths
  remove all extra comments and unneeded code
  Check all images loading properly
  Check Styling
  spell check

  - <head>
    Check canonical Links (some misspelled)
    check for duplicate meta tags
    Check title tags " |BSM"
    re-organize to convention

---

CONVENTIONS
Folders: Title Case, hyphens
src -> primary folders -> lowercase

Files: Lowercase, use hyphens
Images: ???

file path: /src/folder/file
use ../../ (relative file path) when in .scss or using import() in js

<Head>
Title
Link
  javascript
  stylesheet
Meta
</Head>

![](https://i.stack.imgur.com/oKRnc.png)
https://stackoverflow.com/questions/5730092/how-to-remove-html-from-url

minimization code: https://stackoverflow.com/questions/1737388/how-to-minify-javascript-code

&copy;2020 All Rights Reserved
css reset/normalize?

New Notes 12/12/22
