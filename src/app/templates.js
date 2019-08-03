import { printDropdown } from './categories';

//note
export const note = (item) =>
	`<span class="done"><i class="fas fa-check-circle checkmark"></i></span>
	 <div contenteditable="true" class="note-body">${item.text}</div>
	 <div class="icons">
		<div class="color-picker">
		<button class="color-palette"><i class="fas fa-palette"></i></button>
	 		<span class="colors">
	 			<i class="fas fa-circle red"></i><i class="fas fa-circle green"></i><i class="fas fa-circle blue"></i><i class="fas fa-circle orange"></i><i class="fas fa-circle purple"></i>
	 		</span>
	 	</div>
	 	<i class="far fa-trash-alt trash"></i>
	 	<span class="noteID">${item._id}</span>
	 	<div class="dropdown">
	 		${printDropdown(item.category)}
	 	</div>
	 </div>`;


// input section categories
export const addCategory = () =>
	`<div class="menu-add-new-category-section">
		<input type="text" placeholder="Add new" class="menu-add-category-input">
		<i class="fas fa-plus-circle"></i>
	</div>`;

export const categoryAll = () => `<li><span class='active'>All</span></li>`;

export const eachCategory = (cat) => `<li><span class=''>${cat}</span><i class="far fa-times-circle delete-category"></i></li>`


//dropdown
export const newDDcateogory = (cat) => `<li value="${cat}" onclick="return false;">${cat}</li>`;
export const wholeDropdown = (current, ddcat) =>
	`<button class="dropdown-btn" value="${current}">${current} <i class="fas fa-chevron-down"></i></button>
		<ul class="dropdown-content">
			${ddcat}
			<li><input type="text" placeholder="Add new" class="dropdown-add-category"></li>
		</ul>`;


//status
export const statusMarkup = (todo, done) =>
	`<p class="to-do-link">${todo}</p>
	<p class="done-link">${done}</p>`;