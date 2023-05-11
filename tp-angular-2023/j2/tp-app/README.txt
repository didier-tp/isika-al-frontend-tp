npm install -s bootstrap        (ex: 5.2.3)
npm install -s bootstrap-icons  (ex: 1.10.5)
ng add @angular/material        (ex: 15.2.9 , all defaults choices)
-------------
dans angular.json:

 "styles": [
              "@angular/material/prebuilt-themes/indigo-pink.css",
              "src/styles.scss",
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/bootstrap-icons/font/bootstrap-icons.css"
            ],

            