function fonctionANbArgVariable(...args){
    let nbArgs = args.length;
    console.log("nbArgs="+nbArgs);
    console.log("premier_args="+  ( (nbArgs>=1)?args[0]:"non renseigne" ) )
}

fonctionANbArgVariable();
fonctionANbArgVariable("novembre")
fonctionANbArgVariable("novembre","decembre")