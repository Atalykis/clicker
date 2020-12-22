class Game {
  constructor() {
    this.cookie = 0;
    this.goldenCookie = 0;
    this.cookieGeneratorManager = new CookieGeneratorManager();
    this.artifactManager = new ArtifactManager;
  }

  getCookieRounded() {                 // Renvoie le nombre de Cookie arrondi
    return Math.round(this.cookie);
  }

  calculateCookiePerSeconde() {         // Prend en compte tout les facteurs et return la production de cookie par seconde 
    let CPS = 0
      for (const [cookieGenerator, specifications] of Object.entries(this.cookieGeneratorManager.auto)){
        CPS += specifications.number * specifications.bakingSpeed
      }
      return CPS
  }

  playerClick() {                                     // Event : Le joueur click sur le cookie et ajoute la valeur  cookieGeneratorManager.click a cookie
    this.cookie += this.cookieGeneratorManager.click;
  }

  initGame() {                // Demmare tout les set interval (CPS uniquement pour le moment)
    setInterval(() => {
      this.addAutoCookie();
    }, 10);
  }

  addAutoCookie() {                   // Ajoute une valeur au cookie en fonction du CPS et des frames
    const value = this.calculateCookiePerSeconde() / 100;
    this.cookie += value;
  }

  buyCookieGenerator(cookieGenerator) {         // Prend en parametre un objet ex : {number : 0, bakingSpeed : 0.7, basePrice : 10, src:""}
    if (this.cookie >= this.cookieGeneratorManager.getGeneratorPrice(cookieGenerator)) {
      this.cookie -= this.cookieGeneratorManager.getGeneratorPrice(cookieGenerator);
      this.cookieGeneratorManager.addCookieGenerator(1, cookieGenerator);
    }
  }

  ascend(){                       // Genere les golden Cookies et appel reset dans CookieManager
    this.cookie = 0;
    this.goldenCookie += Math.round(this.calculateCookiePerSeconde()/2000);
    this.cookieGeneratorManager.reset();
  }

  buyNewArtifact(artifactKey){           // procédure pour l'achat d'un nouvel artifact
    if (this.goldenCookie >= this.artifactManager.getArtifactPrice()){
      this.goldenCookie -= this.artifactManager.getArtifactPrice();
      this.artifactManager.moveArtifactToOwnedList(artifactKey);
      this.artifactManager.levelUpArtifact(this.artifactManager.ownedArtifact[artifactKey]);
    }
    else{
      console.log('Not enough golden cookie')
    }
  }

  levelUpOwnedArtifact(artifact){
    if (this.goldenCookie >= this.artifactManager.getArtifactPrice()){
      this.goldenCookie -= this.artifactManager.getArtifactPrice();
      this.artifactManager.levelUpArtifact(artifact)
    }
    else{
    console.log('Not enough golden cookie')
    }
  }
}
