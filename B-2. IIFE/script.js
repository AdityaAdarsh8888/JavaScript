function chai () {
    console.log("Do you want a cup of tea?");
    
}
chai();             

/*In IIFE it's like ( )( ) */

(function chai(){
    console.log("Do you want a cup of tea?");
    
})();                  // IIFE's must be ended with semicolon ;
                       // IIFEs need a semicolon to clearly tell the JavaScript engine where the IIFE ends, preventing confusion and potential errors.


/*Arrow Function IIFE*/

(()=>{
    console.log("Have a cup of tea.");
    
})();


/*IIFE with Parameters*/

((name)=>{
    console.log(`${name},please have a cup of tea.`);
    
})(`Aditya Adarsh`);