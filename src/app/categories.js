import { categoryFilter, noteSection } from './selectors';
import { updateStatus, displayActiveStatus } from './status';
import { categoriesList, listArr } from './initialization';
import { filterNotes } from './filter-notes';
import { addCategory, eachCategory, categoryAll, newDDcateogory, wholeDropdown } from './templates';

export function activeCategory(category) {
	let categoryNames = categoryFilter.querySelectorAll('SPAN');

	for (let tab of categoryNames) {
		if (category === tab.textContent) {
			tab.classList.add('active');
		} else if (tab.classList.contains('active')) {
			tab.classList.remove('active');
		}
	}

	updateStatus();
	displayActiveStatus();
}

export function getActiveCategory() {
	let categoryNames = categoryFilter.querySelectorAll('SPAN');

	for (let tab of categoryNames) {
		if (tab.classList.contains('active')) {
			return tab.textContent;

		}
	}
}

export function addNewCategory(categoryName) {
	categoriesList.push(categoryName);
	displayCategories(categoryName);
	noteSection.innerHTML = '';
	activeCategory(categoryName);
	filterNotes(categoryName);
}

export function displayCategories() {
	categoryFilter.innerHTML = categoryAll();

	for (let e of categoriesList) {
		categoryFilter.innerHTML += eachCategory(e);
	}
	categoryFilter.innerHTML += addCategory();
}

export function printDropdown(currentCategory) {
	let dropdownCategories = ``;

	for (let e of categoriesList) {
		if (e !== currentCategory) dropdownCategories += newDDcateogory(e);
	}
	let dropdown = wholeDropdown(currentCategory, dropdownCategories);

	return dropdown;
}

export function changeCategory(newCategory) { //dropdown
	let targetNoteID = newCategory.parentNode.parentNode.parentNode.parentNode.querySelector('.noteID').textContent;

	listArr.map(note => {
		if (note._id == targetNoteID) {
			(newCategory.textContent === '') ? note.category = newCategory.value : note.category = newCategory.textContent;
			noteSection.innerHTML = '';
			filterNotes(note.category);
			activeCategory(note.category);
		}
	})

	updateStatus();
	displayActiveStatus();
}

export function deleteCategory(li) {
	let categoryName = li.querySelector('span').textContent;

	listArr.map(e => {
		if (e.category === categoryName) e.category = 'Uncategorized'
	}); // reassign notes to default category

	for (let i in categoriesList) { // remove category from array
		if (categoriesList[i] === categoryName) categoriesList.splice(i, 1);
	}

	li.parentNode.removeChild(li); // remove from dom

	noteSection.innerHTML = '';
	activeCategory('All');
	filterNotes('All');
}

export const newCategoryByMenu = _ => {
	let categoryName = categoryFilter.querySelector('.menu-add-category-input');
	if (categoryName.value !== '') addNewCategory(categoryName.value);
	categoryName.value = ''
}