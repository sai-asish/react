import React from 'react';
import ReactDOM from 'react-dom';

class BasicForm extends React.Component{

    state = {
      name:"",
      carName:"",
      userStory: ""
    };

    handleValueChange = formElementame => event => {
        this.setState({
            [formElementame] :event.target.value
        });
    };

    displayFormData = () =>{

        let postDataJson = {
            name:this.state.name,
            carName: this.state.carName,
            userStory: this.state.userStory
        };

        let commonHeaders = {
            "Content-Type": "application/json"
          };

        fetch("http://localhost:3000/bank/api/registration", {
            method: "POST",
            headers: commonHeaders,
            body: JSON.stringify(postDataJson),
            credentials: "include"
          }).then(res => {
              console.log(res.json())
            });
    }

    render(){
        return (
            <div>
            <h4>Registration</ h4>
            Your Name: <input name="firstName" type="text" onChange={this.handleValueChange("name")} />
            <br />
            <br />
            Select Your favourite car: <select name="cars"  onChange={this.handleValueChange("carName")} >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select>
            <br />
            <br />
            <textarea name="message" rows="10" cols="30" onChange={this.handleValueChange("yourStory")} >
                Please write Your story hear
            </textarea>
            <br />
            <br />

            <input type="file" name="uploadFile" />

            <button name="submit" value="Submit" onClick={this.displayFormData()} >Submit </button>

            </div>
        );
    }
}

export default BasicForm;