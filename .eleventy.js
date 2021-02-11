// eleventy configuration

module.exports = function(eleventyConfig) {

    // Copy images to /_site/images
    eleventyConfig.addPassthroughCopy("images");
 
    // NetlifyCMS
    // Copy NetlifyCMS admin to /_site/admin
    eleventyConfig.addPassthroughCopy('admin');


}  
