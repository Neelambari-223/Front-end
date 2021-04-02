import axios from "axios";
import React from "react";
import loginImg from "./login-illus-1.svg";
import './style.scss';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            emailId:'',
            userType:'',
            password:''
        }
    }

    handlechange=(e)=>{
        const {name,value}=e.target
        this.setState({[name]:value})
    }
    submitHandler= e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:8080/Login",this.state)
        .then(response =>{
            console.log(response)
            console.log(response.data)
        })
        .catch(error =>{
            console.log(error)
            alert(error.response.data)
        })
    }
    render(){
        const{emailId,userType,password}=this.state;
        return(
            <div className="base-container">
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg}/>
                    </div>
                    <div className="form">
                        <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <label htmlFor="emailId">EmailId</label>
                            <input type="text" name="emailId" value={this.state.emailId} placeholder="emailId" onChange={this.handlechange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userType">UserType</label>
                            <input type="text" name="userType" value={this.state.userType} placeholder="userType" onChange={this.handlechange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={this.state.password} placeholder="password" onChange={this.handlechange}/>
                        </div>
                         <div className="footer">
                             <div className="btn">
                                 <button class="submit" type="submit">
                                    Login
                                  </button>
                              </div>
                         </div>
                        </form>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Login;