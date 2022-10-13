import { Component } from 'react';
import { nanoid } from 'nanoid'
import css from './Form.module.css';

export class FormPhone extends Component {

  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

 

  handelChange = event =>{

    const {name , value} = event.currentTarget
     this.setState({
      [name]: value,
    })
  }

  onSubmitnForm = event => {
    event.preventDefault()

    this.props.onSubmit(this.state)

    this.reset()
  }


  reset = () =>{
    this.setState({    
    name: '',
    number: '',})
  }

  render() {
    return (
      <div className={css.sectionForm}>
        <h2>PhoneBook</h2>

        <form className={css.form} onSubmit={this.onSubmitnForm}>
          <label htmlFor={nanoid()}>
            <span className={css.name}>Name</span>
            <input
            id={nanoid()}
            value={this.state.name}
            type="text"
              name="name"
              required
              onChange={this.handelChange}
            />
          </label>
          <label htmlFor={nanoid()}>
            <span className={css.name}>Number</span>
            <input
            id={nanoid()}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handelChange}
            />
          </label>
          <button className={css.click}>Нажми на меня</button>
        </form>
        <div >
          <h2>Contacts</h2>
          <label htmlFor={nanoid()} className={css.findName}>
            <span className={css.name}>Find contacts by name</span>
            <input type="text" id={nanoid()} />
          </label>
          <p>Eden Clements :645-17-79</p>
          <p>Hermione Kline :443-89-12 </p>
          <p>Rosie Simpson : 459-12-56</p>
        </div>
      </div>
    );
  }
}
