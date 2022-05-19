- className -> class

TODO EACH COMPONENT

- add css file

- Change file name from .jsx to .html
- remove React imports
- move image imports into href tags
- create document <html> !
- Move html into <body>
- move Helmet metadata into <head>
- <Link> -> <a>
- remove `{*/ */}`
- remove export function

- change title tags
  check all <head>
  READ ALL CODE IN WEBSITE FOR COMPLETE MIGRATION

OTHER CHANGES
Team Page

- remove student or grad of lambda (all?)
- remove list of languages (github? really?)
- 'marketing staff' repetitive (designers)
- last paragraph kinda doesn't make sense (first sentence)

- Reloading page a few times each render.
- Team desc - all 1-3'st persons
  Shorter CoBe "She, She, She"

- shorter title tags
  Blue Smoke Media | page

SOCIAL MEDIA

- li tags need no bullet

HEADER

- why img's on aws and not local
- how do header? On each page have header code? DRY

SCRIPT FOR HEADER/FOOTER ON EACH PAGE DRY

<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script>  
$(function(){ 
  $("#header").load("header.html");  
  $("#footer").load("footer.html");  
}); 
</script>
</head> 
<body> 
<div id="header"></div> 
<!--Remaining section--> 
<div id="footer"></div>

## or do this: Inside the div use iframe as <iframe src="footer.html"></iframe>

-
- Plans Page
  Write script for table to map out

Privacy Page
Scroll to Ref

<!-- const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const ref1 = useRef(null); -->

HELP page
import Carousel at top of body

DO WE NEED BOOTSTRAP?

Why do we need canonical links? We don't have duplicate pages...
https://yoast.com/rel-canonical/
\*also some links are wrong

404 page

WHAT ABOUT GLOBAL STYLES??

check for duplicate meta tags

remove extra div tag and add class wrapper to body tag

trim whitespace

fileName Capitalcase or CamelCase or ...

DRY CSS (letter coloring)

CHECK ALL LINKS

Check all todo's

remove all extra comments and unneeded code

All pages have same text color -- uniform
All pages have the same color background

website logo design hero img

uniform file names
help page styling

This is how to do php in Apache server
![](../../../../Downloads/Screen%20Shot%202022-05-17%20at%209.14.13%20AM.png)

check inline styles {} => ""

<!-- addon -> alias for redirecting domains --> -- A2hosting

Article Page (css and html article content)

remove .html from url a2hosting Apache

from 404 page if go back a page from articles -> go back 2 pages (to not just redirect right back to 404 page)

Can I alter title tag to append "| BSM"?
