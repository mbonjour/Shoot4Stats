# API Documentation
Ces méthodes ne sont pas venues de nulle part, une reflexion a eu lieu en posant des maquettes approximatives et simples par rapport à ce [document](./MaquettesBetaAPI.pptx)

## Shoots

* GET /api/shoots/
    * Récupère l'idUser de la session pour lancer la requête nécessaire
    * Objet retourné (example): 
    ```json
    { 
        1: {
            Title : “”,
            Description: “”,
            Type: “”,
            Date: 01.01.1999,
            Finished: False
        }
    }
    ```
    * Objet :
    ```json
    {
        [idShoot]: {
            Title : [Title],
            Description: [Description],
            Type: [Type],
            Date:[Date | DateHumanized],
            Finished: [Finished]
        }
    }
    ```
    Spécificités : 
     - Finished --> retournera un boolean selon si nb_Ends de la Table shoot est égal au nb_Ends compté par l'api
     - DateHumanize --> retourne un string d'une date lisible p. ex. "about a day ago"
* GET /api/shoots/[idShoot]
    * L'idUser sera récupérer par la session, l'idShoot sera passé en fonction du Shoot sélectionné
    * Objet example :
* POST /api/shoots
    * Le POST va 
    * Objet example :
    ```json
    {
        Title : “”,
        Description: “”,
        nb_Ends : Set by default by Type or set by User if training,
        nb_ArrowsByEnd : Set by default by Type or set by User if training,
        FK_Type : “”,
        FK_User : $id_User
        Location: {"",""}
    }
    ```
    * Spécificités : 
        - FK_Type sera une string que l'API va prendre en charge pour set le nb_end et nb_arrowbyend automatiquement
        - nb_Ends et nb_ArrowsByEnd ne seront pas présent si ce n'est pas un entrainement
        - Description peut être null
        - Location sous forme de 2 strings représentant les coordonnées

