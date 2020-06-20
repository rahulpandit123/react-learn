import React,{Component} from 'react';
import './header.css';

class header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className='header'>
            <div className='data'>
                User Data Captute;
                console.log("Inside Header");
            </div>
            </div>
        );
    }
}
export default header;
////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
// import header from './header';
// import sideBar from './sideBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Name: '',
      lastName: '',
      Age: '',
      email: '',
      phoneNumber: '',
      landlineNumber: ''

    }
    this.allValidation = this.allValidation.bind(this);
    this.allLetter = this.allLetter.bind(this);
    this.allNumber= this.allNumber.bind(this);
  };
  allLetter(inputtext) {
    console.log('IN teh all Letter')
    var letters = /^[A-Za-z]+$/;
    if(inputtext.value.match(letters)){
      console.log('In teh if of all letter')
      return true;
    }
    return false;
  }
  allNumber(inputtext) {
    console.log('In the allNumber')
    var nums = /^[0-9]+$/;
    if(inputtext.value.match(nums)){
      console.log('hi')
      return true;
    }
    return false;
  }
  allValidation() {
 console.log('In the allValidation')
    if(this.allLetter(this.name)  && this.allLetter(this.lastName)
     && this.allNumber(this.phoneNumber) && this.allNumber(this.landlineNumber)){
      alert("your Data submiltted Successfully");
     }
     else{
       alert("Invalid Input");
     }
  }
  
  
  render() {
    return(
      
      <div className='all'>
        <div className="header">
            <h1 className="heading">USER INPUT FORM</h1>
          </div>
          <div className="main">
          <div className="sideBar">
            <button className='b1'>Home</button>
            <button className='b1'>About</button>
          </div>
          <form className="form">
      <div className="row-1">
        <div>
        <label>Name</label>
        <input type="text" name='name' required/>
        </div>
        <div>
        <label>LastName</label>
        <input type="text" name='lastName' required/>
        </div>
        <div>
        <label>Age</label>
        <input type="date" required/>
        </div>
        <div>
        <label>Gender</label>
        </div>
        <div>
        <select required>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        </div>
        </div>
        <div className="row-2">
       <div>
        <label>Email</label>
        <input type="email" required />
        </div>
        <div>
        <label>phoneNumber</label>
        <input type="text" minLength="9" maxLength="9" name='phoneNumber' required/>
        </div>
        <div>
        <label>landlineNumber</label>
        <input type="text" minLength="11" maxLength="11" name='landlineNumber'required/>
        </div>

      </div>
      <button className="submit" type="button"  onClick={this.allValidation}>Submit</button>
    </form>
    </div>
      </div>
    
    );
  }
  
}

export default App;
