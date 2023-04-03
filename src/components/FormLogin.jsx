import { useForm } from "react-hook-form";
import { MdEmail } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';
import {loginUser} from "../http";
import {useAuthStore} from "../store/store";
import {Triangle} from "react-loader-spinner";
import {useState} from "react";
import LoaderSpinner from "./loaderSpinner";

function FormLogin({ setActiveForm, setIsVisibleModalLogin, setIsAuthUser }) {
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const setUsername = useAuthStore(state => state.setUsername);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmitLogin = async (data) => {
      setIsLoading(true);

      const {email, password} = data;

      const res = await loginUser({email, password});

      if(res.status === 200) {
          setUsername(res.data.username);
          setIsVisibleModalLogin(false);
          setTimeout(() => setActiveForm('register'), 1000);
          reset();
      } else {
          alert(res.data)
      }

      setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmitLogin)} className="form form-login">
            
            <h2 className="form-title"> Login </h2>

            <label> 
              <MdEmail className="input-icon" />
              <input
                placeholder="E-Mail"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                    message: "Invalid email address"
                  }
                  })} />
              {errors?.email && <span className="error"> {errors?.email?.message} </span>}
            </label>

            <label> 
              <AiFillLock className="input-icon" />
              <input placeholder="Password" type="password" {...register("password", { required: "This field is required" })} />
              {errors?.password && <span className="error"> {errors?.password?.message} </span>}
            </label>
            
            <input type="submit" value="Sign In" className="btn-submit" />

            <div className="post-form-text">

              Don't have an account?

              <button
                type="button"
                className="btn-register"
                onClick={() => setActiveForm('register')}
              >
                Register
              </button>

            </div>

            { isLoading && <LoaderSpinner /> }

          </form>
  );
}

export default FormLogin;
