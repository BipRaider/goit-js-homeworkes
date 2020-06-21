'use strick';

const switchTheme = (e, elem) => {
  e.stopPropagation();
  let rememberLS = {};
  if (elem.classList.value !== 'dark-theme') {
    elem.classList.replace('light-theme', 'dark-theme');
    rememberLS = {
      body: 'dark-theme',
      checkInput: true,
    };
    localStorage.setItem('rememberLS', JSON.stringify(rememberLS));

    // localStorage.setItem('body', 'dark-theme');
    // localStorage.setItem('checkInput', true);
    return;
  }
  if (elem.classList.value === 'dark-theme') {
    elem.classList.replace('dark-theme', 'light-theme');

    rememberLS = {
      body: 'light-theme',
      checkInput: false,
    };
    localStorage.setItem('rememberLS', JSON.stringify(rememberLS));

    // localStorage.setItem('body', 'light-theme');
    // localStorage.setItem('checkInput', false);
    return;
  }
};

module.exports = {
  switchTheme,
};
