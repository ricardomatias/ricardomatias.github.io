import React from 'react';
import { assetLink } from '../../lib/links';

const getBannerPath = (sketch, id) => {
    const banner = sketch.media.filter((media) => media.id === id)[0].path;

    return assetLink(sketch, banner);
};

export const Banner = ({ sketch }) => (
    <div className="w-full mb-24" style={{ backgroundColor: sketch.banner.color }}>
        <div className="mx-auto md:h-64 h-48 overflow-hidden " style={{
            backgroundImage: `url(${getBannerPath(sketch, sketch.banner.id)})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundPositionY: '40%',
            backgroundSize: 'cover',
        }} />
    </div>
);
