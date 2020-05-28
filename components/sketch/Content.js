import styles from './sketch.module.css';

export const Content = (props) => (
    <div className="w-full p-8 bg-white sm:py-12 text-gray-800">
        <div className="container flex md:w-2/3 mx-auto flex-col">
            <div className={styles['sketch-content']} dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
    </div>
);
