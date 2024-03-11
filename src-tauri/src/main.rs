#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
// 2024 03.11 PM 5:49 logged by Kallen024
// import
mod class;

use std::env;

use class::prelude::*;

// 2024 03.11 PM 5:50 logged by Kallen024
// React前端调用这个命令可以让后端知道前端已上线
#[tauri::command]
fn stats_backend() {
    tracing::info!("ReactFrontend has Established.");
    tracing::info!("RustBackend --> ReactFrontend Connect has established.");
    tracing::info!("UI-Components has been OnMounted.");
}


// 2024 03.11 PM 5:51 logged by Kallen024
// tokio异步
#[tokio::main]
async fn main() {

    // 2024 03.11 PM 5:52 logged by Kallen024
    //clia可以帮我们更好的配置tracing库
    let _guard_logger: clia_tracing_config::WorkerGuard = clia_tracing_config::build()
    .filter_level("info")
    .with_ansi(true)
    .to_stdout(true)
    // 2024 03.11 PM 5:53 logged by Kallen024
    // .directory("./EsoPluginsHelper_Kasforge/logs/")
    // 这里是因为tauri不知道为什么无法访问fs，只能使用已经创建的文件
    // 所以暂时注释掉
    .file_name("lastrun.log")
    .rolling("daily")
    .init();

    // 2024 03.11 PM 5:55 logged by Kallen024
    // 输出RUST后端已启动的日志并报告EXE的运行目录
    // 同时如果找不到当前目录则报错(Expect)
    tracing::info!("LogOutput --> StdOut.");
    tracing::info!("Current dir = {}", std::env::current_dir().expect("Unable to get current dir from env.").display());
    tracing::info!("RustBackend has Established.");

    // 2024 03.11 PM 5:56 logged by Kallen024
    // 启动tauri
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![stats_backend, sync])
        .run(tauri::generate_context!())
        .expect("error while running Kasforge application");
}
