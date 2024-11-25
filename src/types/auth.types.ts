export interface RegisterDTO {
    email: string;
    password: string;
    name?: string;
  }
  
  export interface LoginDTO {
    email: string;
    password: string;
  }
  
  export interface SocialUserDTO {
    provider: string;
    providerId: string;
    email: string;
    name?: string;
  }