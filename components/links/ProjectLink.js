import Link from 'next/link';

export const ProjectLink = ({ children, id, base }) => (
	<Link href={`/${base}/[id]`} as={`/${base}/${id}`}>
		<a>{children}</a>
	</Link>
);
