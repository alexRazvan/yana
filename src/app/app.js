import { getActiveCategory } from './categories';
import { inputVal } from './selectors';
import { ListItem } from './list-item';
import { listArr } from './initialization';
import { printHtml } from './print-html';
import { toggleInput } from './input';

export let noteID = 0;

export const createNewObject = function () {
	noteID++;
	let category = (getActiveCategory() === 'All') ? 'uncategorized' : getActiveCategory();

	if (inputVal.value) {
		let newListObj = new ListItem(inputVal.value, category, noteID, 'active');
		listArr.push(newListObj);

		printHtml(listArr[listArr.length - 1]);
		toggleInput();
	}
}
