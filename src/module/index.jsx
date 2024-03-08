import { invoke } from "@tauri-apps/api"
import { listen } from "@tauri-apps/api/event"
import { useState } from "react"
function Index() {
  const [num, setNum] = useState(0)

  invoke("stats_backend")
  const listOfExeDir = async () => {
    await invoke("sync")
    await listen("sync", (event) => {
      document.getElementsByTagName("a")[0].innerText = event.event.toString()
    })
  }
  const add = () => {
    console.log('value :>> ', num);
    setNum(prev => prev += 1)
  }
  return <>
    <div>
      <a>null</a>
      <div>{num}</div>
      <button onClick={add}>Add</button>
      <button onClick={listOfExeDir}>click</button>
    </div>
  </>
}

export default Index
