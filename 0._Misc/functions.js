function myFirstFunction(){        // function 
    return "Hello there!";
}

console.log(myFirstFunction());

const myVariableFunction = function () {      //this is a statment / anonymous function saved in a variable
    console.log("Hello ther from the anonymous function ");
};

// arrow functions declare the "this" keyword differently, binds it to the scope of the function
const myArrowFunction = () => {                 // arrow function
    console.log("Hello there from the anonymous function that's also an arrow fuction.")
};

// callbacks

function sayHiLater(anyFunctionReference){

    // simulate somoe code running
    // take some time...
    // and more time..
     anyFunctionReference(); 
}

const sayHello = () => {
    console.log("Hello");
};

sayHiLater(sayHello);

function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
}

const poke = (name) => {
    return "Poke" + name;
}

interact(poke, "Elisha");
interact(poke, "Aïcha");

// hug someone by calling interact and do it all in one line 
// example: "Hug " + name where name is Napster for instance
interact((name) => "Hug " + name, "Napster");
interact()

//or

interact(hug = (name) => { return "hug " + name}, "Elisha");