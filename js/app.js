function hamburger() {
  const hamburgerMenu = document.getElementsByClassName('nav-icon');
  const hamburgerMenuExit = document.getElementsByClassName('close');
  const hamburgerMenuItems = document.getElementsByClassName('hamburger-list');

  hamburgerMenu[0].addEventListener('click', () => {
    document.getElementsByClassName('menu')[0].style.display = 'flex';
  });

  hamburgerMenuExit[0].addEventListener('click', () => {
    document.getElementsByClassName('menu')[0].style.display = 'none';
  });

  [...hamburgerMenuItems].forEach((element) => {
    element.addEventListener('click', () => {
      document.getElementsByClassName('menu')[0].style.display = 'none';
    });
  });
}
hamburger();

const btnSubmit = document.getElementById('send');
const inputEmail = document.getElementById('email');
const EMAIL_CASE_CHECK = 'Email adress should be in lower case';
const EMAIL_CHECK = 'Enter valid email';
const error = document.getElementById('warning');

btnSubmit.addEventListener('click', (e) => {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const address = inputEmail.value;
  if (address === address.toLowerCase()) {
    if (validRegex.test(address)) {
      error.classList.remove('.alert');
      error.classList.add('.off-alert');
    } else {
      error.innerHTML = `<span id="warning">${EMAIL_CHECK}</span>`;
      e.preventDefault();
      error.classList.add('.alert');
      error.classList.remove('.off-alert');
    }
  } else {
    e.preventDefault();
    error.innerHTML = `<span id="warning">${EMAIL_CASE_CHECK}</span>`;
    error.classList.add('.alert');
    error.classList.remove('.off-alert');
  }
  setTimeout(() => {
    error.classList.remove('.alert');
    error.classList.add('.off-alert');
  }, 100);
});

const userName = document.getElementById('fullname');
const userEmail = document.getElementById('email');
const userMsg = document.getElementById('message');

changeHandler = () => {
  const userData = {
    name: userName.value,
    email: userEmail.value,
    msg: userMsg.value,
  };
  localStorage.setItem('userInfo', JSON.stringify(userData));
};

const user = JSON.parse(window.localStorage.getItem('userInfo'));

userName.value = user.name;
userEmail.value = user.email;
userMsg.value = user.msg;

const cards = [
  {
    id: 1,
    image1: './images/popup-desktop.svg',
    image2: './images/popup-mobile.svg',
    tittle: 'Keeping track of hundreds of components',
    languages: ['Ruby on rails', 'css', 'Javascript'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    post: 'Multi-Post Stories <br> Gain + Glory',
    live: "url('https://google.com')",
    source: "url('https://github.com')",
    tagone: 'Rubby on rails',
    tagtwo: 'css',
    tagthree: 'JavaScript',
    tagfour: 'html',
    btn: 'See Project',
  },
  {
    id: 2,
    image1: './images/popup-desktop.svg',
    image2: './images/popup-mobile.svg',
    tittle: 'Keeping track of hundreds of components',
    languages: ['Ruby on rails', 'css', 'Javascript'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    post: 'Multi-Post Stories <br> Gain + Glory',
    live: "url('https://google.com')",
    source: "url('https://github.com')",
    tagone: 'Rubby on rails',
    tagtwo: 'css',
    tagthree: 'JavaScript',
    tagfour: 'html',
    btn: 'See Project',
  },
  {
    id: 3,
    image1: './images/popup-desktop.svg',
    image2: './images/popup-mobile.svg',
    tittle: 'Keeping track of hundreds of components',
    languages: ['Ruby on rails', 'css', 'Javascript'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    post: 'Multi-Post Stories <br> Gain + Glory',
    live: "url('https://google.com')",
    source: "url('https://github.com')",
    tagone: 'Rubby on rails',
    tagtwo: 'css',
    tagthree: 'JavaScript',
    tagfour: 'html',
    btn: 'See Project',
  },
  {
    id: 4,
    image1: './images/popup-desktop.svg',
    image2: './images/popup-mobile.svg',
    tittle: 'Keeping track of hundreds of components',
    languages: ['Ruby on rails', 'css', 'Javascript'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    post: 'Multi-Post Stories <br> Gain + Glory',
    live: "url('https://google.com')",
    source: "url('https://github.com')",
    tagone: 'Rubby on rails',
    tagtwo: 'css',
    tagthree: 'JavaScript',
    tagfour: 'html',
    btn: 'See Project',
  },
  {
    id: 5,
    image1: './images/popup-desktop.svg',
    image2: './images/popup-mobile.svg',
    tittle: 'Keeping track of hundreds of components',
    languages: ['Ruby on rails', 'css', 'Javascript'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    post: 'Multi-Post Stories <br> Gain + Glory',
    live: "url('https://google.com')",
    source: "url('https://github.com')",
    tagone: 'Rubby on rails',
    tagtwo: 'css',
    tagthree: 'JavaScript',
    tagfour: 'html',
    btn: 'See Project',
  },
  {
    id: 6,
    image1: './images/popup-desktop.svg',
    image2: './images/popup-mobile.svg',
    tittle: 'Keeping track of hundreds of components',
    languages: ['Ruby on rails', 'css', 'Javascript'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    post: 'Multi-Post Stories <br> Gain + Glory',
    live: "url('https://google.com')",
    source: "url('https://github.com')",
    tagone: 'Rubby on rails',
    tagtwo: 'css',
    tagthree: 'JavaScript',
    tagfour: 'html',
    btn: 'See Project',
  },
];

const workDiv = document.getElementById('work-grid');
let item = '';
cards.map((card) => {
  item += `
  <div class="card">
    <div class="card-text">
        <div class="post">
          <p>${card.post}</p>
        </div>
        <div class="tags">
            <ul class="ul-tags">
                <li class="tag-list btn-tag">${card.tagone}</li>
                <li class="tag-list btn-tag">${card.tagtwo}</li>
                <li class="tag-list btn-tag">${card.tagthree}</li>
                <li class="tag-list btn-tag">${card.tagfour}</li>
            </ul>
        </div>
        <div class="action">
            <button class="btn-action" id=${cards.id} onClick=popup(${card.id})>${card.btn}</button>
        </div>
    </div>
  </div>
`;
  return item;
});
workDiv.innerHTML = item;

// const popupWindow = document.getElementById('window');
 
popup = (projectId) => {
  let popupInfo ='';
  const modal = document.getElementById('window');
  const card = cards[projectId - 1];
//   let languages = '';
//   card.languages.forEach((element) => {
//  languages += `<li class="li-popup">${element}</li>`;
//   });

  popupInfo = `
  <div class="overlay">
        <h1>${card.tittle}</h1>
     </div> `;
//  return popupInfo;
 modal.innerHTML = popupInfo;
   modal.style.display = 'block';
};

//  popup.innerHTML = item;

//  const modal = document.getElementById('window');
//  document.onclick = (e) => {
//    if (e.target === modal) {
//      modal.style.display = 'none';
//    }
//  };