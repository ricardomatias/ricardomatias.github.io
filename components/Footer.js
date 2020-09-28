import styles from './footer.module.css';
import clsx from 'clsx';
import { useHover } from '../hooks/useHover';


const SocialIcon = ({ src, alt, link }) => {
	const [ hoverRef, isHovered ] = useHover();

	return (
		<li className="block" ref={hoverRef}>
			<a href={link} rel="noopener noreferrer external" target="_blank">
				<img src={src} srset={src} alt={alt} className={clsx(isHovered && styles['jello-horizontal'], 'inline-block w-8', styles['scale-up'])} />
			</a>
		</li>
	);
};

export const Footer = (props) => (
	<section className="w-full bg-black mt-20 mx-auto pt-8 px-4 pb-2 md:px-10">
		<div className="w-48 mx-auto mb-12">
			<ul className="flex-row flex justify-between items-center">
				<SocialIcon src="/icon-github-1.svg" link="https://github.com/ricardomatias/" alt="Github" />
				<SocialIcon src="/icon-twitter.svg" link="https://twitter.com/ricardomatiaspt" alt="Twitter" />
				<SocialIcon src="/icon-insta.svg" link="https://www.instagram.com/ricardomatiaspt/" alt="Instagram" />
			</ul>
		</div>
		<div>
			<p className=" text-right font-title font-medium tracking-widest text-xs">©2020 RICARDO MATIAS</p>
		</div>
	</section>
);
