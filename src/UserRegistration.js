import React from 'react';
import ReactDOM from 'react-dom';



class UserRegistration extends React.Component{
       

    state = { 
        firstName:"",
        lastName:"",
        address:"",
        phnum:"",
        loginName:""

    };

    handleValueChange = formElementname => event => {
        console.log(this.state);
        this.setState({
            [formElementname] :event.target.value
        });
    };

    displayFormData = () =>{

        let postDataJson = {
            firstName:this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phnum: this.state.phnum,
            loginName: this.state.loginName
        };
   
        let commonHeaders = {
            "Content-Type": "application/json"
          };  

          const MEDIUM_POST_URL = `http://localhost:8080/bank/api1/user/registration1`;
          fetch(MEDIUM_POST_URL , {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Accept-Charset": "utf-8"
            },
            body: JSON.stringify(postDataJson)
        }).then(res => {
            console.log(res.json())
          });

   }
    




render(){


    return(
        <div>
         <h1>USER REGISTRATION FORM </h1>

    FirstName:<br/>
    <input name="firstName" type="text" onChange={this.handleValueChange("firstName")}/>
    <br/>
    <br/>
    LastName:<br/>
    <input name="lastName" type="text" onChange={this.handleValueChange("lastName")}/>
    <br/>
    <br/>    
    Address:<br/>
    <input name="address" type="text" onChange={this.handleValueChange("address")}/>
    <br/>
    <br/>
    PhoneNumber:<br/>
    <input name="phnum" type="number" onChange={this.handleValueChange("phnum")}/>
    <br/>
    <br/>
    LoginName:<br/>
    <input name="loginName" type="email" onChange={this.handleValueChange("loginName")}/>
    <br/>
    <br/>
    <button name="submit" type="submit" onClick={this.displayFormData}> Submit </button>
    </div>


    );
   }
}

export default UserRegistration;