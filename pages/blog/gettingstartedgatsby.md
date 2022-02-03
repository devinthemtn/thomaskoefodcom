# Getting Started with Gatsby

### [github site for Gatsby](https://github.com/gatsbyjs/gatsby)

---

## Files as Pages

adding pages is as simple as adding a file to the directory ‘pages’, adding a directories also works fine.

- markdown
  - simple quick way to write a page of mostly text.
  - [information on markdown from github](https://guides.github.com/features/mastering-markdown/)
  - [quick reference sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- react component
  - great way to add more complex pages or pages with logic in them.
  - [official documentation on react](https://facebook.github.io/react/docs/hello-world.html)
  - [quick reference sheet](https://preact.gitbooks.io/react-book/content/jsx/quick-ref.html)

---

## starting a Gatsby site

1. Install: `npm install -g gatsby`
2. generate project: `gatsby new [SITE_DIRECTORY] [URL_OF_STARTER]`
   - if URL_OF_STARTER is left blank default is used.
   - default starter: `https://github.com/gatsbyjs/gatsby-starter-default`
   - minimal starter: `https://github.com/brianstone/gatsby-starter-clean`
3. startup the development server: `gatsby develop`
4. do all your edits etc.
5. when ready to serve your site.
6. `gatsby build`
7. all the static files for the site should not be in the `public` sub-folder.

## editing a Gatsby site
