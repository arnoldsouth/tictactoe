import './App.css';

// import Counter from './components/Counter/Counter';
import PlayerOCounter from './components/Counter/PlayerOCounter';
import PlayerXCounter from './components/Counter/PlayerXCounter';
import TicTacToe from './components/TicTacToe/TicTacToe';

const App = () => {
  return (
    <div>
      <div className="navbar-logo">React Practice: Lifting State Up</div>

      {/* <Counter /> */}
      <PlayerXCounter />
      <PlayerOCounter />

      <TicTacToe />
    </div>
  );
};

export default App;
