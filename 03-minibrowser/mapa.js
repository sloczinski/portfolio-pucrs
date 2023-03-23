//TDD - Test driven development
var novomMapa = new Map();

class HistoryMap {}
novomMapa.set("11/11/2011 - 23:30 - URL", {
  title: "Título do site",
  URL: "url sozinha",
});

novomMapa.set("11/11/2011 - 23:31 - URL", {});

var resultado = novomMapa.get("11/11/2011 - 23:30 - URL");
console.log(resultado);
