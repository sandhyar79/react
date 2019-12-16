import React from 'react';
import Service from './Service';
import '../App.css';
import { Button } from 'primereact/button';
// import {Panel} from 'primereact/panel';
import { Accordion, AccordionTab } from 'primereact/accordion';
import ErrorBoundary from './error/ErrorBoundary';
export default class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
        this.Service = new Service();
        this.goBack = this.goBack.bind(this);
    }
    componentDidMount() {
        this.Service.getComments().then(data => {
            this.setState({
                comments: data
            });
        });
    }
    goBack() {
        if (this.props.history)
            return this.props.history.goBack();
    }
    commentsLength(){
        var commentsLength = this.state.comments.filter((comment) => ((comment.postId)===(this.props.location.state.id)));
        return commentsLength.length;
    }
    comments() {
        const comment = this.state.comments.map(comment =>
                <li key={comment.id.toString()}>
                    {this.commentData(comment)}
                </li>
            );
        return comment;
    }
    commentData(comment) {
        if (comment.postId === this.props.location.state.id)
            return (
                <>
                    {/* <Panel header = {this.from(comment)}>
                                        {this.body(comment)}    
                        </Panel>
                        <br/> */}
                    <Accordion multiple={true}>
                        <AccordionTab header  = {this.commentsFrom(comment)}>
                            <div className = "comment_details">
                                {this.commentsBody(comment)}
                            </div>
                        </AccordionTab>
                    </Accordion><br />
                </>
        );
    }
    commentsFrom(comment) {
        return (
            <> 
                <div className = "comments_header">
                    From :   {comment.name} &nbsp;
                    Email : {comment.email}
                </div>
            </>
        );
    }
    commentsBody(comment) {
        return (
            <div className = "comments_body nav navbar-default">
                {comment.body}
            </div>
        );
    }
    render() {
        return (
            <>
                <ErrorBoundary>
                    <div className="comments nav navbar-default">
                        <h1>Comments of  {this.props.location.state.name}</h1>
                        <div className = "count_of_comments">
                            No of Comments : 
                            <span className = "badge">
                                {this.commentsLength()}
                            </span>
                        </div>
                        {this.comments()}
                        <Button label="Back"
                            className="p-button-raised p-button-rounded"
                            onClick={this.goBack}
                        />
                    </div>
                </ErrorBoundary>
            </>
        );
    }
}