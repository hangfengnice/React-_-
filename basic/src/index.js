import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);
// const store = createStore(counter);
// const render = () => {
//   console.log("hello");
//   ReactDOM.render(
//     <Counter
//       onIncrement={() =>
//         store.dispatch({
//           type: "increment",
//         })
//       }
//       onDecrement={() =>
//         store.dispatch({
//           type: "decrement",
//         })
//       }
//       value={store.getState()}
//     />,
//     document.getElementById("root")
//   );
// };
// store.subscribe(render);
// render();

const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        completed: false,
        text: action.text,
      };
    case "toggletodo":
      if (state.id != action.id) {
        return todo;
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
    case "toggletodo":
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};

const testAddTodo = () => {
  let stateBefore = [];
  const action = {
    type: "ADD_TODO",
    id: 0,
    text: "learn redux",
  };
  const stateAfter = [
    {
      id: 0,
      text: "learn redux",
      completed: false,
    },
  ];
  stateBefore = todos(stateBefore, action);
  console.log(stateBefore[0], stateAfter[0]);
};

const testToggelTodo = () => {
  let before = [
    {
      id: 0,
      text: "learn redux",
      completed: false,
    },
    {
      id: 1,
      text: "go shopping",
      completed: false,
    },
  ];
  const action = {
    type: "toggletodo",
    id: 1,
  };
  const after = [
    {
      id: 0,
      text: "learn redux",
      completed: false,
    },
    {
      id: 1,
      text: "go shopping",
      completed: true,
    },
  ];

  before = todos(before, action);
  console.log(before, after);
};

// testAddTodo()
// testToggelTodo()
const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "setvisibilityfilter":
      return action.filter;
    default:
      return state;
  }
};
const FilterLink = ({filter, children, currentFilter, onClick}) => {
  console.log(filter, currentFilter);
  if (filter == currentFilter) {
    return <span>{children}</span>
  }
  return (
    <a
    onClick={e => {
      e.preventDefault()
      onClick(filter)
    }}
    href="#">
      {children}
    </a>
  )
}
// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   }
// }
// console.log(store.getState());
const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'showcompleted':
      return todos.filter(t => t.completed)
    case 'showactive':
        return todos.filter(t => !t.completed)
    default:
      return todos
  }
}
const todoApp = combineReducers({
  todos,
  visibilityFilter,
});
const store = createStore(todoApp);

const Todo = ({onClick, completed, text}) => (
  <li
  onClick=
    {onClick}
    style={{
      textDecoration: completed ? 'line-through' : ''
    }}
  >
    {text}

  </li>
)
const TodoList = ({
  todos,
  onTodoClick
}) => <ul>
  {todos.map(todo => <Todo onClick={() => onTodoClick(todo.id)} key={todo.id} {...todo}></Todo>)}
</ul>

let nextTodoId = 0;

const AddTodo = ({
  onAddclick
}) => {
  let input
  return (
    <div>
      <input ref={(node) => (input = node)} type="text" />
        <button
          onClick={() => {
            onAddclick(input.value)
            input.value = "";
          }}
        >
          addtodo
        </button>
    </div>
  )
}
const Footer = ({
  visibilityFilter,
  onFilterClick
}) => (
  <p>
          show:
          {' '}
          <FilterLink currentFilter={visibilityFilter} filter='showall'
          onClick={onFilterClick}
          >
            all
          </FilterLink>
          {' '}
          <FilterLink
          onClick={onFilterClick} currentFilter={visibilityFilter} filter='showactive'>
            active
          </FilterLink>
          {' '}
          <FilterLink
          onClick={onFilterClick} currentFilter={visibilityFilter} filter='showcompleted'>
            completed
          </FilterLink>
        </p>
)
class TodoApp extends React.Component {

  render() {
    const {todos, visibilityFilter} = this.props
    const visibletodos = getVisibleTodos(todos,
      visibilityFilter)
    return (
      <div>
        <AddTodo onAddclick={text => store.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId ++,
          text
        })} />
        <TodoList todos={visibletodos} onTodoClick={id => store.dispatch({
          type: "toggletodo",
          id
        })} />
        <Footer
        onFilterClick={(filter) => store.dispatch({
          type: 'setvisibilityfilter',
          filter
        })} visibilityFilter={visibilityFilter} />
      </div>
    );
  }
}
const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById("root")
  );
};
store.subscribe(render);

render();
