import './App.css';
import { Scene } from './components/Scene/Scene'; // ← ИМПОРТИРУЕМ Scene

function App() {
  return (
    <div className="App">
      <Scene /> {/* ← ИСПОЛЬЗУЕМ Scene */}
    </div>
  );
}

export default App;