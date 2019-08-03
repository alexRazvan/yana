import { listArr } from './initialization';

export function editNote(e) {
	if (!e.target.classList.contains('dropdown-add-category')) {
		let newText = e.target.innerHTML;
		let noteID = e.target.parentNode.querySelector('.noteID').textContent;

		for (let note of listArr) {
			if (note._id == noteID) {
				note.text = newText;
			}
		}
	}
}