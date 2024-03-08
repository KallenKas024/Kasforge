#[derive(Clone, serde::Serialize)]
pub struct Payload {
    message: String,
}

impl Payload {
    pub fn new(message: String) -> Payload {
        Payload { message }
    }

    pub fn get(self) -> String {
        self.message
    }

    pub fn set(mut self, new_message: String) {
        self.message = new_message;
    }
}