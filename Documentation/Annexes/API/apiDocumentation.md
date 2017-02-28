# API Documentation
Ces méthodes ne sont pas venues de nulle part, une reflexion a eu lieu en posant des maquettes approximatives et simples par rapport à ce [document](./MaquettesBetaAPI.pptx)

## Nommage

Basé Swagger //TODO: --> à définir

### En gros ce qui va/vient de l'utilisateur première lettre maj et CamelCase le traitement interne et variables interne minuscules et camelCase

Règles de nommage:
- api endpoint (controllers)
  - plural
  - camelCase
  - language : english
    - get properties
        - results properties
            - snake_case
            - Les objets en PascalCase
    - post properties
        - snake_case
        - - Les objets en PascalCase
    
    - comments
        - language French or English
- Repositories
    - camelCase
- Models
    - camelCase
- Mappers
    - snake_case
- DB
    - camelCase

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
            Location: {
                lat: 345, 
                long: 464
            },
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
            Location: {
                lat: "",
                long: ""
            },
            Finished: [Finished]
        }
    }
    ```
    * Spécificités : 
        - Finished --> retournera un boolean selon si nb_Ends de la Table shoot est égal au nb_Ends compté par l'api
        - DateHumanize --> retourne un string d'une date lisible p. ex. "about a day ago"

* GET /api/shoots/[idShoot]
    * L'idUser sera récupérer par la session, l'idShoot sera passé en fonction du Shoot sélectionné
    * Objet example :
    ```json
    {
        Title: "",
        Description: "",
        Type:"",
        Date: "about 1 year ago",
        Location:{
            lat: "",
            long:""
        }
        AverageArrow: 9.2,
        GoldHit: 0.55,
        Total: 540,
        Ends: {
            1:{
                Arrows : {
                    arrow1 : { Point : 10},
                    arrow2 : { Point : 10},
                    arrow3 : { Point : 9}
                }
            },
            2: {...}
        }
    }
    ```
    * Spécificités :
        - Average Arrow : Calculéé par l'API (Total / nb_Ends*nb_ArrowsByEnd)
        - GoldHit : Pourcentage de flèches dans le jaune (10 et 9)
        - Total : Points totaux
        - Ends.1.arrow1 : les données sont triées par l'API --> Arrow1 est toujours plus grand que le reste
* POST /api/shoots
    * Le POST va récupérer idUser dans session, il va créer un nouveau Shoot
    * Objet example :
    ```json
    {
        Title : “”,
        Description: “”,
        nb_Ends : Set by default by Type or set by User if training,
        nb_ArrowsByEnd : Set by default by Type or set by User if training,
        Type : “”,
        User : $id_User
        Location: {
            latitude : "",
            longitude : ""
        }
    }
    ```
    * Spécificités : 
        - FK_Type sera une string que l'API va prendre en charge pour set le nb_end et nb_arrowbyend automatiquement
        - nb_Ends et nb_ArrowsByEnd ne seront pas présent si ce n'est pas un entrainement (training)
        - Description peut être null
        - Location sous forme de 2 strings représentant les coordonnées

* GET /shoots/[idShoot]/finished
    * set finished à true
    * Un bouton "Give UP !" enverra ce GET

## Ends

* POST /api/end
    * Le POST va être envoyé après chaque add de volée 
    * Objet Example : 
    ```json
    {
		FK_Shoot : [id_Shoot],
		Arrows : {
			arrow1 : { Point : 10},
			arrow2 : { Point : 10},
			arrow3 : { Point : 9}
		}
	}
    ```
    * Le POST devrait renvoyer le nbre de volées qui restent ?
        
