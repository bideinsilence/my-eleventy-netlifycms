// eleventy configuration

module.exports = function(eleventyConfig) {

  // Copy images to /_site/images
  eleventyConfig.addPassthroughCopy("images");

  // NetlifyCMS
  // Copy NetlifyCMS admin to /_site/admin
  eleventyConfig.addPassthroughCopy('admin');
  
  // For date modification
  const {
    DateTime
  } = require("luxon");

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('yy-MM-dd');
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("dd-MM-yy");
  });
}  
