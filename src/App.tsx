import React from 'react';
import Index from 'src/page'
import { Button } from "antd"

function App() {
  return (
    <div className="App">
      <Index />
      <Button type="primary">test</Button>
      <div className="box clear-float">
        <div className="float-left">leftfffddddsdfsdfs</div>
        <div className="float-right">test</div>
      </div>
    </div>
  );
}

export default App;
