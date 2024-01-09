export interface ILoginSchema {
    userInfo: ILoginData;
    isLoading?: boolean;
    error?: string;
    success?: boolean;
  }
  
  export interface ILoginData {
    access: string;
    refresh: string;
  }
  