import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Todo } from './components/Todo/index';


// class HelloWorld extends React.Component {
//   render() {
//     return(
//       <div>
//         HelloWorld
//       </div>
//     );
//   }
// }

// class CountApp extends Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0,
//     }
//   }

//   plus() {
//     this.setState({count: this.state.count + 1})
//   }

//   minus() {
//     this.setState({count: this.state.count - 1})
//   }

//   render() {
//     return (
//       <div>
//         <h1>カウンターApp</h1>
//         <p>{this.state.count}</p>
//         <div>
//           <button onClick={() => this.plus()}>+</button>
//           <button onClick={() => this.minus()}>-</button>
//         </div>
//       </div>
//     );
//   }
// }

ReactDOM.render(
  // <HelloWorld />, //HelloWorldのコンポーネントを
  // <CountApp />,
  <Todo />,
  document.getElementById('root') // id='root'の要素にrenderする
);


