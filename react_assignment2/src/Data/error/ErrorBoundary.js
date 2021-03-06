import React from 'react';
import '../../App.css';
export default class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError : false
        };
    }
    componentDidCatch(error){
        this.setState({
            hasError : true
        });
    }
    render(){
        if(this.state.hasError){
            return(
                <h1>Unable to load the content....</h1>
            );
        }
        return this.props.children;
    }
}