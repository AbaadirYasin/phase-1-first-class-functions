function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
    };
  }
  
  receivesAFunction(() => {
    console.log("Callback function called!");
  });
  
  const namedFunction = returnsANamedFunction();
  console.log(namedFunction); 

  const anonymousFunction = returnsAnAnonymousFunction();
  console.log(anonymousFunction); 