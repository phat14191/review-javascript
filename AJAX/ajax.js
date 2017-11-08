// var ajaxRequest = new XMLHttpRequest();
// ajaxRequest.addEventListener('readystatechange', function(r) {
//   if(r.target.status === 200) {
//     console.log(r.target.response);
//   }
// });
// ajaxRequest.open("GET", "https://api.github.com/users/cassidoo", true);
// ajaxRequest.send();


fetch('https://api.github.com/users/cassidoo')
.then(function(e) {
  console.log(e.status);
  return e.json();
})
.then(function(j) {
  console.log(j)
})
