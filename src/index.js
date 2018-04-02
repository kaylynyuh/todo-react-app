import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './todo-list.js';

ReactDOM.render(
  <TodoList />,
  document.getElementById('app')
);

module.hot.accept();