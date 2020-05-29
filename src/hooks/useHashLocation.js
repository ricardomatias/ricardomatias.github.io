import { useState, useEffect, useCallback } from 'react';

// returns the current hash location in a normalized form
// (excluding the leading '#' symbol)
const currentLocation = () => {
	return window.location.hash.replace(/^#/, '') || '/';
};

export const useHashLocation = () => {
	const [ loc, setLoc ] = useState(currentLocation());

	useEffect(() => {
		// this function is called whenever the hash changes
		const handler = () => setLoc(currentLocation());

		// subscribe to hash changes
		window.addEventListener('hashchange', handler);
		return () => window.removeEventListener('hashchange', handler);
	}, [ loc ]);

	// remember to wrap your function with `useCallback` hook
	// a tiny but important optimization
	const navigate = useCallback(to => (window.location.hash = to), []);

	return [ loc, navigate ];
};
