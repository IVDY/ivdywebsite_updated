import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ImageItem(props) {
    const { src, alt, title, locale = "", localPath = "" } = props
    return (
        <React.Fragment>
            <Image
                src={src}
                alt={alt}
                width={25}
                height={25}
            />
            <Link href={localPath} locale={locale}>
                <p className="language-title"> {title} </p>
            </Link>
        </React.Fragment>

    )
}