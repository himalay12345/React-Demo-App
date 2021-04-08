import React from 'react';
import '../ShowSeason.css'
import ImageCard from './ImageCard';


const ImageGallery = (props) => {
    
    const images = props.images.map((image) => {
        return(<ImageCard key={image.id} image={image}/>)
    })
    return (
        <div className="image-list" style={{padding:'20px 50px'}}>{images}</div>
    )
}

export default ImageGallery