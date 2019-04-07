import React, { Component } from 'react';

class Module extends Component {
    state = {
        progress: this.props.progress,
        moduleID: this.props.id
    }

    moduleContainerStyle = {
        display: "flex",
        position: "relative",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        border: "5px solid red",
        borderRadius: "10px",
        padding: "10px"
    }

    progressBarStyle = {
        backgroundColor: "rgba(255, 192, 203, 0.5)",
        position: "absolute",
        left: "0",
        top: "0",
        bottom: "0",
        width: String(this.state.progress) + "%"
    }

    render() { 
        return (
            <div style={{position: "relative", padding: "20px"}}>
                <div style={ this.moduleContainerStyle }>
                    <span>{"Module " + String(this.state.moduleID)}</span>
                    <div style={{position: "absolute", top: "0", left: "0", right: "0", bottom: "0"}}>
                        <div style={this.progressBarStyle} />
                    </div>
                </div>
                <div style={{textAlign: "center", position: "absolute", left: "0", right: "0", bottom: "10"}}>
                    <span>{this.formatPercentage()}</span>
                </div>
            </div>
        );
    }

    formatPercentage(){
        const{ progress } = this.state;
        const moduleCompleted = "Module Completed";
        const moduleNotStarted = "Not Started";
        return progress === 100 ? moduleCompleted : progress === 0 ? moduleNotStarted : String(progress) + "% Completed";
    }
}
 
export default Module;