// pizza 배열 만들기
const pizzaList = [];
const pizzaOptions = document.forms[0].elements.selectPizza;

for (let i = 0; i < pizzaOptions.length; i++) {
  let pizza = {
    engName: pizzaOptions[i].value,
    korName: pizzaOptions[i].labels[0].innerText
  };
  pizzaList.push(pizza)
}


// 주문 내역 확인 메시지 출력하기
const showMessage = function() {
  
  // 피자 이름
  let pizzaName = "";
  for (let i = 0; i < pizzaOptions.length; i++) {
    if (pizzaOptions[i].value === pizzaOptions.value) {
      pizzaName = pizzaOptions[i].labels[0].innerText
    }
  }

  // 사이즈
  const sizeOptions = document.forms[0].elements.selectSize;
  let size = sizeOptions.options[sizeOptions.selectedIndex].innerText;

  // 추가 메뉴
  const extraOptionsList = [];
  const extraOptions = document.querySelectorAll(".inputArea input");
  for (let i = 0; i < extraOptions.length; i++) {
    if (extraOptions[i].checked === true) {
      extraOptionsList.push(extraOptions[i].labels[0].innerText)
    }
  }

  const Message =
  `
  주문하신 피자는 ${pizzaName}, 사이즈는 ${size},
  추가로 주문하신 것은 ${extraOptionsList.join(", ")}
  입니다.
  `

  alert(Message)
}

const orderBtn = document.getElementById('applyBtn');
orderBtn.addEventListener('click', showMessage)