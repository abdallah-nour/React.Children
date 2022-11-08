import React from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        Increase Count
      </button>
      <h2>Count: {count}</h2>

      <Switch value={count}>
        <div data-match={2}>show if 2</div>
        <div data-match={4}>show if 4</div>
      </Switch>
    </>
  );
}

function Switch({ value, children }) {
  return React.Children.toArray(children).filter((child) => {
    return child.props['data-match'] === value;
  });
}
