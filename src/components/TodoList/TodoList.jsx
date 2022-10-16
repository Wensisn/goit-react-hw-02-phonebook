import css from './TodoList.module.css';
import React from 'react';

export const TodoList = ({ contacts, onDeleteContact }) => (
  <ul className={css.todoList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.todoList__item}>
        <p className={css.todoList__text}>{name}</p>
        <p className={css.todoList__text}>{number}</p>
        <button
          className={css.todoList__button}
          onClick={() => onDeleteContact(id)}
        >
          Remove
        </button>
      </li>
    ))}
  </ul>
);
