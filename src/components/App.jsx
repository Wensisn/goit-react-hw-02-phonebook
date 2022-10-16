import { Component } from 'react';
import { FormPhone } from './Form/Form';
import { TodoList } from './TodoList/TodoList';
import { nanoid } from 'nanoid';
import arrayContact from './todo.json';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addTodo = ({ name, number }) => {
    if (this.isExistContact(name)) {
      alert`${name} такой уже есть`;
      return false;
    }
    const todo = {
      id: nanoid(),
      name,
      number,
    };
    // НЕ РЕБОТАЕТ !

    console.log(
      this.setState(prevState => ({
        contacts: [todo, ...prevState.contacts],
      }))
    );
  };

  deleteContact = TodoId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(todo => todo.id !== TodoId),
    }));
  };

  isExistContact = name => {
    return this.state.contacts.some(item => item.name === name);
  };

  onSubmitHandel = data => {
    setTimeout(() => {
      console.log(data);
    }, 2000);
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <FormPhone contacts={contacts} onSubmit={this.addTodo} />
        <TodoList contacts={contacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}
