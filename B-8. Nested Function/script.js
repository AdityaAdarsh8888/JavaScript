let a=10;
function outer()
{
    console.log("Inside outer function")
    function inner()
    {
        console.log("Inside inner function")
        return "Tu samjha..!"
    }
    return inner;
}

let x = outer()();
console.log(x)