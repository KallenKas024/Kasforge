use std::{thread::sleep, time::Duration};

use tauri::Window;

use crate::class::payload::Payload;

// 2024 03.11 PM 5:58 logged by Kallen024
// 生成持续拉取服务器信息的事件并返回给前端
// 目前没有实现功能
#[tauri::command]
pub fn sync(window: Window) {
    std::thread::spawn(move || loop {
        window.emit("sync", Payload::new("sync".into())).unwrap();
        sleep(Duration::from_secs(10))
    });
}
