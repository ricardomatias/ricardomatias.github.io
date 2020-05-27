import React, { useState, useEffect } from 'react';
import { useStoreState } from 'easy-peasy';
import { useTransition, a } from 'react-spring';

import { ActiveLink } from '../../components/ActiveLink';
import useMedia from '../../hooks/useMedia';
import useMeasure from '../../hooks/useMeasure';

const Gallery = () => {
	return (
		<div className="m-2">
			<div className="flex ">
				<ActiveLink href="/sketch/dashed-figures">Dashed Figures</ActiveLink>
				<ActiveLink href="/sketch/broken-glass">Broken Glass</ActiveLink>
			</div>
		</div>
	);
};


function MasonryGallery() {
	const sketches = useStoreState(state => state.sketches);

	// Hook1: Tie media queries to the number of columns
	const columns = useMedia([ '(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)' ], [ 5, 4, 3 ], 2);
	// Hook2: Measure the width of the container element
	const [ bind, { width } ] = useMeasure();
	// Hook3: Hold items
	const [ items, set ] = useState(sketches);
	// Hook4: shuffle data every 2 seconds
	// Form a grid of stacked items using width & columns we got from hooks 1 & 2
	let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
	let gridItems = items.map((child, i) => {
		// Basic masonry-grid placing, puts tile into the smallest column using Math.min
		const column = heights.indexOf(Math.min(...heights));
		const childHeight = 400.0;

		// X = container width / number of columns * column index, Y = it's just the height of the current column
		const xy = [ (width / columns) * column, (heights[column] += childHeight / 2) - childHeight / 2 ];
		return { ...child, xy, width: width / columns, height: childHeight / 2 };
	});
	// Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
	const transitions = useTransition(gridItems, item => item, {
		from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
		enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
		update: ({ xy, width, height }) => ({ xy, width, height }),
		leave: { height: 0, opacity: 0 },
		config: { mass: 5, tension: 500, friction: 100 },
		trail: 25
	});
	// Render the grid
	return (
		<div {...bind} className="list" style={{ height: Math.max(...heights) }}>
			{transitions.map(({ item, props: { xy, ...rest }, key }) => (
				<a.div key={key} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
					<div style={{ backgroundImage: item.css }} />
				</a.div>
			))}
		</div>
	);
}

export default Gallery;
