# Shoot4Stats
Project for the end of my apprenticeship - WebApp stats for Archery

## Pour débuter
* Installer Node JS v7.4.0
* Aller dans Sources --> TPI_Frontend
    * npm i
    * npm run build
* Aller dans Sources --> Site
    * npm i
    * node app.js
* Puis enfin dans Sources --> Site --> config
  * renommer le fichier _config-samples.json_ en _configs.json_
  * Enlever le commentaire dans ce fichier et mettez vos informations personelles

## Directory explanation :

* Documentation
    * Annexes
        * Dans ce dossier se trouve les docs et les avancements fait avant le TPI 
    * Rendu
        * Le dossier rendu pour le dossier final du TPI
* Sources
    * Cli
        * Les tests sur l'API sont présents dans ce dossier
    * Site
        * api
            * dal --> Data Access Layer (Dans ce dossier se trouve les modèles et les méthodes de la DB)
            * middlewares 
            * controllers
            * config --> config nécessaire pour l'API (connexion DB, ...)
        * static
            * Le dossier désigné pour le build de Vue.js
    * TPI_FrontEnd
        * Ici se trouve le "joli" code FrontEnd Vue qui, lors d'un "npm run build", va être transformé et mis dans Site/static


