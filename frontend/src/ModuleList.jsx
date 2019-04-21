import React, { Component } from "react";
import Collapsible from 'react-collapsible';
import {module_list} from './modules'
import Module from './Module'
export default class ModuleList extends Component {
    modules = []
    constructor(props){
        super(props)
    }
 
    handleOnClickQuiz = evt =>{
        console.log(evt.target)
    }
    loadModules(){
        for(let i=0;i<module_list.length;i++){
            this.modules.push(
                <Module slide={module_list[i]} moduleid={"module"+(i+1)} modulename={"Module "+(i+1)} />
            );
        }
    }
    
    render() {
        this.loadModules()
      return (
        <div>
            hello
          {this.modules}
        </div>
      );
    }
  }