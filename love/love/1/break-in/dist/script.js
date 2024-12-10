const textLines = [
  ["可能更注重享受當下", "可以設立共同的財務目標", "學會妥協與尊重", "討論如何達成彼此都能接受的金錢管理方式", "尋求專業理財顧問也是一個選擇",
   "尊重對方選擇", "享理財工具或應用程式", "金錢上的寬容與信任", "一起參與金錢管理過程", "學會放手"],

  ["了解彼此的家庭背景", "討論未來的家庭生活時，應該明確表達各自的需求和期望", "尊重對方的文化和傳統", "協商角色分配", "共同設立家庭目標",
   "避免批評對方的家庭", "辨識核心價值和優先事項", "共建家庭的願景", "理解不同的親子觀念", "設定界限與私密空間"],

  ["試著將你的觀點簡單明確地表達", "換位思考", "坦承面對", "尋找共同的愛情價值", "調整對愛情的期待",
   "適應對方的愛情表達方式", "共同的長期目標與未來規劃", "給彼此足夠的空間", "面對衝突時學會冷靜", "學會包容對方的缺點"],

  ["理解對方的立場", "坦率地表達各自對人際關係的需求與期望", "尊重彼此的社交需求", "給予彼此空間可以幫助雙方重新調整心態", "學會聆聽並保持耐心",
   "避免情緒化的爭吵", "尋找第三方意見", "反思自身行為", "避免過於強烈的對比", "增強自信心和自我價值"]
];

const spunSlots = [false, false, false, false];
const buttons = document.querySelectorAll('.spin-btn');
const textLinesElements = [
  document.getElementById('text-line-1'),
  document.getElementById('text-line-2'),
  document.getElementById('text-line-3'),
  document.getElementById('text-line-4')
];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const slotIndex = button.getAttribute('data-slot');
    spin(slotIndex);
  });
});

function spin(slotIndex) {
  const slot = document.querySelectorAll('.slot')[slotIndex];
  const cover = slot.querySelector('.slot-cover');
  const items = slot.querySelectorAll('.slot-item');
  
  if (!spunSlots[slotIndex]) {
    spunSlots[slotIndex] = true;
    cover.style.top = '-150px'; // Hide the cover
  }

  let spinDuration = 1000;
  let intervalDuration = 50;
  let iterations = spinDuration / intervalDuration;

  let currentIteration = 0;
  const randomPositions = Array.from({ length: iterations }, () => Math.floor(Math.random() * items.length));

  function rotateSlot() {
    const randomPosition = randomPositions[currentIteration];
    items.forEach((item, index) => {
      item.style.top = `${index * 150}px`;
    });

    items.forEach((item, index) => {
      item.style.top = `${(index - randomPosition) * 150}px`;
    });

    currentIteration++;
    if (currentIteration >= iterations) {
      clearInterval(interval);
      updateText(slotIndex);
    }
  }

  const interval = setInterval(rotateSlot, intervalDuration);
}

function updateText(slotIndex) {
  const randomText = textLines[slotIndex][Math.floor(Math.random() * textLines[slotIndex].length)];
  textLinesElements[slotIndex].textContent = randomText;
}