// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/wiljago/Projects/savannah/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/wiljago/Projects/savannah/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/wiljago/Projects/savannah/src/pages/index.js")),
  "component---src-pages-thankyou-js": preferDefault(require("/home/wiljago/Projects/savannah/src/pages/thankyou.js"))
}

