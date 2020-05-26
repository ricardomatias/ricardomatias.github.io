import React, { useState } from 'react';
import { ActiveLink } from '../../components/ActiveLink';

const Gallery = () => {
	return (
		<div className="m-2">
			<div className="flex ">
				<ActiveLink href="/sketch/dashed-figures">Dashed Figures</ActiveLink>
				<ActiveLink href="/sketch/broken-glass">Broken Glass</ActiveLink>
			</div>
		</div>
	);
};

export default Gallery;
