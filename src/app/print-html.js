import { noteSection, inputVal } from './selectors';
import { updateStatus, displayActiveStatus } from './status';
import { toggleInput } from './input';
import { note } from './templates';

export function printHtml(filteredItem) {
	let noteMarkup = note(filteredItem);

	let newEntry = document.createElement('div');
	newEntry.className = 'note';

	noteSection.insertBefore(newEntry, noteSection.childNodes[0]).innerHTML = noteMarkup;
	if (filteredItem.status === 'complete') { // if note is done
		newEntry.classList.add('done-note');

		let checkmark = newEntry.querySelector('.checkmark')
		if (checkmark.classList.contains('fa-check-circle')) { // remove the checkmark and add the undo
			checkmark.classList.remove('fa-check-circle');
			checkmark.classList.add('fa-undo-alt');
		}
	} else { // if note is to do
		newEntry.style.background = filteredItem.color;
	}

	inputVal.value = '';
	toggleInput();
	updateStatus();
	displayActiveStatus();
}