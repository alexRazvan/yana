export class ListItem {
	constructor(text, category, id, status, color = '#118AB2') {
		this._text = text;
		this._category = category;
		this._id = id;
		this._color = color;
		this._status = status;
	}
	get text() {
		return this._text;
	}
	set text(newText) {
		this._text = newText;
	}
	get status() {
		return this._status;
	}
	set status(newStatus) {
		this._status = newStatus;
	}

	get category() {
		return this._category;
	}
	set category(newCategory) {
		this._category = newCategory;
	}
	get color() {
		return `linear-gradient(33deg, transparent 0%, rgba(255,255,255, 0.1) 30%, transparent 60%), ${this._color}`;
	}
	set color(newColor) {
		this._color = `linear-gradient(33deg, transparent 0%, rgba(255,255,255, 0.1) 30%, transparent 60%), ${newColor}`;
	}
}