//call ex

const person1 = {
    name: "Alice",
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  const person2 = {
    name: "Bob"
  };
  
  // Borrowing the greet method from person1 using call
  person1.greet();                // Output: Hello, my name is Alice.
  person1.greet.call(person2);     // Output: Hello, my name is Bob.

  



  
  //apply ex

  const person1 = {
    name: "Alice",
    greet: function(greeting, punctuation) {
      console.log(`${greeting}, my name is ${this.name}${punctuation}`);
    }
  };
  
  const person2 = {
    name: "Bob"
  };
  
  // Using apply to borrow the greet method from person1
  person1.greet.apply(person2, ["Hello", "!"]); // Output: Hello, my name is Bob!

  





  //bind ex

  const person = {
    name: "Alice",
    greet: function(greeting) {
      console.log(`${greeting}, my name is ${this.name}.`);
    }
  };
  
  // Create a bound function with a specific 'this' value
  const greetAlice = person.greet.bind(person);
  
  // Calling the bound function
  greetAlice("Hello"); // Output: Hello, my name is Alice.
  
  // Creating another bound function with a different greeting
  const greetBob = person.greet.bind({ name: "Bob" });
  greetBob("Hi"); // Output: Hi, my name is Bob.
  