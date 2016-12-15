import React, { PropTypes } from 'react'
import SignUpForm from '../components/SignUpForm.jsx'

class SignUpPage extends React.Component{
    constructor(props){
        super(props);

        //设置初始值
        this.state = {
            errors:{},
            user:{
                email: '',
                name: '',
                password: '',
            }
        }
        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    //修改user对象
    changeUser(event){
        const field =  event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user
        });
    }

    //处理form
    processForm(event){

        // 阻止默认行为 submit
        event.preventDefault();
        console.log(`name: ${this.state.user.name}`);
        console.log(`email: ${this.state.user.email}`);
        console.log(`password: ${this.state.user.password}`);
    }

    // 渲染这个Component
    render(){
        return (
            <SignUpForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        );
    }
}

export default  SignUpPage;