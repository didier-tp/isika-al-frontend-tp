1) copier/coller de tp-angular/j1/my-app  vers votre projet my-app
les parties:
    src/app/data/devise.ts
    src/app/devise (tout ce répertoire avec devise.component.ts , .html , .scss)

2) ajouter DeviseComponent dans partie declarations: [] de src/app/app.module.ts
   et import qui va avec

3) ajouter la route { path: 'ngr-devise', component: DeviseComponent }
   dans src/app/app-routing-module.ts  et import qui va avec

4) ajouter  <a routerLink='/ngr-devise'> devise (crud)</a> &nbsp;
   dans src/app/header/header.commponent.html
--------------------------------
ng serve et http://localhost:4200
----------------
puis tranquillement compléter les fichiers
src/app/devise/devise.component.ts
src/app/devise/devise.component.html
---------------
NB: dans j2 et j3 : solution de ce Tps
    dans j4 : version encore améliorée avec communication serveur (http.post/put/delete et .subscribes)



