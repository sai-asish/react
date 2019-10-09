import axios from 'axios';
var querystring = require('querystring');

export default (async function showResults(values) {  
  axios.post('http://localhost:8080/registerUser', querystring.stringify(values), {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response => {
    window.alert(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

});