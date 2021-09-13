import React from "react";
import Header from "./components/Header";
import BattleGrid from "./components/Grid/BattleGrid";
import Game from "./views/Game";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Game />
    </div>
  );
};

export default App;
