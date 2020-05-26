import { computed } from 'easy-peasy';
import { sketchesModel } from './sketches';

const storeModel = {
	sketches: sketchesModel,
	sketchById: computed(state => id => state.sketches.find(sketch => sketch.id === id))
};

export default storeModel;
