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
            text :e.target.value
        })
    }
    onClickDataToUpper = ()=>{
        console.log("clicked") 
        alert("You Want Convert the text in Upper-Case !")
        this.setState({
                    upperText:this.state.text.toUpperCase()
                })
            
        }

    onClickDataToLower = ()=>{
        console.log("clicked") 
        alert("You Want Convert the text Lower-Case !")
        this.setState({
            lowerText:this.state.text.toLowerCase()
                })
            
        }
    onClickDataToCountCharactor = ()=>{
        console.log("clicked") 
        alert("You Want Count All Text Charactors !")
        this.setState({
            countCharactor:this.state.text.length
                })
     }

    onClickDataToCountwords = ()=>{
        console.log("clicked") 
        alert("You Want Count All Text Words !")
        const words = this.state.text.trim().split(' ')
        console.log(words)
        let countwords = words.length
        countwords= (words.length===1 && words[0]==="") ? 0 :countwords
        this.setState({
            countwords: countwords
             })
    }

    onClickDataToChechReadTime = ()=>{
        console.log("clicked") 
        alert("You Want See the Read Time For Text in Seconds!")
        const words = this.state.text.trim().split(' ')
        let readTime = words.length * (.32)
        readTime= (words.length===1 && words[0]==="") ? 0 :readTime
        this.setState({
            readTime: readTime + " seconds !"
             })
    }

  
render(){
    return <div>
    <div className="userform">
    <h1> JvavaScript - Events Use Onclick and onChange </h1>
        {/* <textarea name="textarea" value={this.state.text} onChange = {(e)=>{
            this.setState({
                text :e.target.value
            })
        }} className='txtarea' id="" cols="30" rows="10"></textarea> */}
        <textarea name="textarea" onChange = {this.onChangeData} className='txtarea' id="" cols="30" rows="10"></textarea>
        <button className="btns" onClick={this.onClickDataToUpper}> To Upper-Case </button>
        <button className="btns" onClick={this.onClickDataToLower}> To Lower-Case </button>
        <button className="btns" onClick={this.onClickDataToCountCharactor}> To Count-Charactors </button>
        <button className="btns" onClick={this.onClickDataToCountwords}> To Count-Wors  </button>
        <button className="btns" onClick={this.onClickDataToChechReadTime}> To Read Aprox Time  </button>
        <div className="text-p">
        <p className='txtarea-p'>{this.state.upperText}</p>
        <p className='txtarea-p'>{this.state.lowerText}</p>
        <p className='txtarea-p'>{this.state.countCharactor}</p>
        <p className='txtarea-p'>{this.state.countwords} </p>
        <p className='txtarea-p'>{this.state.readTime} </p>
        </div>
 
    </div>
    </div>
 }   
}

