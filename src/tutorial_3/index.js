let tasks = ['Привет мир'];

function render() {
  let ul = document.querySelector('ul');
  removeAllChild(ul);

  tasks.forEach((msg, index) => {
    let li = document.createElement('li');
    let btn = document.createElement('input');

    li.innerHTML = msg;

    btn.type = 'button';
    btn.value = 'X';
    btn.onclick = function () {
      handleClickRemove(index);
    };

    ul.appendChild(li);
    li.appendChild(btn);
  });
}

function handleClickAdd() {
  let msg = document.querySelector('#task').value;

  if (!msg.trim().length) {
    alert('Введите задание');
  } else {
    tasks.push(msg);
    clearInput();
    render();
  }
}

function handleClickRemove(index) {
  const newTasks = tasks.filter((_, i) => index !== i);
  tasks = newTasks;
  render();
}

function removeAllChild(selector) {
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild);
  }
}

function clearInput() {
  document.querySelector('#task').value = '';
}

document.addEventListener('DOMContentLoaded', render);
