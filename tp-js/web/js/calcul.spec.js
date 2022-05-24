describe("my calculator tests", function () {
    var p ; //Personne à tester
    
    beforeEach(function () {
     console.log("initialisation : new ... or ..." );
     p = new Personne("toto",25);
    });
	
    it("27ans apres 2 incrementerAge",function(){
        p.incrementerAge(); p.incrementerAge();
        expect(p.age).toBe(27);
    })

    it("le nom de p est toto" , function(){
       expect(p.nom).toBe("toto");
    });

    
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
