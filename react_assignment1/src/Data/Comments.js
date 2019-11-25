import React from 'react';
import '../App.css';
import ServiceReq from '../Services/ServiceReq';
import ErrorBoundary from './HandleError/ErrorBoundary';
export default class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
        this.goPreviousEvent = this.goPreviousEvent.bind(this);
        this.ServiceReq = new ServiceReq({ ...props });
    }
    goPreviousEvent() {
        if (this.props.history) {
            return this.props.history.goBack();
        }
    }
    // componentDidMount() {
    //     const id = this.props.location.id;
    //     const url = "https://jsonplaceholder.typicode.com/comments?postId=" + id;
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(comment => {
    //             this.setState({
    //                 comments: comment
    //             });
    //         });
    // }
    componentDidMount() {
        this.ServiceReq.then(comment => {
            this.setState({
                comments: comment
            });
        });
    }
    tableHeader() {
        return (
            <thead>
                <tr>
                    <td>
                        <div className="table-header">
                            <h3>
                                Comments Of {this.props.location.name}
                            </h3>
                            <div align="right">
                                Total :
                                <span className="badge">
                                    {this.state.comments.length}
                                </span>
                            </div>
                        </div>
                    </td>
                </tr>
            </thead>
        );
    }
    userComments() {
        const comment = this.state.comments.map(comment =>
            <tr key={comment.id.toString()}>
                {this.userBody(comment)}
            </tr>
        );
        return <tbody>{comment}</tbody>;
    }
    userBody(comment) {
        return (
            <td>
                <div className="comments-name">
                    <b>From : </b> {comment.name},
                    &nbsp;
                    <b>Email : </b>{comment.email}
                </div>
                <br />
                <ul>
                    <li>{comment.body}</li>
                </ul>
            </td>
        );
    }
    tableFooter() {
        return (
            <tfoot>
                <tr>
                    <td>
                        <button type="button" className="btn" onClick={this.goPreviousEvent}>
                            Back
                        </button>
                    </td>
                </tr>
            </tfoot>
        );
    }
    render() {
        return (
            <>
                <table className="table-striped table-hover">
                    <ErrorBoundary>
                        {this.tableHeader()}
                        {this.userComments()}
                        {this.tableFooter()}
                    </ErrorBoundary>
                </table>
            </>
        );
    }
}