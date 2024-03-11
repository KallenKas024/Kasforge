
import { invoke } from "@tauri-apps/api";
import "./App.css";
import Index from "./module/index";

invoke("stats_backend")

function App() {
  return (
    <Index />
  )
}

export default App;

