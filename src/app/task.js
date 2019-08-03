import { listArr, doneArr } from './initialization';
import { noteSection } from './selectors';
import { updateStatus, displayActiveStatus, setActiveStatus } from './status';
import { filterNotes } from './filter-notes';
import { getActiveCategory } from './categories';
import { printHtml } from './print-html';

export function taskCompleted(noteTarget) {
	let doneItem;
	let currentNote = noteTarget.target.parentNode.parentNode;
	let currentNoteID = currentNote.querySelector('.noteID').textContent;

	listArr.map((note, index) => {
		if (note._id == currentNoteID) {
			note.status = 'complete';
			doneItem = listArr.splice(index, 1);
			currentNote.style.transformOrigin = 'bottom right';
			currentNote.style.animationName = 'deleteNote';
			removeNote();
			doneArr.push(...doneItem);
		}
	})

	async function wait(ms) {
		return new Promise(resolve => {
			setTimeout(resolve, ms);
		});
	}
	async function removeNote() {
		await wait(240);
		noteSection.removeChild(currentNote);
	}
	updateStatus();
	displayActiveStatus();
}

export function toggleDoneNotes(link) {
	let todo = link.classList.contains('to-do-link');
	let done = link.classList.contains('done-link');

	if (todo) {
		noteSection.innerHTML = '';
		filterNotes(getActiveCategory());

	} else if (done) {
		noteSection.innerHTML = '';
		for (let note of doneArr) {
			if (note.category === getActiveCategory()) {
				printHtml(note);
			} else if (getActiveCategory() === 'All') {
				printHtml(note);
			}
		}
	}
	setActiveStatus(link.classList);
}

export function undoCompleted(e) {
	let noteID = e.target.parentNode.parentNode.querySelector('.noteID').textContent;
	let currentNote = e.target.parentNode.parentNode;
	let undoneNote;

	for (let index in doneArr) {
		if (doneArr[index]._id === parseInt(noteID)) {
			doneArr[index].status = 'active';
			undoneNote = doneArr.splice(index, 1);
			currentNote.style.animationName = 'deleteNote';
			removeNote();
			listArr.push(...undoneNote)
		}
	}

	async function wait(ms) {
		return new Promise(resolve => {
			setTimeout(resolve, ms);
		});
	}
	async function removeNote() {
		await wait(240);
		noteSection.removeChild(currentNote);
	}
	updateStatus();
	displayActiveStatus();
}