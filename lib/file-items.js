import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { parseISO, compareDesc } from 'date-fns';
import remark from 'remark';
import html from 'remark-html';

export function getItems(dir) {
	const ids = getItemsIds(dir);

	return ids.map((id) => getItemById(id, dir)).sort((a, b) => {
		return compareDesc(parseISO(a.date), parseISO(b.date));
	});
}

export function getItemsIds(dir) {
	return fs.readdirSync(dir)
		.filter((filename) => path.extname(filename) == '.md')
		.map((filename) => filename.replace('.md', ''));

}

export function getItemById(id, dir) {
	const project = fs.readFileSync(path.join(dir, `${id}.md`), { encoding: 'utf8' });
	const { data, content } = matter(project);

	const htmlContent = remark().use(html).processSync(content);

	return { ...data, id, content: htmlContent.toString() };
}
