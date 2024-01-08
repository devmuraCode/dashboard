import logo from "../assets/logo.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../store/store";
import { postData } from "../services/postUser";

type Inputs = {
  username: string;
  password: string;
};

const Auth = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    return dispatch(postData(data));
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="head-bg"></div>
      <div className="w-full md:w-[34.5rem] h-full md:h-[100vh] bg-blue rounded-tl-[2.5rem] md:rounded-tl-[2.5rem] rounded-tr-[2.5rem] md:rounded-tr-none rounded-bl-none md:rounded-bl-[2.5rem]">
        <div className="flex justify-center mt-[7rem]">
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-auto px-4 md:px-0">
            <div>
              <label htmlFor="login" className="block font-inter font-normal text-3xl leading-label text-white">
                Логин
              </label>
              <input
                type="text"
                {...register("username", { required: true })}
                className="block w-full h-[3.5rem] rounded-[1rem] border-2 border-white outline-none text-white bg-sides px-2.5 text-lg"
                id="login"
                required
              />
            </div>
            <div className="mt-[2rem]">
              <label htmlFor="Password" className="block font-inter font-normal text-3xl leading-label text-white">
                Пароль
              </label>
              <input
                type="Password"
                {...register("password", { required: true })}
                className="block w-full h-[3.5rem] rounded-[1rem] border-2 border-white outline-none text-white bg-sides px-2.5 text-lg"
                id="Password"
                required
              />
            </div>
            <button type="submit" className="w-full md:w-auto py-[13px] md:px-[164px] rounded-xl bg-white sides border-0 font-roboto font-medium text-[1.5rem] leading-label mt-28">
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
