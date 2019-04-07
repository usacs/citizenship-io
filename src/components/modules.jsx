import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import Module from './module';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilterModules from './filterModule';

class Modules extends Component {
    state = {
        filterMode: "Filter",
        moduleList: [
            {id: 1, progress: 100},
            {id: 2, progress: 100},
            {id: 3, progress: 100},
            {id: 4, progress: 65},
            {id: 5, progress: 0},
            {id: 6, progress: 0},
            {id: 7, progress: 0},
            {id: 8, progress: 0}
        ]
    }

    moduleListStyle = {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        justifyContent: "center"
    }

    handleFilter = () => {
        this.setState({filterMode: "Filter"})
    }

    handleAll = () => {
        this.setState({filterMode: "All Modules"})
    }

    handleCompleted = () => {
        this.setState({filterMode: "Completed"})
    }

    handleCurrent = () => {
        this.setState({filterMode: "In Progress"})
    }

    handleNotStarted = () => {
        this.setState({filterMode: "Not Started"})
    }

    render() { 
        return (
            <Card style={{width: "60%"}}>
                <CardHeader style={{textAlign: "center"}}>
                    <FontAwesomeIcon icon="book" style={{marginRight: "10px"}}/>
                    Modules
                </CardHeader>
                <CardBody>
                    <div style={{position: "relative", textAlign: "right", paddingRight: "20px"}}>
                        {<FilterModules onFilter={this.handleFilter} onAll={this.handleAll} onCompleted={this.handleCompleted} 
                        onCurrent={this.handleCurrent} onNotStarted={this.handleNotStarted} mode={this.state.filterMode} />}
                    </div>
                    <div style={this.moduleListStyle}>
                        {this.state.moduleList.map(module => 
                        <Module key={module.id} progress={module.progress} id={module.id}/>)}
                    </div>
                </CardBody>
            </Card> 
        );
    }
}
 
export default Modules;