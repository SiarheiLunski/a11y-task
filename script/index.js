const modal = document.querySelector('#modal');
const modalFade = document.querySelector('.modal-fade');
const loginBtn = document.querySelector('#login-btn');

const KEYS = {
  ESC: 'Escape',
  TAB: 'Tab',
};

// TODO: Implement focus trap on modal

function closeOnClick(key) {
  return function(e) {
    console.dir(e)
    if (e.key === key) {
      modal.style.display = 'none';
    }
  }
}

loginBtn.addEventListener('click', e => {
  modal.style.display = '';
  modal.focus();    
  document.addEventListener('keydown', closeOnClick(KEYS.ESC), { once: true });
});

modalFade.addEventListener('click', e => {
  modal.style.display = 'none';
})
