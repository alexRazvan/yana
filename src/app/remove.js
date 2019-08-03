import { getActiveStatus, updateStatus, displayActiveStatus } from './status';
import { doneArr, listArr } from './initialization';
import { noteSection } from './selectors';

export function removeItem(e) {
	let targetNote = e.target.parentNode.parentNode;
	let targetNoteID = targetNote.querySelector('.noteID').textContent;

	if (getActiveStatus() === 'done-link') {
		doneArr.map((note, index) => {
			if (note._id == targetNoteID) {
				doneArr.splice(index, 1);
				targetNote.style.transformOrigin = 'bottom right'
				targetNote.style.animationName = 'deleteNote';
				deleteNote();
			}
		})
	} else {
		listArr.map((note, index) => {
			if (note._id == targetNoteID) {
				listArr.splice(index, 1);
				targetNote.style.transformOrigin = 'bottom right'
				targetNote.style.animationName = 'deleteNote';

				deleteNote();
			}
		})
	}

	async function wait(ms) {
		return new Promise(resolve => {
			setTimeout(resolve, ms);
		});
	}

	async function deleteNote() {
		await wait(240);
		noteSection.removeChild(targetNote);
	}

	updateStatus();
	displayActiveStatus();
}