import React from 'react';
import Config from 'src/config'

function App() {

  return (
    <div className="App">
      <div>当前环境：{Config.getCurrentDev()}</div>
      <div>环境变量：{ process.env.REACT_APP_DEV }</div>
      <div>调用的接口是：{Config.getUrlLinks("upm")}</div>
    </div>
  );
}

export default App;
