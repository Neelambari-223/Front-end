import React, { Component } from 'react';
import axios from 'axios'
import loginImg from "./login-illus-1.svg";
import './style.scss';
import ForgotPassword from "./ForgotPassword";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             emailId : '',
             userType: 'Doctor',
             firstName: '',
             lastName: '',
             dob: '',
             phoneNo: '',
             password: '',
            reTypePassword: '',
            securityQue: '',
            securityAns: '',
         }

         this.changeHandler = this.changeHandler.bind(this)
         this.submitHandler = this.submitHandler.bind(this)
         this.forgotPwdHandler = this.forgotPwdHandler.bind(this)
    }

    changeHandler(event)
    {
        this.setState({
           [ event.target.name] : event.target.value
        })
    }

    submitHandler(event)
        {
            event.preventDefault()

            axios.post("http://localhost:8081/SignUp",this.state)
            .then( //response => {console.log(response)}
            ).catch(error => {
                alert(error.response.data)
            })
        }

        forgotPwdHandler(event)
        {
            <ForgotPassword />
        }


    render() { 

       const {emailId,
       userType,
       firstName,
       lastName,
       dob,
       phoneNo,
       password,
      reTypePassword,
      securityQue,
      securityAns} = this.state
        return ( 
      <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Register</div>
              <div className="content">
                  <div className="image">
                         <img src={loginImg}/>
                 </div>
                      <div className="form">
                        <form class="form1" onSubmit={this.submitHandler}>
                          <div className="form-group">
                             <label class="label1"> Email </label> <br />
                             <input class="un" type="text" name="emailId" value={emailId} placeholder='chirsevans7@gmail.com' onChange={this.changeHandler}/> <br />
                          </div>

                          <div className="form-group">
                             <label> User Type </label> <br />
                             {/* <input type="text" name="userType" value={userType} onChange={this.changeHandler}/> */}
                             <select class="un" name="userType" value={userType} onChange={this.changeHandler}> 
                             <option value="Doctor"> Doctor </option>
                             <option value="Patient"> Patient </option>
                             <option value="Librarian"> Librarian </option>
                             <option value="LibraryStudent"> LibraryStudent </option>
                             </select><br />
                           </div>

                           <div className="form-group">
                             <label> FirstName </label><br />
                             <input class="un" type="text" name="firstName" value={firstName} placeholder='Chris' onChange={this.changeHandler}/><br />
                           </div>

                           <div className="form-group">
                             <label> LastName </label><br />
                             <input class="un"type="text" name="lastName" value={lastName} placeholder='Evans' onChange={this.changeHandler} /><br />
                           </div>

                           <div className="form-group">
                             <label> DateOfBirth </label><br />
                             <input class="un" type="Date" name="dob" value={dob} onChange={this.changeHandler} /><br />
                           </div>

                           <div className="form-group">
                             <label> PhoneNumber </label><br />
                             <input class="un" type="text" name="phoneNo" value={phoneNo} onChange={this.changeHandler}/><br />
                           </div>

                           <div className="form-group">
                             <label> Password </label><br />
                             <input class="pass" type="password" name="password" value={password} onChange={this.changeHandler}/><br />
                           </div>

                           <div className="form-group">
                             <label> reTypePassword </label><br />
                             <input class="pass" type="password" name="reTypePassword" value={reTypePassword} onChange={this.changeHandler}/><br />
                           </div>

                           <div className="form-group">
                             <label> SecurityQue </label><br />
                             {/*<input type="text" name="securityQue" value={securityQue}  onChange={this.changeHandler}/> */}
                             <select class="un" name="securityQue" value={securityQue}  onChange={this.changeHandler}>
                             <option value="birthPlace"> What is your birth place? </option>
                             </select><br />
                          </div>

                          <div className="form-group">
                             <label> SecurityAns </label><br />
                             <input class="un" type="text" name="securityAns" value={securityAns} placeholder='LosAngeles' onChange={this.changeHandler}/><br />
                          </div>
                          <div className="footer">
                             <button class="submit" type="submit" className="btn">
                                SignUp
                               </button>
                               <button onClick={this.forgotPwdHandler}>
                                 Forget Password
                                 </button>
                           </div>
                          
              
                        </form>
                 </div>
             </div>
              
                      
       </div>
           
                );
    }
}

export default SignUp;