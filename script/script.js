const input = document.getElementById('input')
const btn = document.getElementById('btn')
const list = document.getElementById('list')

function render() {
	list.innerHTML = ''
	const note = JSON.parse(localStorage.getItem('note')) || []

	note.map(item => {
		list.insertAdjacentHTML(
			'beforeend',
			`<li class='item-list'>
      <input type="checkbox" class="checkbox-list"/>
      <label class="text-list">${item.text}</label>
    </li>`
		)
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
