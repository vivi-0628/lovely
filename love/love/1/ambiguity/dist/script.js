const strings = [
  "把他當成朋友，不要給他壓力",
  "可以講一個笑話，像是【我出門前跟隱形眼鏡說:我根本沒把你放在眼裡】。",
  "可以關心他的日常，但請勿自我感動。EX:分享自己的日常，拍張照給他(非自拍，此處指生活照)。",
  "稱讚對方，像是【你今天的穿搭，配色很好看!】。",
  "聊一些興趣、愛好，相同的愛好可以拉近距離。",
  "禁止聊亂撩人，怕被告!!!",
  "可以進行有趣的對話，像是【我們現在是什麼關係?】。",
  "切記不要強烈表達過度的愛意，容易讓人感到壓力。",
  "可以與對方一起玩遊戲，但請不要亂講話，像【一起玩遊戲的話，那我們之間有戲嗎?】",
  "聊天時，不需要幻想太多，說不定對方根本沒感覺。",
  "切記不要有太多肢體動作，像是擁抱或接吻。",
  "若被敷衍，請換話題或等待下一位。",
  "關心對方的情緒，若他心情不好或需要傾訴時，給予適當的情緒支持。",
  "創造一些美好的回憶，像是一起捏陶土。",
  "適當的約會，若一直被拒絕請反省自己是否有過多期待。",
  "請勿過度解讀對方的訊息，像是：「可是他叫我寶寶ㄟ」，也許他的職業是幼師，才會不小心叫錯。",
  "給對方空間，做好自己該做的事情，不要過度依賴或將重心放在對方身上。",
  "適當的建立信任感，像是保持誠實、履行承諾。",
  "注意小細節，記得對方的口味和習慣。",
  "開共享歌單，增加共同話題。",
  "傳一些ig影片的食物，邀約對方前往。",
  "在無法確定關係時，產生焦慮感是很正常的，請適當地放鬆。",
  "反思一下，為什麼會喜歡對方，不要衝動行事。",
  "如果確定要告白，記得準備一束花和一個用心的告白，不管被接受還是拒絕，至少不會留下遺憾。",
  "保持適當的邊界感，不要過度侵犯對方的私人空間。",
  "聊一下價值觀，避免日後後悔。",
  "曖昧期太久，大概率沒有結果（大約三個月內）。",
  "在交往前，切勿將自己視為對方的另一半。",
];

let drawnStrings = [];

function drawString() {
    if (strings.length === 0) {
        document.getElementById('questionBox').style.display = 'block';
        return;
    }

    const randomIndex = Math.floor(Math.random() * strings.length);
    const selectedString = strings.splice(randomIndex, 1)[0];
    drawnStrings.push(selectedString);

    document.getElementById('result').textContent = selectedString;
}

function showOptionResult(option) {
    let resultMessage = '';
    if (option === 1) {
        resultMessage = '恭喜牽手成功';
    } else if (option === 2) {
        resultMessage = '下一個會更好';
    }

    document.getElementById('result').textContent = resultMessage;
    document.getElementById('questionBox').style.display = 'none';

    setTimeout(function() {
        location.replace(location.href);
    }, 2000);
}