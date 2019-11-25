import React from 'react';
import '../../App.css';
import ServiceReq from '../../Services/ServiceReq';
import { Link } from "react-router-dom";
import ErrorBoundary from '../HandleError/ErrorBoundary';
export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.goPreviousEvent = this.goPreviousEvent.bind(this);
        this.ServiceReq = new ServiceReq({ ...props });
    }
    goPreviousEvent() {
        if (this.props.history)
            return this.props.history.goBack();
    }
    // componentDidMount() {
    //     const id = this.props.location.id;
    //     const url = "https://jsonplaceholder.typicode.com/posts?userId=" + id;
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(post => {
    //             this.setState({
    //                 posts: post
    //             });
    //         });
    // }
    componentDidMount() {
        this.ServiceReq.then(post => {
            this.setState({
                posts: post
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
                                Posts of {this.props.location.name}
                            </h3>
                            <div align="right">
                                Total :
                                <span className="badge" >
                                    {this.state.posts.length}
                                </span>
                            </div>
                        </div>
                    </td>
                </tr>
            </thead>
        );
    }
    userPosts() {
        const data = this.state.posts.map(post =>
            <tr key={post.id.toString()}>
                {this.userPostDetail(post)}
            </tr>
        );
        return <tbody>{data}</tbody>
    }
    userPostDetail(post) {
        return (
            <>
                <td>
                    <h4>{post.title}</h4>
                    <br />
                    <ul>
                        <li>
                            {post.body}
                        </li>
                    </ul>
                    <br />
                    <Link to={{
                        pathname: "/comments",
                        id: post.id,
                        name: this.props.location.name
                    }}>
                        <h5>View Comments</h5>
                    </Link>
                </td>
            </>
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
                        {this.userPosts()}
                        {this.tableFooter()}
                    </ErrorBoundary>
                </table>
            </>
        );
    }
}