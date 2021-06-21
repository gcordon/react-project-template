import React, { useEffect } from 'react';
import Config from 'src/config'
import * as Api from "src/api/http/compass"

function App() {

  console.log("this is test and change many code")

  useEffect(() => {
    GetList()
    GetDetail("1")
  }, [])

  const GetList = () => {
    Api.GetList().then(res => {
      console.log("res", res)
    })
  }

  const GetDetail =(id:string) => {
    Api.GetDetail(id).then(res => {
      console.log("获取详情", res)
    })
  }



  return (
    <div className="App">
      当前环境：{Config.getCurrentDev()}
      环境变量：{ process.env.REACT_APP_DEV }
      调用的接口是：{Config.getUrlLinks("upm")}
    </div>
  );
}

export default App;
