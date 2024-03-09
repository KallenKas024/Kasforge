import { exit } from '@tauri-apps/api/process';
import { appWindow } from '@tauri-apps/api/window';
import '../Home/home.css';
function Home() {
  const closeApp = async () => {
    await appWindow.close()
    await exit()
  }
  return <>
  <div class='cover'>
      <div className='title' >
        <h2 data-tauri-drag-region className="title_h2">KASFORGE</h2>
        <div className='title_close_container'>
          <span onClick={closeApp} className='close_text'>X</span>
        </div>
      </div>
      <div class='pack-wrapper'>
        <div className='input-wrapper'>
          <div class='input-data'>
            <input type="text" required/>
            <div class='underline'></div>
            <label class='path_label'>
              打包地址
            </label>
          </div>
        </div>
        <button class='confirm-button'>打包</button>
      </div>
      <div class='underline'></div>
      <div class='btn-panel'>
        <ul>
          <button class='night-btn'>夜间模式</button>
          <button class='config-btn'>配置文件</button>
          <button class='browse-btn'>浏览插件</button>
          <button class='reset-btn'>重置插件</button>
        </ul>
      </div>
      <div className='grid_view'>
        <div class='integration-package-list'>
          <h3>整合包列表</h3>
        </div>
      </div>
    </div>
  </>
}

export default Home