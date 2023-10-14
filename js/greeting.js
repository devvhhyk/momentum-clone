const loginForm = document.querySelector("#login-form"); // 로그인 폼 부분
const loginInput = document.querySelector("#login-form input"); // 입력창
const greeting = document.querySelector("#greeting") // 입력한 내용이 화면에 보여지는 부분

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username){
  greeting.innerText = `Hello! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}