import logo from './logo.svg';
import './App.css';
import CompA from './CompA';
import { createContext } from 'react';
import { useState } from 'react';
let name = 'HMP';
const car = {
	name: 'BMW',
	color: 'black'
}
export const NameContext = createContext()
export const ChannelContext = createContext()

function App() {
	const [name, setName] = useState('kumar')
	return (
		<>
			{/* <div className="App">
      <div className="New">HMP</div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <lable for=""></lable>
        <h1>{car.name}</h1>
        <h1>{name}</h1>
        <h1>{3 + 4}</h1> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div> */}
			<NameContext.Provider value={name}>
				<ChannelContext.Provider value={'from learning never ends'}>
					<CompA />
				</ChannelContext.Provider>
			</NameContext.Provider>
		</>
	);
}

export default App;
