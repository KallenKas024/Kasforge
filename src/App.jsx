
import "./App.css";
import { invoke } from "@tauri-apps/api";
import { listen } from "@tauri-apps/api/event";

function App() {
  invoke("stats_backend")
  const listOfExeDir = async () => {
    await invoke("sync")
    await listen("sync", (event) => {
      document.getElementsByTagName("a")[0].innerText = event.event.toString()
    })
  }
  return (
    <div>
      <a>null</a>
      <button onClick={ listOfExeDir }>click</button>
    </div>
  )
}

export default App;

