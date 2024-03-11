import { invoke } from "@tauri-apps/api"
import { listen } from "@tauri-apps/api/event"
import { useState } from "react"
import Home from "./Home/Home"
function Index() {
  const [num, setNum] = useState(0)
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
    <Home></Home>
  </>
}

export default Index
