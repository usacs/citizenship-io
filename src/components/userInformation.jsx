import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, CardHeader, CardLink, CardGroup } from 'reactstrap';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Information extends Component {

    state = {
        numDependents: 0,
        numYears: 0
    };

    cardStyle = {
        width: "23%",
    }

    render(){
        return(
            <div>
                <Card style={this.cardStyle}>
                    <CardHeader tag="h5" className="text-center">
                        <FontAwesomeIcon icon="user" style={{marginRight: "10px"}}/>
                        Celica Lima
                    </CardHeader>
                    <CardBody>
                        <tr>
                            <td style={{padding: "5px"}}><FontAwesomeIcon icon="envelope" /></td>
                            <td><span>Email: {"example123@gmail.com"}</span></td>
                        </tr>
                        <tr>
                            <td style={{padding: "5px"}}><FontAwesomeIcon icon="graduation-cap" /></td>
                            <td><span>Education: {"Example School"}</span></td>
                        </tr>
                        <tr>
                            <td style={{padding: "5px"}}><FontAwesomeIcon icon="briefcase" /></td>
                            <td><span>Occupation: {"Example Job"}</span></td>
                        </tr>
                        <tr>
                            <td style={{padding: "5px"}}><FontAwesomeIcon icon="money-bill" /></td>
                            <td><span>Household Income: {"20000"}</span></td>
                        </tr>
                        <tr>
                            <td style={{padding: "5px"}}><FontAwesomeIcon icon="map-marker-alt" /></td>
                            <td><span>Location: {"Some Place"}</span></td>
                        </tr>
                        <tr>
                            <td style={{padding: "5px"}}><FontAwesomeIcon icon="calendar-alt" /></td>
                            <td><span>Years in US: {"3 years"}</span></td>
                        </tr>
                        <tr>
                            <td style={{padding: "5px"}}><FontAwesomeIcon icon="birthday-cake" /></td>
                            <td>Date of Birth: {"1/1/2011"}</td>
                        </tr>
                        <tr>
                            <td style={{padding: "5px"}}><FontAwesomeIcon icon="globe" /></td>
                            <td><span>Ethnicity: {"Zofian"}</span></td>
                        </tr>
                        <tr>
                            <td style={{padding: "5px"}}><FontAwesomeIcon icon="venus-mars" /></td>
                            <td><span>Gender: {"Female"}</span></td>
                        </tr>
                        <tr>
                            <td style={{padding: "5px"}}><FontAwesomeIcon icon="ring" /></td>
                            <td><span>Marital Status: {"Single"}</span></td>
                        </tr>
                        <tr>
                            <td style={{padding: "5px"}}><FontAwesomeIcon icon="baby" /></td>
                            <td><span>Dependents: {"None"}</span></td>
                        </tr>
                    </CardBody>
                </Card>
            </div>
        );
    }

    formatNumDependents(){
        const{ numDependents } = this.state;
        const zeroDependents = "None";
        return numDependents === 0 ? zeroDependents: numDependents;
    }

    formatNumYears(){
        const{ numYears } = this.state;
        const zeroYears = "None";
        return numYears === 0 ? zeroYears: numYears;
    }

}

export default Information