export interface Breed {
    name: string;
    image: string;
    description: string;
  }
  
  export interface ApiResponse {
    message: Record<string, string[]>;
    status: string;
  }
  