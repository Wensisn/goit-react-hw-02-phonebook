import { Component } from "react"
import { FormPhone } from "./Form/Form"

export class App extends Component{

  onSubmitHandel = data =>{
    setTimeout(() => {
      console.log(data)
    }, 2000);
  }
z
render(){
  return (
    <>
<FormPhone onSubmit={this.onSubmitHandel}/>
    </>
  );
}

};
