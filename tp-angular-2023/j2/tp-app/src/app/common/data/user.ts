export class User {
    constructor(
       public  id : string | null =null,
       public  username : string ="",
       public  firstName : string | null =null,
       public  lastName : string | null =null,
       public  email : string | null =null,
       public  newPassword : string | null =null,
       public  mainGroup : string | null =null
      ){}
}

/*
User au sens UserAccount
avec id généré par un serveur (ex: 88186ede-3ba0-4699-99cf-b9b0af7a442d)
le username = jamais null et unique (au sein d'un realm donné)
le mot de passe (confidentiel) ne sera jamais retourné en mode get
si newPassword n'est pas renseigné , on ne souhaite pas modifier le mot de passe
si newPassword différent de null , alors affectation (en mode POST) ou changement (en mode PUT) du mot de passe
Les champs email , firstName et lastName ne sont pas indispensables
Exemples de valeurs pour mainGroup : "admin_of_sandoxrealm" , "manager_of_sandboxrealm" , "user_of_sandboxrealm"
*/
