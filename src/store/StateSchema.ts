import { ILoginData } from "../features/AuthByUserName/model/type/userSchema";

  
  export interface StateSchema {
    loginForm: IDataStoreStateType<ILoginData>;
  }
  
  export interface IDataStoreStateType<T> {
    fulfilled: boolean;
    loading: boolean;
    data?: T;
    error: string | undefined;
  }
  