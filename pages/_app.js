import { useRouter } from 'next/router';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
	const router = useRouter();

	const spring = {
		type: 'spring',
		damping: 20,
		stiffness: 100,
		when: 'afterChildren'
	};

	return (
		<AnimatePresence>
			<div className="page-transition-wrapper">
				<motion.div
					transition={spring}
					key={router.pathname}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					id="page-transition-container"
				>
					<Component {...pageProps} key={router.pathname} />
				</motion.div>
			</div>
		</AnimatePresence>
	);
};

export default App;
