export interface Joke {
  width: Number; 
  height: Number; 
  format: String; 
  bytes: Number; 
  secure_url: String; 
}

export interface JokeInDB {
  width: Number; 
  height: Number; 
  format: String; 
  bytes: Number; 
  image_url: String,
  title: String,
  text: String,
}