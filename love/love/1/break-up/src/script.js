function closeWindow() {
  const windowElement = document.querySelector('.window');
  windowElement.style.display = 'none';
}

function showMessage() {
  const messageWindow = createPopupWindow('顯示訊息', '想好就好');
  document.body.appendChild(messageWindow);
  messageWindow.style.display = 'block';
}

function changeContent() {
  const contentWindow = createPopupWindow('顯示訊息', '為什麼走到這步?');
  document.body.appendChild(contentWindow);
  contentWindow.style.display = 'block';
}

function closePopup() {
  const popupWindow = document.getElementById('popupWindow');
  popupWindow.style.display = 'none';
}

function createPopupWindow(title, message) {
  const popupWindow = document.createElement('div');
  popupWindow.className = 'popup-window';

  const popupHeader = document.createElement('div');
  popupHeader.className = 'popup-header';
  const titleElement = document.createElement('span');
  titleElement.textContent = title;
  popupHeader.appendChild(titleElement);

  const closeBtn = document.createElement('button');
  closeBtn.className = 'popup-close-btn';
  closeBtn.textContent = 'X';
  closeBtn.onclick = function() { popupWindow.style.display = 'none'; };
  popupHeader.appendChild(closeBtn);

  const popupContent = document.createElement('div');
  popupContent.className = 'popup-content';
  popupContent.textContent = message;

  popupWindow.appendChild(popupHeader);
  popupWindow.appendChild(popupContent);

  return popupWindow;
}

function resetPage() {
  const windowElement = document.querySelector('.window');
  windowElement.style.display = 'inline-block';

  const clouds = document.querySelectorAll('.cloud');
  clouds.forEach(cloud => cloud.style.display = 'flex');

  const popupWindow = document.getElementById('popupWindow');
  popupWindow.style.display = 'none';
}
