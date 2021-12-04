let tasks = [];

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

    clearTask();
  });
}

function handleClickAdd() {
  let msg = document.querySelector('#task').value;

  if (!msg.trim().length) {
    alert('Введите задание');
  } else {
    tasks.push(msg);
    render();
  }
}

function handleClickRemove(index) {
  const newTasks = tasks.filter((_, i) => {
    if (index !== i) return true;
    else return false;
  });
  tasks = newTasks;
  render();
}

function removeAllChild(selector) {
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild);
  }
}

function clearTask() {
  document.querySelector('#task').value = '';
}
