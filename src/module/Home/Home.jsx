import { exit } from '@tauri-apps/api/process';
import { appWindow } from '@tauri-apps/api/window';
import '../Home/home.css';
function Home() {
  const closeApp = async () => {
    await appWindow.close()
    await exit()
  }
  return <>
    <div className='title' >
      <h2 data-tauri-drag-region className="title_h2">KASFORGE</h2>
      <div className='title_close_container'>
        <span onClick={closeApp} className='close_text'>X</span>
      </div>
    </div>
    <div className='link'>
      <input type="text" />
      <button>打包</button>
    </div>

    <div className='grid_view'>
      <div className="grid_view_item"></div>
      <div className="grid_view_item"></div>
      <div className="grid_view_item"></div>
      <div className="grid_view_item"></div>
    </div>
  </>
}

export default Home