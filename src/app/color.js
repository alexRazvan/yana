import { listArr } from './initialization';

export function changeColor(e) {
	let newColor = window.getComputedStyle(e.target).color;
	let targetNoteID = e.target.parentNode.parentNode.parentNode.querySelector('.noteID').textContent

	listArr.map(note => {
		if (note._id == targetNoteID) {
			note.color = newColor;
			let targetNote = e.target.parentNode.parentNode.parentNode.parentNode;
			targetNote.style.background = note.color;
		}
	})
}