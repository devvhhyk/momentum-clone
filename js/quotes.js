const quotes = [
  {
    quote:
      "삶을 사는 데는 단 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는 방식이다",
    author: "- 알베르트 아인슈타인",
  },
  {
    quote: "문제점을 찾지 말고 해결책을 찾으라",
    author: "- 헨리포드",
  },
  {
    quote: "자신을 내보여라. 그러면 재능이 드러날 것이다",
    author: "- 발타사르 그라시안",
  },
  {
    quote:
      "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다",
    author: "- 톰 모나건",
  },
  {
    quote:
      "리더십의 기능은 지도자를 더 많이 만드는 것이지 추종자를 더 많이 만드는 게 아니다",
    author: "- 랄프 네이더",
  },
  {
    quote: "성공은 매일 반복한 작은 노력들의 합이다",
    author: "- 로버트 콜리어",
  },
  {
    quote: "성공한 사람이 되려고 노력하기보다 가치있는 사람이 되려고 노력하라",
    author: "- 알버트 아인슈타인",
  },
  {
    quote: "낭비한 시간에 대한 후회는 더 큰 시간의 낭비이다",
    author: "- 메이슨 쿨리",
  },
  {
    quote: "가난은 가난하다고 느끼는 곳에 존재한다",
    author: "- 에머슨",
  },
  {
    quote: "행복은 습관이다. 그것을 몸에 지녀라",
    author: "- 허버드",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;