import { inputVal, inputArea, categoryFilter } from "./selectors";
import { getActiveStatus } from "./status";

export function toggleInput() {
	let toggleComponents = [inputVal, inputArea];
	let categoryName = categoryFilter.querySelector('.menu-add-category-input'); //disable add new category
	categoryName.disabled = false;
	categoryName.classList.remove('inactive-input');
	for (let component of toggleComponents) {
		component.classList.add('input-active');
		component.classList.remove('inactive-input');
	}
	inputVal.disabled = false;

	if (getActiveStatus() === 'done-link') {
		inputVal.classList.add('inactive-input');
		inputArea.classList.remove('input-active');
		inputVal.disabled = true;
		categoryName.disabled = true;
		categoryName.classList.add('inactive-input');

	} else if (inputVal !== document.activeElement && inputVal.classList.contains('input-active')) {
		toggleComponents.map(elem => {
			elem.classList.remove('input-active')
		});
	} else if (inputVal === document.activeElement && !inputVal.classList.contains('input-active')) {
		toggleComponents.map(elem => {
			elem.classList.add('input-active')
		});
	}
}