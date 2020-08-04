window.onload = function() {
  fetchUser();
}

let usersArr = [];

const fetchUser = () => {
  for(let i = 0; i < 5; i++){
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    usersArr.push(data);
  })
  .then(data => {
    if(usersArr.length == 5){
    displayNamePhoto();
    }
  })
  }
}

const displayNamePhoto = () => {
  const contactsList = document.getElementById('contacts-list');
    usersArr.forEach(user => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      const button = document.createElement('button');
      li.innerHTML = `${user.results[0].name.first} ${user.results[0].name.last}`;
      img.src = `${user.results[0].picture.thumbnail}`;
      button.innerHTML = 'Display More Info';
      button.addEventListener("click", displayMoreInfo);
      contactsList.append(li, img, button);
    })
}

const displayMoreInfo = () => {
  const contactsList = document.getElementById('contacts-list');
    usersArr.find()
}