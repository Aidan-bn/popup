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