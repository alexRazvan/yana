import { noteSection, status } from './selectors';
import { doneArr, listArr } from './initialization';
import { getActiveCategory } from './categories';
import { statusMarkup } from './templates';

export function displayActiveStatus() {
	if (noteSection.querySelector('.done-note')) {
		setActiveStatus(['done-link']);
	} else {
		setActiveStatus(['to-do-link']);
	}
}

export function setActiveStatus(linkClass) {
	let statuses = status.querySelectorAll('P');
	if (linkClass[0] === 'to-do-link') {
		statuses[0].classList.add('active-status');
		statuses[1].classList.remove('active-status');
	} else {
		statuses[1].classList.add('active-status');
		statuses[0].classList.remove('active-status');
	}

	getActiveStatus()
}

export function getActiveStatus() {
	let statuses = status.querySelectorAll('P');

	for (let status of statuses) {
		if (status.classList.contains('active-status')) return status.classList[0];
	}
}

export const updateStatus = _ => {
	if (getActiveCategory() === 'All') {
		status.innerHTML = statusMarkup(listArr.length, doneArr.length);
	} else {
		let done = 0;
		let toDo = 0;

		doneArr.map(e => {
			if (e.status === 'complete' && e.category === getActiveCategory()) done++;
		})
		listArr.map(e => {
			if (e.category === getActiveCategory()) toDo++;
		})

		status.innerHTML = statusMarkup(toDo, done);
	}
}