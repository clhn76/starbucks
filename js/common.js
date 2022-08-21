// Header 검색영역
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInputEl.removeAttribute('placeholder');
  searchInputEl.value = '';
});

// Footer 연도
const thisYearEl = document.querySelector('.this-year');
const curYear = new Date().getFullYear();
thisYearEl.textContent = curYear;
