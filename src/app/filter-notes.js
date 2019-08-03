import { listArr } from './initialization';
import { printHtml } from './print-html';

export function filterNotes(byCategory) {
	if (byCategory == 'All') {
		for (let e of listArr) {
			printHtml(e);
		}
	} else {
		listArr.filter(e => {
			if (e.category == byCategory) {
				printHtml(e);
			}
		})
	}
}