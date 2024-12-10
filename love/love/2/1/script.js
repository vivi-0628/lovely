const buttons = document.querySelectorAll('.btn');
        const tooltip = document.getElementById('tooltip');

        buttons.forEach(button => {
            button.addEventListener('mouseenter', (event) => {
                const description = event.target.getAttribute('data-info');
                tooltip.textContent = description;
                tooltip.style.display = 'block';

                const buttonRect = event.target.getBoundingClientRect();
                tooltip.style.top = `${buttonRect.bottom + window.scrollY + 10}px`;
                tooltip.style.left = `${buttonRect.left + window.scrollX + (buttonRect.width / 2) - (tooltip.offsetWidth / 2)}px`;
            });

            button.addEventListener('mouseleave', () => {
                tooltip.style.display = 'none';
            });
        });


       const messages = [
    "愛情不是佔有，而是相互尊重。",
    "愛的本質是成長，不是依賴。",
    "別因為孤單而將就一段感情。",
    "真愛不是語言，而是行動。",
    "溝通是愛情中最好的紐帶。",
    "放手並不意味著結束，而是新開始。",
    "懂得放下，才能走得更遠。",
    "愛情需要兩個人的共同經營。",
    "過分依賴愛情，最終會感到孤單。",
    "保持真實，愛才會長久。",
    "每段愛情都是一場學習。",
    "愛情最怕的是不理解與冷漠。",
    "愛是一種選擇，而非義務。",
    "過度的期待，只會帶來失望。",
    "愛情需要時間的沉澱與理解。",
    "尊重彼此的差異，是愛情的基礎。",
    "勇敢去愛，但也要懂得放手。",
    "愛自己，才能愛他人。",
    "經歷過愛與痛，才會更加珍惜。",
    "一段好的感情是相互成長的過程。"
];


        let currentMessageIndex = 0;
        const dynamicTextbox = document.getElementById('dynamic-textbox');

        function updateMessage() {
            dynamicTextbox.textContent = messages[currentMessageIndex];
            currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        }


        setInterval(updateMessage, 5000);


        updateMessage();