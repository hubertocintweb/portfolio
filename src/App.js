import Header from "./components/Header";
import Main from "./components/Main";
import Separator from "./components/Separator";
import "./style/global.css";

function App() {
  return (
    <div className="global">
      <Header className="global__header" />
      <Separator className="global__separator" />
      <Main className="global__main" />
    </div>
  );
}

export default App;
