import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import PropTypes from 'prop-types'

const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};
const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;

    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

const store = createStore(todoApp);

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#1"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

class FilterLink extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const state = store.getState();
    return (
      <Link
        active={props.filter === state.visibilityFilter}
        onClick={() =>
          store.dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter: props.filter,
          })
        }
      >
        {props.children}
      </Link>
    );
  }
}

const Footer = () => (
  <p>
    Show: <FilterLink filter="SHOW_ALL">ALL</FilterLink>{" "}
    <FilterLink filter="SHOW_ACTIVE">ACTIVE</FilterLink>{" "}
    <FilterLink filter="SHOW_COMPLETED">COMPLETED</FilterLink>
  </p>
);

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </li>
);

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

const AddTodo = () => {
  let input;
  return (
    <div>
      <input ref={(node) => (input = node)} type="text" />
      <button
        onClick={() => {
          store.dispatch({
            type: "ADD_TODO",
            id: nextTodoId++,
            text: input.value,
          });
          input.value = "";
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);
    default:
      return;
  }
};

class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const state = store.getState();
    return (
      <TodoList
        todos={getVisibleTodos(state.todos, state.visibilityFilter)}
        onTodoClick={(id) =>
          store.dispatch({
            type: "TOGGLE_TODO",
            id,
          })
        }
      />
    );
  }
}
let nextTodoId = 0;
// const TodoApp = function () {
//   let {store1} = this.context
//   return (
//     <div>
//       <div>{store1.name}</div>
//       <AddTodo />
//       <VisibleTodoList />
//       <Footer />
//     </div>
//   )
// } ;

class TodoApp extends React.Component {
  render () {
    let {store1} = this.context
    return (
      <div>
        <div>{store1.name}</div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}
TodoApp.contextTypes = {
  store1: PropTypes.object
}

class Provider extends React.Component {
  getChildContext() {
    return {
      store1: this.props.store1
    }
  }
  render() {
    return this.props.children
  }
}

Provider.childContextTypes = {
  store1: PropTypes.object
}

ReactDOM.render(
  <Provider store1={{name: 'hf'}}>
    <TodoApp />
  </Provider>

, document.getElementById("root"));
