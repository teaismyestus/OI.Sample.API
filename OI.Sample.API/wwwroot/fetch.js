const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? { 'Content-Type': 'application/json' } : {}
  }).then(response => {
    if (response.status >= 400) {
      // !response.ok
      return response;
    }
    return response.json();
  });
};

const getData = () => {
  sendHttpRequest('GET', 'api/Data').then(responseData => {
    console.log(responseData);
  });
};

const sendData = () => {
  var nameValue = document.getElementById("name").value;
  var numberValue = document.getElementById('number').value;
  var cords = localStorage.getItem('cords');
  sendHttpRequest('POST', 'api/Data', {
    name: nameValue,
    number: numberValue,
    cords: cords
    
  })
    .then(responseData => {
      console.log(responseData);
      localStorage.removeItem('cords');
      this.closeForm();
    })
    .catch(err => {
      console.log(err, err.data);
    });
};

function openForm() {
  document.body.classList.add("showLoginForm");
}

function closeForm() {
  document.body.classList.remove("showLoginForm");
}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
