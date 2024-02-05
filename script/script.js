const input = document.getElementById('input')
const btn = document.getElementById('btn')
const list = document.getElementById('list')

function render() {
	list.innerHTML = ''
	const note = JSON.parse(localStorage.getItem('note')) || []

	for (var i = 0; i < note.length; i++) {
		;(function (index) {
			const li = document.createElement('li')
			const p = document.createElement('p')
			p.textContent = `${i + 1}. ${note[index].text}`
			p.classList.add('text-list')
			li.classList.add('item-list')
			const button = document.createElement('button')
			button.textContent = 'Удалить'
			button.addEventListener('click', function () {
				note.splice(index, 1)
				localStorage.setItem('note', JSON.stringify(note))
				render()
			})
			const checkbox = document.createElement('input')
			checkbox.type = 'checkbox'
			li.appendChild(checkbox)
			li.appendChild(p)
			li.appendChild(button)
			list.appendChild(li)
		})(i)
	}
}
render()

btn.onclick = () => {
	if (input.value != '') {
		const newNote = {
			text: input.value,
		}
		const mainlist = JSON.parse(localStorage.getItem('note')) || []
		mainlist.push(newNote)

		localStorage.setItem('note', JSON.stringify(mainlist))
		console.log(mainlist)
	}
	input.value = ''
	render()
}
