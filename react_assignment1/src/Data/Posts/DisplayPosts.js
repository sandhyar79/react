import React from 'react';
export default function DisplayPosts(props) {
    const value = props.location;
    if (value) {
        return <h3>{value.name}</h3>;
    }
    return <h3>Posts of Users...</h3>;
}