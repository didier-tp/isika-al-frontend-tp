1) copier/coller de tp-angular/j1/my-app  vers votre projet my-app
les parties:
    src/app/common/data/devise.ts
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
Ordre d'amélioration conseillé:
   a) ajouter (click)="onSelectDevise(d)" sur <tr *ngFor ... >
   b) coder la méthode onSelectDevise() avec this.selectedDevise=d et this.deviseTemp un clonage
   c) ajouter tous les [(ngModel)]="deviseTemp.xyz" manquants dans le coté html
   d) ajouter (click)="onUpdate()" sur bouton update
   e) coder méthode onUpdate() via des instructions de type this.selectedDevise.xyz = this.deviseTemp.xyz;
   f) tester tout cela 
   g) coder le reste (new --> remet this.deviseTemp à vide (nouvelle instance de Devise)
                     (add --> ajoute this.deviseTemp (ou un clone) dans  this.tabDevises )
                     (delete --> supprime this.selectedDevise du tableau this.tabDevises )
   h) peaufiner message , mise en évidence de l'élément sélectionné et boutons activables ou pas
      selon le contexte (ex: [style.visibility]="(mode=='newOne')?'visible':'hidden'" sur certains boutons
      du coté .html avec this.mode = "newOne"  ou bien  "existingOne" du coté .ts


---------------
NB: dans j2 et j3 : solution de ce Tps
    dans j4 : version encore améliorée avec communication serveur (http.post/put/delete et .subscribes)
              Serveur possible qui va avec la v4 : tp-js/myNodeServerPromiseDao ou backend-tp-api .



