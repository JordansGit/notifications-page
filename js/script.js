var markReadBtn = document.querySelector('.mark-read-btn'); 
var notifCount = document.querySelector('.notif-count'); 
var dot = document.querySelector('.dot'); 
var span = document.querySelectorAll('span');
var notification = document.querySelectorAll('.notification');

var markAllRead = false;

markReadBtn.addEventListener('click', toggleRead)

function toggleRead() {
  if (markAllRead === false) {
    markReadBtn.innerText = "Mark all as unread"
    span.forEach(i => i.classList.remove('dot'))
    notifCount.innerText = 0;
    notification.forEach(i => i.classList.remove('unread'))
    markAllRead = true;
  } else {
    markReadBtn.innerText = "Mark all as read"
    span.forEach(i => i.classList.add('dot'))
    notifCount.innerText = 7;
    notification.forEach(i => i.classList.add('unread'))
    markAllRead = false;
  }
}