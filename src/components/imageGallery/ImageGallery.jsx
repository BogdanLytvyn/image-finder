import React from 'react'

export default function ImageGallery({items}) {
    return (
        <ul className="ImageGallery">
            {items.map(item => 
                (<ImageGalleryIte />
                    ))}
    </ul>
    )
}
