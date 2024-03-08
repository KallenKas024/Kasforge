#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod class;
mod synchronization;
use synchronization::sync;

#[tauri::command]
fn stats_backend(){
    println!("RustBackend is Connected.")
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![stats_backend, sync])
        .run(tauri::generate_context!())
        .expect("error while running Kasforge application");
}
