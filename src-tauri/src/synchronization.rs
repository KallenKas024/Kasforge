use std::{thread::sleep, time::Duration};

use reqwest::{Client, StatusCode};
use tauri::Window;

use crate::class::payload::Payload;

#[tauri::command]
pub fn sync(window: Window){
    std::thread::spawn(move || {
        loop {
            window.emit("sync", Payload::new("sync".into())).unwrap();
            sleep(Duration::from_secs(1))
        }
    });
}