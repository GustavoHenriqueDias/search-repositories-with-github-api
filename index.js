var inputElement = document.querySelector('#corpo input');
var buttonElement = document.querySelector('#corpo button');
var listElement = document.querySelector('#corpo ul');

function renderRepositories(repositories){
  listElement.innerHTML = '';
  for (repositorie of repositories){
    const textElement = document.createTextNode(repositorie.name);
    const liElement = document.createElement('li');

    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
  }
}

buttonElement.onclick = function() {
  var username = document.getElementById("user").value;
  axios.get(`https://api.github.com/users/${username}/repos`)
  .then (function(response){
    renderRepositories(response.data);
    
  })
  .catch (function(error){
    alert('Usuario não encontrado! User not found!')
  })
}
 
