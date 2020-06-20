import React,{Component} from 'react';
import './sideBar.css';

class sideBar extends Component {
constructor(props){
    super(props);
}

    render(){
        return(
            <div className='sidebar'>
                SideBar
                console.log('Inside SideBar');
            </div>
        );
    }
}
export default sideBar;