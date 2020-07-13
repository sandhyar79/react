import React, { Component } from 'react'
import Albums from './Albums'
const Gallery = (props) => {
    return (
        <div className="albums">
            <Albums data={props} />
        </div>
    );
}
export default Gallery;
