import React, { Component } from 'react'
import axios from 'axios';
export default class Activities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: []
        }
    }
    componentDidMount() {
        axios.get('https://panorbit.in/api/activity.json')
            .then(response => response.data)
            .then(data => this.setState({
                activities: data.recentActivity
            }));
    }
    userActivities() {
        const userActivity = this.state.activities.map(activity =>
            <tr key={activity.id.toString()}>
                {this.userActivityList(activity)}
            </tr>
        );
        return <>{userActivity}</>;
    }
    userActivityList(activities) {
        if (this.props.data.location.id === activities.userId) {
            return <>{this.userActivityItems(activities)}</>;
        }
    }
    userActivityItems(activities) {
        return (
            <div className="card card-body my-3 mx-3 shadow" style = {{width : "100%"},{height : "100%"}}>
                <div>
                    <img src={activities.profilePicture}
                        alt="" className="profile_image">
                    </img>
                    <span style={{ align: "right" }}>{activities.time}</span>
                    <p>{activities.activity}</p>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="card card-body shadow">
                {this.userActivities()}
            </div>
        );
    }
}
