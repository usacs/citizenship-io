import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { relative } from 'path';

class ProfilePicture extends Component {
    
    state = { 
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTacVAwrgMxj_hDQmA0ns1sfH3Wp77__AQHLX8gVRfv663_q4bf",
        active: false
    }

    handleMouseOver = () => {
        this.setState({active: true})
    }

    handleMouseLeave = () => {
        this.setState({active: false})
    }

    imgContainerStyle = {
        border: "5px solid red",
        position: "relative",
        width: "fit-content",
        borderRadius: "20%",
        overflow: "hidden"
    }

    bannerStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "0"
    }

    bannerTextStyle = {
        color: "white",
        textAlign: "center",
        width: "100%",
        display: "block",
        padding: "10px"
    }

    render() { 
        return ( 
            <div style={ this.imgContainerStyle } onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                <img src={ this.state.imageUrl } />
                {this.state.active && <div style={{position: "absolute", top: "0", left: "0", right: "0", bottom: "0"}}>
                    <div style={ this.bannerStyle }>
                        <div style={{textAlign: "center"}}><FontAwesomeIcon icon="camera" color="white" /></div>
                        <span style={ this.bannerTextStyle }>Update</span>
                    </div>
                </div>}
            </div>
        );
    }
}
 
export default ProfilePicture;