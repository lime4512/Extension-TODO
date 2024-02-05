const input = document.getElementById('input')
const btn = document.getElementById('btn')
const list = document.getElementById('list')

function render() {
	list.innerHTML = ''
	const note = JSON.parse(localStorage.getItem('note')) || []

	note.map(item => {
		const li = document.createElement('li')
		li.textContent = item.text
		const button = document.createElement('button')
		button.textContent = 'Удалить'
		button.addEventListener('click', function () {
			note.splice(item, 1)
			localStorage.setItem('note', JSON.stringify(note))
			render()
		})
		li.appendChild(button)
		list.appendChild(li)
	})
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

function myFunction() {
	console.log('sdfsdf')
}
