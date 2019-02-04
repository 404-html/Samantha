const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0]){
    if(args[0] === "DP"){
      return message.channel.send("La Draw Phase est la première des 6 phases d'un tour.\nLes règles suivants s'appliquent sauf si un effet de carte dit le contraire. Les effets de cartes sont absolus et permettent d'outrepasser les règles du jeu.\nSi c'est le premier tour du duel, le joueur ne pioche pas de carte. A tout les tours suivants, lors de la DP le joueur du tour pioche une carte.");
    }
    if(args[0] === "SP"){
      return message.channel.send("La Standby Phase est la seconde des 6 phases d'un tour. Elle n'est jouée que lorsqu'un effet de carte la mentionne et on y fait que ce qui est mentionné par la/les cartes en question, sinon on passe directement de DP àMP1");
    }
    if(args[0] === "MP"){
      return message.channel.send("La Main Phase 1 et la Main Phase 2 sont les troisièmes et cinquièmes phases d'un tour.\nLes règles suivants s'appliquent sauf si un effet de carte dit le contraire. Les effets de cartes sont absolus et permettent d'outrepasser les règles du jeu.\nLors de laMP1 le joueur peut invoquer normalement un monstre avec un nombre de sacrifices requis selon son niveau :\n0 à 4 : pas de sacrifice.\n5 et 6 : un sacrifice.\n7 à 12 : deux sacrifices.\nUn monstre peut être invoqué normalement soit en position d'attaque face recto, soit en position de défense face verso. Ni en position d'attaque face verso ni en position de défense face recto.\n\nC'est également lors de cette phase que le joueur du tour peut poser des cartes pièges ou activer des cartes magies\n\nS'il ne l'a pas fait lors de laMP1, lors de laMP2 le joueur peut invoquer normalement un monstre.");
    }

    if(args[0] === "BP"){
      return message.channel.send("Les règles suivants s'appliquent sauf si un effet de carte dit le contraire. Les effets de cartes sont absolus et permettent d'outrepasser les règles du jeu.\nLors de la battle phase, les monstres en position d'attaque peuvent attaquer :\n   - Un monstre en position d'attaque de l'adversaire\n   - Un monstre en position de défense de l'adversaire\n   - S'il n'a aucun monstre sur son terrain, directement les points de vie de l'adversaire.\nSi un monstre en position d'attaque est attaqué : le monstre avec l'ATK la plus basse est détruit et son contrôleur prend des dégâts égaux à la différences entre les points d'attaques des monstres.\nSi l'attaque des deux monstres est égale, les deux monstres sont détruits et aucun joueur ne prend de dégâts.\nSi un monstre en position de défense est attaqué :\n   - si le monstre a une défense inférieure à l'attaque du monstre attaquant, il est détruit. Aucun joueur ne prend de dégâts.\n   - Si le monstre a une défense supérieur à l'attaque du monstre attaquant, le joueur attaquant perd des points de vie égaux à la différence entre les points de défense du monstre adverse et de l'attaque de son monstre. Aucun monstre n'est détruit.\n   - Si l'attaque et la défense du montre sont égales, aucun joueur ne prend de dégâts et aucun monstre n'est détruit.\n\nSi un monstre en position de défense face verso est attaqué, son effet flip s'active. Puis on applique la même règle que s'il était face visible.");
    }
    if(args[0] === "token"){
      return message.channel.send("Un token est n'importe quel objet qui permette de différencier un mode défense et un mode attaque. Il ne peut en aucun cas se trouver en dehors des zones monstres principales et est considéré comme un monstre normal.\nIl ne peuvent être mis sur le terrain que lorsqu'une carte ne les mentionne et peut être utilisé comme matériel pour une invocation sauf si le monstre à invoquer le précise.");
    }
    if(args[0] === "pendule"){
      return message.channel.send("Les monstres pendules peuvent être placés à droite et à gauche de la zone magie piège (ils ne sont plus alors considérés comme des monstres mais comme des magies continues). Ils possèdent une échelle pendule (de 0 à 13). Une fois par tour, lors de la main phase, le joueur peut invoquer autant de monstres depuis sa main ou son extra deck (sauf fusion, xyz, synchro et link) dont le niveau est compris entre les échelles pendules des deux monstres pendules dans sa zone magie piège. Lorsqu'un monstre pendule est envoyé depuis le terrain au cimetière (sauf s'il est retiré en tant que matériel XYZ) il est envoyé dans l'extra deck face visible au lieu du cimetière.");
    }
    if(args[0] === "xyz"){
      return message.channel.send("Une invocation XYZ utilise des matériels, qui sont placés sous la carte XYZ invoquée. Les matériels nécessaires sont listés sur la carte. Un monstre XYZ peut être invoqué spécialement depuis le cimetière ou les cartes bannies uniquement si elle a préalablement été invoquée par XYZ de manière correcte.");
    }
    if(args[0] === "synchro"){
      return message.channel.send("Une invocation Synchro utilise un ou des monstres 'Tuner' et un ou des monstres non 'Tuner'. La somme des niveaux des matériels utilsés doit être égale au niveau du monstre synchro invoqué. Un monstre synchro peut être invoqué spécialement depuis le cimetière ou les cartes bannies uniquement si il a préalablement été invoqué par synchro de manière correcte.");
    }
    if(args[0] === "spec"){
      return message.channel.send("Une invocation Spéciale peut être faite autant de fois par tour que possible. Il n'est cependant possible de faire une invocation spéciale que si c'est précisé sur une carte. Elles doivent être effectuées durant les MP1 et MP2 de votre tour sauf si un effet le précise.");
    }
    if(args[0] === "fusion"){
      return message.channel.send("Une invocation Fusion utilise des matériels une carte magie permettant de fusionner des monstres (sauf si le monstre le précise). Il faut utiliser les matériels listés par la carte monstre fusion. L'endroit où sont les matériels dépendent de la carte utilisée pour la fusion. Un monstre fusion peut être invoqué spécialement depuis le cimetière ou les cartes bannies si il a été invoqué par fusion correctement.");
    }
    message.channel.send("La règle demandée n'a pas été trouvée.")
    return;
  }else{
    message.channel.send("\nLa Draw Phase est la première des 6 phases d'un tour.\nLes règles suivants s'appliquent sauf si un effet de carte dit le contraire. Les effets de cartes sont absolus et permettent d'outrepasser les règles du jeu.\nSi c'est le premier tour du duel, le joueur ne pioche pas de carte. A tout les tours suivants, lors de la DP le joueur du tour pioche une carte.");
    message.channel.send("\nLa Standby Phase est la seconde des 6 phases d'un tour. Elle n'est jouée que lorsqu'un effet de carte la mentionne et on y fait que ce qui est mentionné par la/les cartes en question, sinon on passe directement de DP àMP1");
    message.channel.send("\nLa Main Phase 1 et la Main Phase 2 sont les troisièmes et cinquièmes phases d'un tour.\nLes règles suivants s'appliquent sauf si un effet de carte dit le contraire. Les effets de cartes sont absolus et permettent d'outrepasser les règles du jeu.\nLors de laMP1 le joueur peut invoquer normalement un monstre avec un nombre de sacrifices requis selon son niveau :\n0 à 4 : pas de sacrifice.\n5 et 6 : un sacrifice.\n7 à 12 : deux sacrifices.\nUn monstre peut être invoqué normalement soit en position d'attaque face recto, soit en position de défense face verso. Ni en position d'attaque face verso ni en position de défense face recto.\n\nC'est également lors de cette phase que le joueur du tour peut poser des cartes pièges ou activer des cartes magies\n\nS'il ne l'a pas fait lors de la MP1, lors de la MP2 le joueur peut invoquer normalement un monstre.");
    message.channel.send("\nLes règles suivants s'appliquent sauf si un effet de carte dit le contraire. Les effets de cartes sont absolus et permettent d'outrepasser les règles du jeu.\nLors de la battle phase, les monstres en position d'attaque peuvent attaquer :\n   - Un monstre en position d'attaque de l'adversaire\n   - Un monstre en position de défense de l'adversaire\n   - S'il n'a aucun monstre sur son terrain, directement les points de vie de l'adversaire.\nSi un monstre en position d'attaque est attaqué : le monstre avec l'ATK la plus basse est détruit et son contrôleur prend des dégâts égaux à la différences entre les points d'attaques des monstres.\nSi l'attaque des deux monstres est égale, les deux monstres sont détruits et aucun joueur ne prend de dégâts.\nSi un monstre en position de défense est attaqué :\n   - si le monstre a une défense inférieure à l'attaque du monstre attaquant, il est détruit. Aucun joueur ne prend de dégâts.\n   - Si le monstre a une défense supérieur à l'attaque du monstre attaquant, le joueur attaquant perd des points de vie égaux à la différence entre les points de défense du monstre adverse et de l'attaque de son monstre. Aucun monstre n'est détruit.\n   - Si l'attaque et la défense du montre sont égales, aucun joueur ne prend de dégâts et aucun monstre n'est détruit.\n\nSi un monstre en position de défense face verso est attaqué, son effet flip s'active. Puis on applique la même règle que s'il était face visible.");
    message.channel.send("\nUn token est n'importe quel objet qui permette de différencier un mode défense et un mode attaque. Il ne peut en aucun cas se trouver en dehors des zones monstres principales et est considéré comme un monstre normal.\nIl ne peuvent être mis sur le terrain que lorsqu'une carte ne les mentionne et peut être utilisé comme matériel pour une invocation sauf si le monstre à invoquer le précise.");
    message.channel.send("\nLes monstres pendules peuvent être placés à droite et à gauche de la zone magie piège (ils ne sont plus alors considérés comme des monstres mais comme des magies continues). Ils possèdent une échelle pendule (de 0 à 13). Une fois par tour, lors de la main phase, le joueur peut invoquer autant de monstres depuis sa main ou son extra deck (sauf fusion, xyz, synchro et link) dont le niveau est compris entre les échelles pendules des deux monstres pendules dans sa zone magie piège. Lorsqu'un monstre pendule est envoyé depuis le terrain au cimetière (sauf s'il est retiré en tant que matériel XYZ) il est envoyé dans l'extra deck face visible au lieu du cimetière.");
    message.channel.send("\nUne invocation XYZ utilise des matériels, qui sont placés sous la carte XYZ invoquée. Les matériels nécessaires sont listés sur la carte. Un monstre XYZ peut être invoqué spécialement depuis le cimetière ou les cartes bannies uniquement si elle a préalablement été invoquée par XYZ de manière correcte.");
    message.channel.send("\nUne invocation Synchro utilise un ou des monstres 'Tuner' et un ou des monstres non 'Tuner'. La somme des niveaux des matériels utilsés doit être égale au niveau du monstre synchro invoqué. Un monstre synchro peut être invoqué spécialement depuis le cimetière ou les cartes bannies uniquement si il a préalablement été invoqué par synchro de manière correcte.");
    message.channel.send("\nUne invocation Spéciale peut être faite autant de fois par tour que possible. Il n'est cependant possible de faire une invocation spéciale que si c'est précisé sur une carte. Elles doivent être effectuées durant les MP1 et MP2 de votre tour sauf si un effet le précise.");
    message.channel.send("\nUne invocation Fusion utilise des matériels une carte magie permettant de fusionner des monstres (sauf si le monstre le précise). Il faut utiliser les matériels listés par la carte monstre fusion. L'endroit où sont les matériels dépendent de la carte utilisée pour la fusion. Un monstre fusion peut être invoqué spécialement depuis le cimetière ou les cartes bannies si il a été invoqué par fusion correctement.");
    return;
  }
}

module.exports.help = {
  name: "yugiRules",
  type: "yugi",
  usage: "yugiRules <règle>",
  desc: "Samantha donne la règle voulue ou toutes si aucune n'est précisée."
}
