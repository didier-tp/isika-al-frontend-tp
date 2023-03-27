npx cypress run --spec "cypress/e2e/myTest.spec.cy.js" --browser chrome > test_report.txt 
REM option headless par défaut pour ne pas montrer le navigateur sous controle
REM si pas option --browser chrome alors navigateur electron par defaut
REM ajouter dans  e2e:{ ...} (à la fin) , "video" : false dans cypress.config.js pour désactiver l'enregistrement video
