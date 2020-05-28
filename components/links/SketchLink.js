import Link from 'next/link';

export const SketchLink = ({ children, id }) => (
    <Link href="/sketches/[id]" as={`/sketches/${id}`}>
        <a>{children}</a>
    </Link>
);
