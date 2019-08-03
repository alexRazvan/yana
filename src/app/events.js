import { createNewObject } from './app';

export function keyEvents(key) {
	if (key.key == 'Enter') createNewObject();
}

