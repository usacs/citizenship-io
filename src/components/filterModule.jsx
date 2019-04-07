import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FilterModules extends Component {
    state = { 
        dropdownOpen: false,
        selectedMode: this.props.mode
    }

    toggle = () => {
        this.setState(prevState => ({dropdownOpen: !prevState.dropdownOpen}));
    }
    
    render() { 
        return ( 
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    <FontAwesomeIcon icon="filter" style={{marginRight: "10px"}} />
                    <span>{this.state.selectedMode}</span>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Select Modules</DropdownItem>
                    <DropdownItem onClick={this.props.onFilter}></DropdownItem>
                    <DropdownItem onClick={this.props.onAll}>All Modules</DropdownItem>
                    <DropdownItem onClick={this.props.onCompleted}>Completed</DropdownItem>
                    <DropdownItem onClick={this.props.onCurrent}>In Progress</DropdownItem>
                    <DropdownItem onClick={this.props.onNotStarted}>Not Started</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}
 
export default FilterModules;