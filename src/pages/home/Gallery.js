import React, { useState } from 'react';
import { ActiveLink } from '../../components/ActiveLink';

const Gallery = () => {
	return (
		<div className="m-2">
			<div className="flex ">
				<ActiveLink href="/dashed-figures">Dashed Figures</ActiveLink>
			</div>
		</div>
	);
};

export default Gallery;
