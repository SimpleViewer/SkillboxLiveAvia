//из первой формы
var ticket = document.getElementById('ticket');
var inputTicket = document.getElementById('inputTicket');
//из второй формы
var code = document.getElementById('code');
var inputCode = document.getElementById('inputCode');
//из третьей формы
var resetBtn = document.getElementById('resetApp');

//первая смена актива 1->2
function chngCntFrst() {
  const containerActive = document.querySelector('.js-frst.is-active');
  const containerInactive = document.querySelector('.js-frst:not(.is-active)');
  
  containerActive.classList.remove('is-active');
  containerInactive.classList.add('is-active');
}

//вторая смена актива 2->3
function chngCntScnd() {
  const containerActive = document.querySelector('.js-scnd.is-active');
  const containerInactive = document.querySelector('.js-scnd:not(.is-active)');
  
  containerActive.classList.remove('is-active');
  containerInactive.classList.add('is-active');
}

//третья смена актива 3->1
function chngCntThrd() {
  const containerActive = document.querySelector('.js-thrd.is-active');
  const containerInactive = document.querySelector('.js-thrd:not(.is-active)');
  
  containerActive.classList.remove('is-active');
  containerInactive.classList.add('is-active');
}

//при отправке 1
function tctfunc(event){
  event.preventDefault();
  chngCntFrst();
  setTimeout(resetApp, 463);
}

//при отправке 2
function cdfunc(event){
  event.preventDefault();
  chngCntScnd();
  setTimeout(resetApp, 463);
}

//при отправке 3
function resetApp() {
  inputTicket.value = '';
}

ticket?.addEventListener('submit', tctfunc);
code?.addEventListener('submit', cdfunc);
resetBtn?.addEventListener('click', chngCntThrd);