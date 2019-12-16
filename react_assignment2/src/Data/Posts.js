import React from 'react';
import Service from './Service';
import '../App.css';
import ErrorBoundary from './error/ErrorBoundary';
import { Link } from 'react-router-dom';
import {Accordion,AccordionTab} from 'primereact/accordion';
import {Button} from 'primereact/button';
export default class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
        this.Service = new Service();
        this.goBack = this.goBack.bind(this);
    }
    goBack(){
        if(this.props.history)
            return this.props.history.goBack();
    }
    componentDidMount(){
        this.Service.getPosts().then(data => {
            this.setState({
                posts : data
            });
        });
    }
    postHeader(){
        return(
            <div className = "list_of_posts nav navbar-default">
                <h1>Posts Of {this.props.location.state.name}</h1>
                <div className = "count_of_posts">
                    No of Posts : 
                    <span className = "badge">
                        {this.postLength()}
                    </span>
                </div>
            </div>
        );
    }
    postLength(){
        var postLength = this.state.posts.filter(post => (post.userId)===(this.props.location.state.id))
        return postLength.length;
    }
    postData(){
        const details = this.state.posts.map(post => 
            <li key = {post.id.toString()}>
                {this.posts(post)}
            </li>);
        return details;
    }
    posts(post){
        if(post.userId === this.props.location.state.id)      
            {
                return(
                        <>   
                            <Accordion multiple={true}>
                                <AccordionTab header =  {post.title}>
                                    <div className = "post_details nav navbar-default">
                                        {post.body}
                                        <div className = "links">
                                            {this.commentLink(post)}
                                        </div>
                                    </div>
                                </AccordionTab>
                            </Accordion><br/>
                        </>
                    );
            }
    }
    commentLink(post){
        return(
            <>
                <ErrorBoundary>
                    <Link to = {{
                        pathname : "/comments",
                        state : {
                            id : post.id,
                            name : this.props.location.state.name
                        }
                    }}>
                        View Comments
                    </Link>
                </ErrorBoundary>
            </>
        );
    }
    render(){
        return (
            <>
                <div className = "posts nav navbar-default">
                    <ErrorBoundary>
                        {this.postHeader()}
                        {this.postData()}
                    </ErrorBoundary>
                    <Button label="Back" className="p-button-raised p-button-rounded" onClick = {this.goBack}/>
                </div>
            </>
        );
    }
}