import React from "react";
import "./style.scss";
import Button from "./components/Button/button";

const App: React.FC = () => (
  <div>
    <Button btnType="primary">primary</Button>
    <Button btnType="link" href="http://xxx.xx.com">
      link
    </Button>
    <Button size="lg">lg</Button>
  </div>
);

export default App;
