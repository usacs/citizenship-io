import React, { Component } from 'react';

class Test extends Component {
    state = {
        count: 7
    };

    render() {
        return (
            <React.Fragment>
                <span>{this.state.count}</span>
                <button>Incerment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const{ count } = this.state;
        const exp1 = "Zero";
        return count === 0 ? exp1: count;
    }
}

export default Profile;