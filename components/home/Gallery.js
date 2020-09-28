import React, { Fragment } from 'react';
import { useTransition, a } from 'react-spring';
import clsx from 'clsx';

import { useMeasure, useMedia, useHover } from '../../hooks';
import { ProjectLink } from '../links/ProjectLink';
import { thumbnailLink } from '../../lib/links';
import styles from './gallery.module.css';

const Gallery = ({ className, projects, title }) => {
	return (
		<div className={className}>
			<MasonryGallery projects={projects} title={title} />
		</div>
	);
};

const GalleryHeader = (props) => (
	<div className="flex sketch-header flex-col mb-20">
		<div className="mt-12">
			<h2 className="font-grot font-bold md:text-5xl lg:text-5xl text-3xl flex w-1/3 mx-auto justify-center">
				<span className="block text-center leading-none tracking-widest">{props.children.toUpperCase()}</span>
			</h2>
		</div>
	</div>
);


const GalleryThumbnail = ({ project, title, animProps: { xy, ...rest }}) => {
	const [ hoverRef, isHovered ] = useHover();

	const textClasses = 'font-title text-2xl text-center leading-none tracking-normal break-word';
	const thumbnailTitleClasses = clsx(isHovered && styles['tracking-in-expand'], !isHovered && styles['tracking-out-contract'], textClasses);

	return (
		<a.div
			style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}
			project={project}
			title={title}>
			<ProjectLink id={project.id} base={title.toLowerCase()}>
				<div ref={hoverRef} className={clsx(styles.thumbnail, 'flex flex-col justify-center relative items-center')} style={{
					backgroundImage: `url(${thumbnailLink(title.toLowerCase(), project)})`,
					// backgroundSize: 'cover',
				}}>
					<Fragment>
						<div className={clsx(styles.backdrop,'absolute w-full h-full')}></div>
						{
							project.title.split(' ').map((word) => (<p key={word} className={thumbnailTitleClasses}>{word}</p>))
						}
					</Fragment>
				</div>
			</ProjectLink>
		</a.div>
	);
};

function MasonryGallery({ projects, title }) {
	const padding = 15;

	// Hook1: Tie media queries to the number of columns
	const columns = useMedia([ '(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)' ], [ 5, 4, 3 ], 2);
	const size = useMedia([ '(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)' ], [ 200, 200, 150 ], 200);

	// Hook2: Measure the width of the container element
	const [ bind, { width } ] = useMeasure();
	// Hook3: Hold items
	// Hook4: shuffle data every 2 seconds
	// Form a grid of stacked items using width & columns we got from hooks 1 & 2
	let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
	const s = Math.min(width / columns, size);
	const margin = Math.max(width - (columns * s) - (padding * (columns + 1) * 2.0), 0.0) / (columns + 1);//;

	let gridItems = projects.map((child, i) => {
		// Basic masonry-grid placing, puts tile into the smallest column using Math.min
		const column = heights.indexOf(Math.min(...heights));

		// X = container width / number of columns * column index, Y = it's just the height of the current column
		const xy = [ (width / columns) * column + margin, (heights[column] += size) - size ];
		return { ...child, xy, width: s, height: s };
	});

	// Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
	const transitions = useTransition(gridItems, item => item.id, {
		from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
		enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
		update: ({ xy, width, height }) => ({ xy, width, height }),
		leave: { height: 0, opacity: 0 },
		config: { mass: 5, tension: 500, friction: 100 },
		trail: 25
	});

	// Render the grid
	return (
		<Fragment>
			<GalleryHeader>{title}</GalleryHeader>
			<div {...bind} className={styles.masonry} style={{ height: Math.max(...heights) }}>
				{transitions.map(({ item: project, props, key }) => (
					<GalleryThumbnail key={project.id} animProps={props} project={project} title={title}/>
				))}
			</div>
		</Fragment>
	);
}

export default Gallery;
