import { createStore } from 'easy-peasy';
import model from './model';
import sketches from '../assets/projects/sketches.json';

const store = createStore(model, {
	initialState: {
		sketches: sketches
	}
});

export default store;
