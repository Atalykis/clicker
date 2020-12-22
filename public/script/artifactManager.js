class ArtifactManager{  
    constructor(){
        this.unownedArtifactList = {  // objet qui référence les artefacts non possédé par un joueur
           GoldenRollinPin :  {name : "The Golden rollin pin" ,level : 0, multiplicator : 0.1, src : "ressources/artifact/golden-rollin-pin.png" },
           GrandMasReciep :   {name : "My Grandma's reciep"   ,level : 0, multiplicator : 0.1, src : "ressources/artifact/artifact.png" },
           Yeye :             {name : "Yeye"                  ,level : 0, multiplicator : 0.1, src : "ressources/artifact/artifact.png" },
           Ayaya :            {name : "Ayaya"                 ,level : 0, multiplicator : 0.1, src : "ressources/artifact/artifact.png" },
        }
        this.ownedArtifact ={ // objet qui référence les artefacts possédé par un joueur

        }
    }

    levelUpArtifact(artifact){
        artifact.level ++;
    }

    getArtifactPrice(){
        return 1
    }

    moveArtifactToOwnedList(artifactKey){ // Prend une clef en paramètre et déplace l'objet associé à cette clef de ownedArtifact à unownedArtifact
        this.ownedArtifact[artifactKey] = this.unownedArtifactList[artifactKey];
        delete this.unownedArtifactList[artifactKey];
    }


    getNewRandomArtifact(){  // retourne une clef aléatoire parmi les clefs du tableau unownedArtifact
      const randomKey = Object.keys(this.unownedArtifactList)[Math.floor(Math.random()*Object.keys(this.unownedArtifactList).length)];
      return randomKey
    }
    


}