import { useRouter } from 'next/router';
import Link from 'next/link'

export function ActiveLink({ children, href}) {
	const router = useRouter();
	const style = {

	};

	const handleClick = (e) => {
		e.preventDefault();
		router.push(href);
	};

	return (
		<Link href={href} as={href}>
			<a className="link" onClick={handleClick} style={style}>
				{children}
			</a>
		</Link>
	);
}
