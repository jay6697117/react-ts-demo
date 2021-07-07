import React from 'react';
import './App.css';

function Done() {
  const num: number = 0;
  function add() {
    console.log(num);
  }
  return <button onClick={add}>点我</button>;
}

class App extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      msg: '啦啦啦'
    };
  }

  componentDidMount() {
    console.log('渲染钱执行');
  }
  render() {
    return (
      <div>
        {this.state.msg} || <Done />
      </div>
    );
  }
}

export default App;
