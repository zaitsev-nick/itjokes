export interface Joke {
  width: number; 
  height: number; 
  format: string; 
  bytes: number; 
  secure_url: string; 
}

export interface JokeInDB {
  id: Key; 
  width: number; 
  height: number; 
  format: string; 
  bytes: number; 
  image_url: string,
  title: string,
  text: string,
}