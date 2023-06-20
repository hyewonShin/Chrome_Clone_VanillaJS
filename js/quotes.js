const quotes = [
  {
    quote:
      "당신이 평온과 행복을 찾는다면 누군가 질투할 수도 있다. 그래도 행복하게 살아가라.",
    author: "Mother Teresa",
  },
  {
    quote:
      "자신이 어떻게 변해왔는지 알려면 변하지 않은 곳으로 돌아가는 것보다 더 좋은 방법은 없다.",
    author: "Nelson Mandela",
  },
  {
    quote: "아무 말도 하지 않는 사람 중에 침묵하는 사람은 거의 없다.",
    author: "Thomas Neill",
  },
  {
    quote: "겁쟁이는 도망가는 것을 택하고, 용기있는 자는 위험을 택한다.",
    author: "Euripides",
  },
  {
    quote: "한 사람의 정신적 기쁨은 정신력의 척도다.",
    author: "Ninon de Lenclos",
  },
  {
    quote: "이상하게도 세상에는 신체적 용기는 흔한 반면 도덕적 용기는 드물다.",
    author: "Mark Twain",
  },
  {
    quote:
      "진실의 산을 오르는 데에는 헛된 법이 없다. 오늘 더 높은 곳에 이르게 되거나, 내일 더 높이 올라가기 위한 힘을 다질 수 있다.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "타인들의 비현실적 기준에 당신 자신을 끼워맞출 수도 있겠지만, 이를 무시하고 당신 그대로의 모습으로 행복하게 사는 데 집중할 수도 있다.",
    author: "Jeph Jacques",
  },
  {
    quote:
      "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
    author: "James Oppenheim",
  },
  {
    quote: "아무도 신뢰하지 않는 자는 누구의 신뢰도 받지 못한다.",
    author: "Jerome Blattner",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log("quote", quotes[Math.floor(Math.random() * quotes.length)]);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
