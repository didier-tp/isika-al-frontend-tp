describe("tous les tests", () =>{

    describe("tests sur les personnes" , () =>{
        var p ; //Personne à tester

        beforeEach(function () {
            console.log("beforeEach() appelé sur sous partie tests sur les personnes")
            p = new Personne("alain" , "Therieur",25);
           });

        it("27ans apres 2 incrementerAge",function(){
            p.incrementerAge(); p.incrementerAge();
            expect(p.age).toBe(27);
        })
    
        it("le nom de p est Therieur" , function(){
           expect(p.nom).toBe("Therieur");
        });
    
        it("le nomComplet de p est alain Therieur" , function(){
            expect(p.nomComplet()).toBe("alain Therieur");
         });

    })

    describe("tests sur les calculs" , () =>{

      it("2+3==5?", function () {
            expect(calculerOp('+',2,3)).toBe(5);
       });
       it("2*3==6?", function () {
           expect(calculerOp('*',2,3)).toBe(6);
       });
       it("8-5==3?", function () {
           expect(calculerOp('-',8,5)).toBe(3);
       });
       it("8/4==2?", function () {
            expect(calculerOp('/',8,4)).toBe(2);
       });

       
    });

    describe("tests sur les séries" , () =>{

        
	
    });
	
            
});
