module.exports = {
  defaultBrowser: "Brave Browser",
  handlers: [
    {
      match: /^https?:\/\/(www\.)?figma\.com/,
      browser: "Figma"
    },
    {
      match: /^https?:\/\/linear\.app/,
      browser: "Linear"
    }
  ]
}
