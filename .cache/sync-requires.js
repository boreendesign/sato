// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/smorrissey/React/gatsby/sato-reviews/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/smorrissey/React/gatsby/sato-reviews/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/smorrissey/React/gatsby/sato-reviews/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/smorrissey/React/gatsby/sato-reviews/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/smorrissey/React/gatsby/sato-reviews/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/smorrissey/React/gatsby/sato-reviews/.cache/json/layout-index.json"),
  "404.json": require("/Users/smorrissey/React/gatsby/sato-reviews/.cache/json/404.json"),
  "layout-index.json": require("/Users/smorrissey/React/gatsby/sato-reviews/.cache/json/layout-index.json"),
  "index.json": require("/Users/smorrissey/React/gatsby/sato-reviews/.cache/json/index.json"),
  "layout-index.json": require("/Users/smorrissey/React/gatsby/sato-reviews/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/smorrissey/React/gatsby/sato-reviews/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": preferDefault(require("/Users/smorrissey/React/gatsby/sato-reviews/.cache/layouts/index.js"))
}