# momentum-clone
momentum 클론코딩


- 로그인 폼 구현

form안에 input태그가 있을때 type이 submit인 버튼을 클릭하면 form이 submit되어 새로고침된다

이를 방지하기 위해 e.preventDefult()를 사용한다

form에 class를 추가하여 css로 숨김기능을 만들어둔다 

```css
.hidden {
  display: none;
}
```

greeting자리에 `Hello! ${username}`를 넣어주고 클래스는 삭제하여 인삿말과 이름이 나타나게 한다

```html
<form class="hidden" id="login-form">
	<span>My Name Is</span>
  <input required maxlength="15" type="text" />
</form>
```

```jsx
function onLoginSubmit(e) {
  e.preventDefault(); // 새로고침 방지를 위해 사용
  loginForm.classList.add(HIDDEN_CLASSNAME); // hidden클래스추가 하여 로그인 폼 숨김
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username){
  greeting.innerText = `Hello! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME); // hidden클래스제거하여 인사말과 이름 나타냄
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
```

localStorage는 브라우저에 무엇인가를 저장할 수 있게 해주고 그것을 시간이 지나도 가져다 쓸 수 있게 해준다

localStorage.setItem을 활용하면 localStorage에 정보를 저장할 수 있다

localStorage.getitem을 활용하면 localStorage의 내용을 가져올 수 있다


- 시계 구현

padstart(2, 0)를 사용하면 두자리로 지정하고 만약 첫째자리에 숫자가 없을 땐 0으로 채워준다

또한 문자열로 처리하여 원치않는 연산이 발생하지 않도록 해준다

그렇게 하여 시계를 00:00:00의 형태로 만들 수 있다

```jsx
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes =  String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
```


- 투두리스트 구현

JSON.stringify(toDos) : localStrorage는 문자열 형태로만 데이터를 저장할 수 있기에 객체나 배열같은 데이터를 문자열로 변환하여야 한다 : JSON.stringify(toDos)

toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)) : 배열을 돌면서 li.id와 일치하지 않는 항목만을 새로운 배열로 남기고 새로운 배열을 생성한다

JSON.parse(savedToDos) : 문자열을 자바스크립트 객체로 변환하여 사용할 수 있다 여기에선 배열이 반환되어 사용된다
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) { // 투두리스트 삭제
  const li = e.target.parentElement;
  li.remove(); // 해당 항록삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos()
}

```jsx
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerHTML = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo); // 버튼을 클릭하면 리스트를 삭제
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = ""; // 인풋창 비우기
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // 저장된 투두 불러오기

if (savedToDos !== null) { // 저장된 투두항목들이 있다면
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // 각 항목 화면에 표시
}
```
