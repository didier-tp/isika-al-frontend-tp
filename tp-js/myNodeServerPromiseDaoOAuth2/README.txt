le référentiel git https://github.com/didier-mycontrib/tp-api
comporte une version du backend myNodeServerPromiseDao
avec les variantes suivantes:
 - produit(id,nom,prix) orthographié product(id,name,price)
 - authentification mixte/hybride basée sur:
     * un serveur oauth2/oidc/keycloak si celui ci est accessible/disponible
     * une gestion locale des jetons JWT (avec utilisateurs en base mongo) en tant que planB 