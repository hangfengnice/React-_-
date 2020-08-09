import React, { Fragment } from 'react';
import ReactDOM from "react-dom";

function ListItem({item}) {
  return (
    <>
      <dt>{item.term}</dt>
      <dd>{item.desc}</dd>
    </>
  )
}
class Example extends React.Component {
  render() {
    return <ListItem item={{term: 1, desc: 'desc'}} />
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);

