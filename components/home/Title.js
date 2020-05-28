import React, { useState, useEffect } from 'react';

const items = [ 'ricardo', 'matias' ];

const Header = () => {

	return (
		<div className="container  mb-4 md:pt-40 h-screen mx-auto relative flex flex-col z-50 content-between">
			<div className="flex flex-col flex-grow">
				<div className="header-title font-title text-gray-200 inline-block tracking-widest z-10">
					{items.map((word, index) => (
						<div
							key={word}
							className="trails-text">
							<h2 className={`${index == 1 ? 'md:ml-64 text-right md:text-left' : ''} md:text-7xl text-5xl`}>{word}</h2>
						</div>
					))}
				</div>
				<div className="header-title font-grot text-gray-200 tracking-widest pt-10 flex md:justify-start justify-center md:pt-40 sm:text-2xl md:text-4xl z-10">
					<div>CREATIVE DEVELOPER</div>
				</div>
			</div>
			<div className="flex justify-center text-xs italic">
				<p>SCROLL DOWN</p>
			</div>
		</div>
	);
};

export default Header;
