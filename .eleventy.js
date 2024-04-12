

module.exports = function(eleventyconfig){
    const {DateTime} = require("luxon")
    eleventyconfig.addPassthroughCopy('./src/style.css');
    eleventyconfig.addPassthroughCopy('./src/main.js');
    eleventyconfig.addPassthroughCopy('./src/assets');
    eleventyconfig.addPassthroughCopy('./src/admin');
    eleventyconfig.addFilter("postDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    });
    
    return {
        dir: {
            input:"src",
            output:"public"
        }
    };
}