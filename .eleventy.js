const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Copy `common.css` and any other static assets to the output folder
  eleventyConfig.addPassthroughCopy("common.css");
  eleventyConfig.addPassthroughCopy("images"); 
  eleventyConfig.addPassthroughCopy("Generators"); 
  eleventyConfig.addPassthroughCopy("File-Converter"); 
  eleventyConfig.addPassthroughCopy("wcc.html");
  eleventyConfig.addPassthroughCopy("CheckMe");
  eleventyConfig.addPassthroughCopy("Formatters"); 
  eleventyConfig.addPassthroughCopy("Json-Converter"); 
  eleventyConfig.addPassthroughCopy("URL-Formatter"); 


  // Watch files for changes during development
  eleventyConfig.addWatchTarget("./common.css");

  // Add a filter to format dates
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // Return your configuration
  return {
    dir: {
      input: ".",       // Source folder
      includes: "_includes", // Includes folder (for templates/partials)
      data: "_data",    // Data folder
      output: "_site"   // Output folder
    },
    templateFormats: ["html", "njk", "md"], // Templates you want to use
    htmlTemplateEngine: "njk",             // Nunjucks engine for HTML files
    markdownTemplateEngine: "njk",         // Nunjucks engine for Markdown
    passthroughFileCopy: true
  };
};
