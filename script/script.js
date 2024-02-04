const input = document.getElementById('input')
const btn = document.getElementById('btn')
const list = document.getElementById('list')

const mainlist = []

function render() {
	list.innerHTML = ''
	if (mainlist.length == 0) {
		list.innerHTML = '<li>Заметок нет</li>'
	}
	for (let i = 0; i < mainlist.length; i++) {
		list.insertAdjacentHTML(
			'beforeend',
			`<li class='item-list'>
      <input type="checkbox" class="checkbox-list"/>
      <label class="text-list">${mainlist[i].text}</label>
    </li>`
		)
	}
}

render()

btn.onclick = () => {
	if (input.value != '') {
		const newNote = {
			text: input.value,
		}
		mainlist.push(newNote)
		render()
	}
	input.value = ''
}
