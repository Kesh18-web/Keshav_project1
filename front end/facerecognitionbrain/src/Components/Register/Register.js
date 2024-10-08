import React from "react";

class Register extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            signinemail:'',
            signinpassword:'',
            signinname:''
        }
    }

    onPasswordChange = (event) => {
        this.setState({signinpassword: event.target.value})
    }

    onemailChange = (event) => {
        this.setState({signinemail: event.target.value})
    }

    onnameChange = (event) => {
        this.setState({signinname: event.target.value})
    }

    onSubmit = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify({
                name: this.state.signinname,
                email: this.state.signinemail,
                password: this.state.signinpassword
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.id){
                this.props.onRouteChange('home');
                this.props.loadUser(data)
            }else if(data === "empty field"){
                alert("empty field")
            }else{
                alert("invalid input")
            }
        })
    }

    render(){
        const { onRouteChange } = this.props;
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                <main className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">name</label>
                            <input onChange={this.onnameChange}  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={this.onemailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                        </fieldset>
                        <div className="">
                        <input
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Register"
                        onClick={this.onSubmit}/>
                        </div>
                        
                    </div>
                </main>
            </article>
        );
    }

    //hello

}

export default Register