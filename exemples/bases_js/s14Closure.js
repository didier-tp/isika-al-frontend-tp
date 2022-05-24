/*
Closure means that an inner function always has access 
to the vars and parameters of its outer function, 
even after the outer function has returned.
*/

function OuterFunction() {

    var outerVariable = 1;

    function InnerFunction() {
        console.log("outerVariable=" +outerVariable);
    }

    InnerFunction();
}

OuterFunction();

//------------- closure for hidding of implementation ----

function initCounterWithHiddenImplementation() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };   
  };

  var counter= initCounterWithHiddenImplementation();
  
  console.log(counter.value()); // 0
  counter.increment();
  counter.increment();
  console.log(counter.value()); // 2
  counter.decrement();
  console.log(counter.value()); // 1
  
//------------ closure with async (setTimeout) -----

function CounterWithClosure() {
    
    var counter = 0;

    setTimeout( function () {
        var innerCounter = 0;
        counter += 1;
        console.log("counter = " + counter);

        setTimeout( function () {
            counter += 1;
            innerCounter += 1;
            console.log("counter = " + counter + ", innerCounter = " + innerCounter)
        }, 500);

    }, 1000);

    console.log("end of CounterWithClosure() , counter=" + counter);
};

CounterWithClosure();


  


