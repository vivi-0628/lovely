const chatData = [
  {
    sender: '工具人',
    text: '晚餐吃了嗎?',
    options: ['吃了', '還沒要一起吃嗎?', '還好不餓'],
    responses: ['嗯 ', '哈哈，我吃過了 ', '沒事啦，原本想問你要不要一起吃得 '],
    points: [1, 5, 3]
  },
  {
    sender: '工具人',
    text: '今天在路上看到一隻超可愛的貓咪，讓我想起你上次一起看的那隻。',
    options: ['蛤，什麼貓咪', '是上次橘色那隻嗎?', '對啊!上次那隻超可愛的'],
    responses: ['你不記得了喔... ', '你記成誰? ', '騙人，我沒跟你看過貓 '],
    points: [5, 1, 3]
  },
  {
    sender: '工具人',
    text: '最近有沒有什麼有趣的事發生？',
    options: ['今天我跟我們學校的狗握手了', '最近...好像都沒有', '跟你聊天就是最有趣的事情了'],
    responses: ['真的嗎?好可愛喔!我也喜歡狗 ', '哈哈，你很木訥!超可愛的 ', '哈哈，真榮幸 '],
    points: [3, 5, 1]
  },
  {
    sender: '工具人',
    text: '好想看電影，有推薦的嗎?',
    options: ['我會員還有，要給你帳號自己看嗎?', '想約我就直接說', '最近沒什麼在看'],
    responses: ['好哇!你人真的好好 ', '為什麼不呢？因為我不想。 ', '吃了誠實豆沙包? '],
    points: [5, 1, 3]
  },
  {
    sender: '工具人',
    text: '你覺得我們現在什麼關係?',
    options: ['沒關係', '你覺得呢?', '親朋好友吧!'],
    responses: ['好笑嗎? ', '不確定才問你 ', '可以親嘴，但沒關係? '],
    points: [3, 5, 1]
  }
];

let currentMessageIndex = 0;
let totalPoints = 0;

function displayMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', message.sender === '我' ? 'mine' : 'other');
  
  const sender = document.createElement('div');
  sender.classList.add('sender');
  sender.textContent = message.sender;
  
  const text = document.createElement('div');
  text.classList.add('text');
  text.textContent = message.text;
  
  messageElement.appendChild(sender);
  messageElement.appendChild(text);
  
  document.querySelector('.chat-content').appendChild(messageElement);
  
  if (message.options) {
    const answerOptions = document.createElement('div');
    answerOptions.classList.add('answer-options');
    message.options.forEach((option, index) => {
      const answerButton = document.createElement('button');
      answerButton.classList.add('answer');
      answerButton.textContent = option;
      answerButton.setAttribute('data-index', index);
      answerOptions.appendChild(answerButton);
    });
    messageElement.appendChild(answerOptions);
  
    const buttons = answerOptions.querySelectorAll('.answer');
    buttons.forEach((button) => {
      button.addEventListener('click', () => handleAnswerSelection(button));
    });
  }
}

function handleAnswerSelection(selectedButton) {
  const answerIndex = selectedButton.getAttribute('data-index');
  selectedButton.style.backgroundColor = '#ff4e74';
  selectedButton.disabled = true;
  
  const currentQuestion = chatData[currentMessageIndex];
  totalPoints += currentQuestion.points[answerIndex];
  
  setTimeout(() => {
    const response = currentQuestion.responses[answerIndex];
    displayMessage({ sender: currentQuestion.sender, text: response });
  
    speak(response);
  
    currentMessageIndex++;
    if (currentMessageIndex < chatData.length) {
      const nextQuestion = chatData[currentMessageIndex];
      displayMessage({
        sender: nextQuestion.sender,
        text: nextQuestion.text,
        options: nextQuestion.options,
      });
    } else {
      displayScore();
    }
  }, 1000);
}

function displayScore() {
  let feedback = '';
  let modalBackgroundColor = '';

  if (totalPoints < 10) {
    feedback = '戀愛學分要修喔!';
    modalBackgroundColor = '#ff7b7b';
  } else if (totalPoints < 18) {
    feedback = '懂聊喔!';
    modalBackgroundColor = '#ffec7b';
  } else {
    feedback = '喔~抓到!很會聊喔';
    modalBackgroundColor = '#aaff7b';
  }

  document.getElementById('scoreText').innerHTML = `你的總分是：${totalPoints}/25分<br>${feedback}`;
  document.getElementById('resultModal').style.display = 'block';
  document.getElementById('resultModal').style.backgroundColor = modalBackgroundColor;
}

document.getElementById('closeModalButton').addEventListener('click', () => {
  document.getElementById('resultModal').style.display = 'none';
});

window.onload = () => {
  displayMessage({
    sender: chatData[0].sender,
    text: chatData[0].text,
    options: chatData[0].options,
  });
};

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}