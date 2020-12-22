class CookieGeneratorManager {
  constructor() {
    this.click = 1;
    this.auto = {
      grandMa: {number : 0, bakingSpeed : 0.7, basePrice : 1,   src:"ressources/generator/grand-ma.png"},
      mine:    {number : 0, bakingSpeed : 10,  basePrice : 50,  src:"ressources/generator/mine.png"},
      vagin: {number : 0, bakingSpeed : 50, basePrice : 200, src:"ressources/generator/factory.png"},
      bite: {number : 0, bakingSpeed : 150, basePrice : 500, src:"ressources/generator/factory.png"},
      sexe: {number : 0, bakingSpeed : 500, basePrice : 1500, src:"ressources/generator/factory.png"},
      anal: {number : 0, bakingSpeed : 1500, basePrice : 3500, src:"ressources/generator/factory.png"},
      clito: {number : 0, bakingSpeed : 3000, basePrice : 10000, src:"ressources/generator/factory.png"}
    };
  }

  getGeneratorPrice(cookieGenerator) { // Genere le prix d'un générateur donné en paramètre en fonction de données stockées dans le générateur 
    return Math.round(cookieGenerator.basePrice * Math.pow(11 / 10, cookieGenerator.number));
  }

  addCookieGenerator(x, cookieGenerator){ // incrémente le nombre de cookieGenerator entré en paramètre
    cookieGenerator.number += x;
  }

  // Click
  getClickPrice() {// Genere le prix d'un click en fonction de sa propre valeur
    return Math.round(7 * Math.pow(15 / 14, this.click));
  }

  buyClick(x) {
    this.click += x;
  }

  reset(){ // Reinitialise : les valeurs nombre des objet de auto , les clicks
    for (const [cookieGenerator, specifications] of Object.entries(this.auto)){
     specifications.number = 0;
    }
    this.click=1;
  }
}
