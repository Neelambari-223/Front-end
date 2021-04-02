import React, { Component } from 'react';
import axios from 'axios';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailId : '',
            userType : 'Doctor',
            password : '',
            reTypePassword:'',
            securityQue : '',
            securityAns : ''
         }

         this.changeHandler = this.changeHandler.bind(this)
         this.submitHandler = this.submitHandler.bind(this)
    }

    changeHandler(event)
        {
            this.setState({
                [event.target.name] : event.target.value
            })
        }

    submitHandler(event)
    {
        event.preventDefault()
        //let ansSecurity = 'kk'

        axios.put(`http://localhost:8081/User/forgotPassword/${this.state.securityAns}`,this.state)
        .then()
        .catch(error=>{
            alert(error.response.data)
        })
    }

    render() { 
        const {emailId,
            userType,
            password,
            reTypePassword,
           securityQue,
           securityAns} = this.state
        return ( 
            <div>

                <form class="form2" onSubmit={this.submitHandler}>

                <label> SecurityQue </label><br />
                     
                  <select name="securityQue" value={securityQue}  onChange={this.changeHandler}>
                         <option value="birthPlace"> What is your birth place? </option>
                  </select><br />
                     
                  <label> SecurityAns </label><br />
                  <input type="text" name="securityAns" value={securityAns} placeholder='LosAngeles' onChange={this.changeHandler}/><br />

                  <lable>Email ID</lable><br />
                  <input type="text" name="emailId" value={emailId} placeholder='chirsevans7@gmail.com' onChange={this.changeHandler}/><br />

                  <lable>User Type</lable><br />
                  <select name="userType" value={userType} onChange={this.changeHandler}> 
                         <option value="Doctor"> Doctor </option>
                         <option value="Patient"> Patient </option>
                         <option value="Librarian"> Librarian </option>
                         <option value="LibraryStudent"> LibraryStudent </option>
                  </select><br />

                  <label> Password </label><br />
                  <input type="password" name="password" value={password} onChange={this.changeHandler}/><br />
                     
                  <label> reTypePassword </label><br />
                  <input type="password" name="reTypePassword" value={reTypePassword} onChange={this.changeHandler}/><br />

                  {/* <label> SecurityQue </label><br />
                     
                 <select value={this.state.securityQue}  onChange={this.changeHandler}>
                         <option value="birthPlace"> What is your birth place? </option>
                  </select><br />
                     
                  <label> SecurityAns </label><br />
        <input type="text" value={this.state.securityAns} placeholder='LosAngeles' onChange={this.changeHandler}/><br /> */}

                  <button class="submit" type="submit"> Okay </button>
                  


                  </form>

            </div>
         );
    }
}
 
export default ForgotPassword;