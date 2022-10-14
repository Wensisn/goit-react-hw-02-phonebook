import { Component } from 'react';
import { TodoList } from '../TodoList/TodoList';
import { nanoid } from 'nanoid';
import arrayContact from '../todo.json';
import css from './Form.module.css';

export class FormPhone extends Component {
  state = {
    contacts: arrayContact,
    filter: '',
    name: '',
    number: '',
  };

  addTodo = text => {
    const todo = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(prevState => ({
      contacts: [todo, ...prevState.contacts],
    }));
  };

  deleteContact = TodoId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(todo => todo.id !== TodoId),
    }));
  };

  handelChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  onSubmitnForm = event => {
    event.preventDefault();
    this.addTodo();
    this.props.onSubmit(this.state.contacts);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { contacts } = this.state;
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
        {/* <Search /> */}
        <div>
          <span>Общее: {contacts.length}</span>
          {/* <span>Общее не выполн: {a.length}</span> */}
          <TodoList contacts={contacts} onDeleteContact={this.deleteContact} />
        </div>
      </div>
    );
  }
}
