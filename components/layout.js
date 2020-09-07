import { Fragment } from 'react';
import Head from 'next/head';
import styles from './layout.module.css';
import { Footer } from './Footer';

export default function Layout({
	children,
	title = 'RICARDO MATIAS',
}) {
	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="description" content="Freelance Javascript Software Developer based in Berlin." />
				<meta name="author" content="Ricardo Matias" />
				<meta name="cf-2fa-verify" content="bc3597bed4824c5" />
				<link rel="canonical" href="https://ricardomatias.net/" />
				<link href="https://fonts.googleapis.com/css2?family=Sen:wght@300;400;500;600&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@300;400;500;600&display=swap" rel="stylesheet" />
				<link rel="shortcut icon" href="img/favicon.ico" />
			</Head>
			<div id={styles['outer-container']} className="h-full w-full text-gray-200 relative">
				{children}
				<Footer />
			</div>
		</Fragment>
	);
}
