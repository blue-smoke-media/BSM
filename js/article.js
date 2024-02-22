// id, title, author, date, imageUrl, imageAlt, category, tags, snippet, content

const articleList = await import("../data/articles.js").then(res => res.default);
const id = new URLSearchParams(window.location.search).get("id");
const article = articleList.find(e => e.id == id)

if (!article) window.location = "404.html"

document.title = article.title + "| Blue Smoke Media"
const entryPoint = document.querySelector(".article");
const title = document.createElement("h1");
const author = document.createElement("span");
author.classList.add("author");
const content = document.createElement("pre");

title.textContent = article.title;
author.textContent = article.author;
content.innerHTML = article.content;

entryPoint.append(title, author, content)
