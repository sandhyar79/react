import React from 'react';
import '../App.css';
import react_router from '../images/react_router.png'
import ErrorBoundary from '.././Data/HandleError/ErrorBoundary';
export default function Home (){
    return(
        <>
            <ErrorBoundary>
                <img src = {react_router}  alt = "React Router" height = "100%" width = "100%"/>
            </ErrorBoundary>
        </>
    );
}