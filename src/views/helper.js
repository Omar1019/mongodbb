Handlebars.registerHelper('ifCond', function(euro, dolar, options) {
   if(euro === dolar) {
     return options.fn(this);
   }
   return options.inverse(this);
 });