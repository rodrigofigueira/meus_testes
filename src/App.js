import './App.css';
import ParentToChild from './components/ParentToChild';

function App() {
  return (
    <div>
      <h1>H1 do "pai"</h1>
      <p>O texto abaixo é um elemento que está no pai e que recebeu em props.label o texto</p>      
      <ParentToChild label="Texto que aparecerá, ou seja, assim que se faz uma comunicação direta entre componentes" />
    </div>
  );
}

export default App;