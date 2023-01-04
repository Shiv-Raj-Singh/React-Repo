import React from 'react';
import "../Form.css"
export default class FormCompo extends React.Component{
    constructor(promps){
        super(promps)
        this.state = {
            count : 0 ,
            text : ""
        }
    }
    onChangeData = (e)=>{
        this.setState({
            text:e.target.value
        })
    }
    chnageUppercase = ()=>{
        const output=this.state.text.toUpperCase()
        console.log("clicked")
        this.render()(
            <p>{output}</p>
        )
    }
 render(){
console.log(this.state)
    return <div>
        <form action="" className="userform">
            {/* <label htmlFor="username">Enter your Name</label>
            <input type="text" required /> <br />
            <label htmlFor="phone">Enter your phone </label>
            <input type="number" required /><br />
            <label htmlFor="email">Enter your email</label>
            <input type="email" required /><br />
            <label htmlFor="profile-picture">Enter your  profile - picture </label>
            <input type="file" required /><br /> */}
            <textarea name="data" className='txtarea'onChange={this.onChangeData} id="" cols="30" rows="10"></textarea> <br />
            <button type='submit' onClick={this.chnageUppercase}>Submit </button>
            <p>{this.state.text}</p>
        </form>
        <h1>how Are you </h1>
    </div>
 }   
}
