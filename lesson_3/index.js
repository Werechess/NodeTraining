const request = require('request');
const cheerio = require('cheerio');

request('http://ria.ru/lenta/', function(error, response, html){
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var news = [];
        $('span').filter('.b-list__item-title').each(function (i, elem) {
            news[i] = $(elem).text();
        });
        console.log(news);
    }
    else {
        console.log(error);
    }
});
