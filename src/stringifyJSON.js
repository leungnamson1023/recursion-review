// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var arrayVals = [];
  var objArray = [];
  //primitive types
  if (typeof obj === 'boolean' || obj === null || typeof obj === 'number') {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } 


  // for arrays
  else if (Array.isArray(obj)) {
    if (obj.length < 1) {
      return '[]';
    } else {
      obj.forEach(function(item) {
        arrayVals.push(stringifyJSON(item)); 
      }); 
      return '[' + arrayVals + ']';
    }
  } 

    
  // for obj
  else if (obj instanceof Object) {
    //if empty obj
    // keys in obj to string
    var arrOfKeys = Object.keys(obj);
    if (arrOfKeys.length === 0 ) {
      return '{}';
    } 

    for (var key in obj) {
      console.log(typeof key);
      if (obj[key] instanceof Function || typeof obj[key] === undefined) {
        return '{}';
      }
      if (typeof key === 'string') {
        objArray.push('"' + key + '":' + stringifyJSON(obj[key]));
      } else if (typeof key === 'boolean' || key === null || typeof key === 'number') {
        objArray.push('' + key + ':' + stringifyJSON(obj[key]));
    
      }
      // objArray.push(stringifyJSON(obj[key]));
      // objArray.push(stringifyJSON(key));
    }
    return '{' + objArray + '}';
  }
};




