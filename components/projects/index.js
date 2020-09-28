import React, { useEffect } from 'react';
import { MarkdownContent } from '../projects/Content';
import {
	ProjectHeader,
	ProjectShell,
} from '../projects/common';


// const filterMedia = (sketch, type) => (sketch.media.filter((media) => media.type === type));

// {/* <figcaption className="text-gray-800 text-center pt-8 text-base">{`Fig.${idx+1} - ${name}`}</figcaption> */ }

const Project = ({ project }) => {
	useEffect(() => {
		window.scroll(0.0, 0.0);
	}, [ project.id ]);

	return (
		<ProjectShell>
			<ProjectHeader title={project.title} />
			<MarkdownContent {...project} base="projects" />
		</ProjectShell>
	);
};

export default Project;
