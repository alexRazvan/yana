import { displayCategories } from "./app/categories";
import { updateStatus } from "./app/status";
import { displayActiveStatus } from './app/status';
import { noteSection } from './app/selectors';
import { categoryFilter } from './app/selectors';
import { button } from './app/selectors';
import { inputVal } from './app/selectors';
import { status } from './app/selectors';
import { createNewObject } from './app/app';
import { changeCategory } from './app/categories';
import { addNewCategory } from './app/categories';
import { newCategoryByMenu } from './app/categories';
import { keyEvents } from './app/events';
import { toggleInput } from './app/input';
import { editNote } from './app/edit';
import { toggleDoneNotes } from './app/task';
import { removeItem } from './app/remove';
import { changeColor } from './app/color';
import { taskCompleted } from './app/task';
import { undoCompleted } from './app/task';
import { filterNotes } from './app/filter-notes';
import { activeCategory } from './app/categories'
import { deleteCategory } from './app/categories';
import './scss/main.scss';

(function IIFE() {
	displayCategories()
	updateStatus();
	displayActiveStatus();
})();

noteSection.addEventListener('click', (e) => {
	if (e.target.classList.contains('fa-trash-alt')) removeItem(e); // remove note
	else if (e.target.classList.contains('fa-circle')) changeColor(e); // change color
	else if (e.target.parentNode.classList.contains('done') && e.target.classList.contains('fa-check-circle')) { // task complete
		taskCompleted(e);
	} else if (e.target.parentNode.classList.contains('done') && e.target.classList.contains('fa-undo-alt')) { // undo completed task	
		undoCompleted(e);
	} else if (e.target.parentNode.parentNode.classList.contains('dropdown')) changeCategory(e.target); // change category by dropdown
})
categoryFilter.addEventListener('click', (e) => {
	if (e.target.tagName == 'SPAN') { // activate new category
		noteSection.innerHTML = '';
		filterNotes(e.target.textContent);
		activeCategory(e.target.textContent);
	} else if (e.target.classList.contains('fa-plus-circle')) { // add new category
		newCategoryByMenu();
	} else if (e.target.classList.contains('delete-category')) { // delete category
		deleteCategory(e.target.parentNode);
	}
})
button.addEventListener('click', createNewObject, false);
noteSection.addEventListener('keydown', (e) => { // add new category through dropdown
	let dropdownInput = noteSection.querySelectorAll('.dropdown-add-category'); // more than one class

	if (e.key === 'Enter') {
		for (let elem of dropdownInput) {
			if (elem.value.length > 0) {
				changeCategory(elem)
				addNewCategory(elem.value);
				elem.value = '';
			}
		}
	}
})
categoryFilter.addEventListener('keydown', (e) => { // add new category in menu by enter
	if (e.key === 'Enter') {
		newCategoryByMenu()
	}
})
inputVal.addEventListener('keydown', (e) => keyEvents(e)); // add note
inputVal.addEventListener('click', (e) => toggleInput()); // open input
window.addEventListener('click', () => toggleInput()); // close input when clicking outside of it
noteSection.addEventListener('input', (e) => editNote(e)); // edit note text content
status.addEventListener('click', (e) => {
	toggleDoneNotes(e.target)
});