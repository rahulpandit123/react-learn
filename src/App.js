import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
// import header from './header';
// import sideBar from './sideBar';
import axios from './axios-orders';
import Post from './Post';
import firebase from './firebase';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Name: '',
      lastName: '',
      DOB: '',
      email: '',
      phoneNumber: '',
      landlineNumber: '',
      gender: '',
      posts: []
      

    }
    this.allValidation = this.allValidation.bind(this);
    this.allLetter = this.allLetter.bind(this);
    this.allNumber= this.allNumber.bind(this);
    this.allEmail = this.allEmail.bind(this);
   // this.getData = this.getData.bind(this);
  };
  allLetter(inputtext) {
   if(!inputtext.match(`[A-Za-z]`))
   return false;
   return true;   
    
  }
  
  allNumber(inputtext) {   
  if(!inputtext.match(`[0-9]{10}`))
  return false;
  return true;
   }

 allEmail(inputtext) {
      if(!inputtext.match(`[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]`))
      return false;
      return true;
    }
  allValidation() {
      console.log('In the allValidation')
       if(this.allLetter(this.state.name)  && this.allLetter(this.state.lastName)
       && this.allNumber(this.state.phoneNumber) && this.allNumber(this.state.landlineNumber)  
       && this.allEmail(this.state.email)){
       alert("your Data submiltted Successfully");
       const order = {
        name : this.state.name,
        lastName: this.state.lastName,
        email : this.state.email,
        DOB:this.state.DOB,
        gender: this.state.gender,
        phoneNumber: this.state.phoneNumber,
        
        landlineNumber: this.state.landlineNumber,        
      }
      axios.post('/orders.json',order)
        .then(Response => console.log(Response))
        .catch(error => console.log(error));
     }
     else{
       alert("Invalid Input");
     }
  } 
  

  componentDidMount () {
    
      firebase.database().ref('orders').once('value',(orders) => {
      var temp = []
     // console.log(orders.val())mpl
     orders.forEach((val) => {
       temp.push({
         key: val.key,
         ...val.val()
       })

     })
     temp = temp.map((val) => {
       return <Post {...val} key={val.key}/> 
     })
    this.setState({posts:temp})
  }
        
      )}
  
  //let posts = axios.get('https://react-my-burger-5c717.firebaseio.com/orders.json?orderBy="$key" ');

  render() {
      /* const posts = this.state.posts.map(post => {
         return <Post name={post.name}/>;
       })
      */
    return(
      
      <div className='all'>
        <div className="header">
            <h1 className="heading">USER INPUT FORM</h1>
          </div>
          <div className="main">
          <div className="sideBar">
            <button className='b1'>Home</button>
            <button className='b1'onClick={this.getData}>About</button>
          </div>
          <form className="form" onSubmit={this.allValidation}>
      <div className="row-1">
        <div>
        <label>Name</label>
        <input type="text" name='name' required value={this.state.name} 
        onChange={(event)=>{this.setState({name:event.target.value})}}/>
        </div>
        <div>
        <label>LastName</label>
        <input type="text" name='lastName' required value={this.state.lastName}
         onChange={(event)=>{this.setState({lastName:event.target.value})}}/>
        </div>
        <div>
        <label>Age</label>
        <input type="date" name='DOB' value={this.state.DOB}required 
        onChange={(event) => {this.setState({DOB:event.target.value})}}/>
        </div>
        <div>
        <label>Gender</label>
        </div>
        <div>
        <select name="gender" required onChange={(event) => {this.setState({gender:event.target.value})}}>
          <option>Gender</option>            
          <option value={this.state.male}>Male</option>
          <option value={this.state.female}>Female</option>
          <option value={this.state.other}>Other</option>
        </select>
        </div>
        </div>
        <div className="row-2">
       <div>
        <label>Email</label>
        <input type="email" required  value={this.state.email}
        onChange={(event) => {this.setState({email:event.target.value})}}
        />
        </div>
        <div>
        <label>phoneNumber</label>
        <input type="text" minLength="9" maxLength="10" name='phoneNumber' required
      value={this.state.phoneNumber}
      onChange={(event)=>{this.setState({phoneNumber:event.target.value})}}
      
        />
        </div>
        <div>
        <label>landlineNumber</label>
        <input type="text" minLength="10" maxLength="10" name='landlineNumber'
        required value={this.state.landlineNumber}
        onChange={(event)=>{this.setState({landlineNumber:event.target.value})}}
        />
        </div>

      </div>
      <button className="submit" type="button"  onClick={this.allValidation}>Submit</button>
    </form>
    </div>
    <div>
      <section>
        {this.state.posts}
      </section>
      </div> 
     </div>
    
    );
  }
  
}

export default App;
