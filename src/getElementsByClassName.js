// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var matches = [];
  var elements = document.body;
  function traverse(node) { 
    if (node.classList) {
      if (node.classList.contains(className)) {
        matches.push(node);
      }
    }
    node.childNodes.forEach(function(child) {
      traverse(child);
    });
  }

  traverse(elements);
  return matches;
};
  

  // console.log(matches);
  // return matches;
