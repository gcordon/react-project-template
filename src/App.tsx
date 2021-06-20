import React from 'react';
import Config from 'src/config'

function App() {

  console.log("this is test and change")

  return (
    <div className="App">
      当前环境：{Config.getCurrentDev()}
      环境变量：{ process.env.REACT_APP_DEV }
      调用的接口是：{Config.getUrlLinks("upm")}
    </div>
  );
}

export default App;
