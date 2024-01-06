import { useForm, SubmitHandler } from "react-hook-form";
import s from "./Auth.module.css";
// import logo from "../../assets/logo.svg";

type Inputs = {
  example: string;
  exampleRequired: string;
};
const Auth = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    reset();
  };
  

  return (
    <div className={s.bg}>
      <div className={s.fon_background}></div>

      <div className={s.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form_group_one}>
            <label htmlFor="login" className={s.form_label}>
              Логин
            </label>
            <input type="text" {...register("example", { required: true })} className={s.form_control} id="login" required />
          </div>
          <div className={s.form_group_two}>
            <label htmlFor="Password" className={s.form_label}>
              Пароль
            </label>
            <input type="Password" {...register("exampleRequired", { required: true })} className={s.form_control} id="Password" required/>
          </div>
          <button type="submit" className={s.form_btn}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
