/* eslint-disable no-case-declarations */
import React, { Fragment } from 'react';
import unified from 'unified';
import parse from 'rehype-parse';
import remark2rehype from 'remark-rehype';
import format from 'rehype-format';
import rehypeHtml from 'rehype-raw';
import styles from './project.module.css';
import { assetLink } from '../../lib/links';
import rehype2react from 'rehype-react';

export const MarkdownImage = ({ base, id, media }) => {
	const path = assetLink(base, id, media.path);

	return (
		<img className="max-h-full h-auto mx-auto w-full md:w-auto rounded-lg" alt={media.id} src={path} srcSet={path}></img>
	);
};

export const MarkdownContent = ({ content, media, base, id: projectId, ...props }) => {
	// const reactContent = unified()
	// 	.use(parse)
	// 	.use(remark2rehype, { allowDangerousHtml: true })

	// 	.processSync(htmlContent).result;

	const reactContent = unified()
		.use(parse, { fragment: true })
		.use(rehype2react, {
			createElement: (component = 'div', props, children) => {
				console.log(component, props);
				let Tag = component || 'div';

				switch (Tag) {
				case 'img':
					const image = media.find((el) => el.id === props.src);

					return <MarkdownImage base={base} id={projectId} media={image} key={props.key}>{children}</MarkdownImage>;
				}

				return <Tag {...props}>{children}</Tag>;
			}
		})
		.processSync(content);


	return (
		<div className="w-full p-8 bg-white sm:py-12 text-gray-800">
			<div className="container my-20 flex md:w-2/3 mx-auto flex-col">
				{/* <div className={styles['markdown-content']} dangerouslySetInnerHTML={{ __html: content }}>
				</div> */}
				<div className={styles['markdown-content']}>
					{reactContent.result}
				</div>
			</div>
		</div>
	);
};
