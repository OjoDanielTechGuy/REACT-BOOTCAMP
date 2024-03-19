import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Messages'
import Counter from './components/Counter'

function App() {
  //using JSX
  return (
    <div className="App">
      
{/* 
      <Greet name = "Lami" heroName = "Laromi"/>
      <Greet name = "Taiwo" heroName = "Lala"/>
      <Greet name = "Arike" heroName = "Ijun"/>
      
      <Welcome />
      <Hello /> */}

      <Message/>
      <Counter/>

    </div>
  );
}



export default App;