var contentEl = document.querySelector('.listings');

function registerByQuery(querySelector) {
  var templateString = document.querySelector(querySelector).innerHTML;
  templateString = templateString.replace('&gt;', '>');

  return Handlebars.compile(templateString);
}

function registerPartialByQuery(name) {
  var templateString = document.querySelector('#' + name + '-partial').innerHTML;
  templateString = templateString.replace('&gt;', '>');

  return Handlebars.registerPartial(name, templateString);
}

registerPartialByQuery('article');

Handlebars.registerHelper('my-date', function(dateString) {

});

var handlebarsTemplate = registerByQuery('#main-template');

loadEtsy('whiskey', function(data) {
  var allArticles = '';

  allArticles += handlebarsTemplate(data);

  contentEl.innerHTML = allArticles;
});
