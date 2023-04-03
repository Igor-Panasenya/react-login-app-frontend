import { useForm } from "react-hook-form";
import { HiUser } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';
import { registerUser } from '../http/index';
import { useAuthStore } from "../store/store";
import {useState} from "react";
import LoaderSpinner from "./loaderSpinner";
import convertToBase64 from "../helper/converter";

function FormRegister({ setActiveForm, setIsVisibleModalLogin }) {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [file, setImage] = useState('sfdgb');
  const setUsername = useAuthStore(state => state.setUsername);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitRegister = async (data) => {
      setIsLoading(true);
      const {email, password, username} = data;

      const res = await registerUser({ username, email, password, file});

      if(res.status === 200) {
          setUsername(username)
          setIsVisibleModalLogin(false);
          reset();
      } else {
          alert(res.data)
      }
      setIsLoading(false);
  };

  const onUpload = async e => {
      const base64 = await convertToBase64(e.target.files[0]);
      setImage(base64);
  }

  return (

    <>
      <form onSubmit={handleSubmit(onSubmitRegister)} className="form form-register">
            
            <h2 className="form-title"> Register </h2>

            <label className="label-photo">

                {file ? <img src={file} alt="photo" className="user-image" /> : <HiUser className="input-icon" />}

              <input type="file" className="input-photo" {...register("image", {onChange: (e) => onUpload(e)})} />

            </label>

            <label> 
              <HiUser className="input-icon" />
              <input placeholder="Username" {...register("username", { required: "This field is required" })} />
              {errors?.username && <span className="error"> {errors?.username?.message} </span>}
            </label>

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
            
            <input type="submit" value="Register" className="btn-submit" />

            <div className="post-form-text">

              Already have an account?

              <button
                type="button"
                className="btn-register"
                onClick={() => setActiveForm('login')}
              >
                Login
              </button>

            </div>

          { isLoading && <LoaderSpinner /> }

      </form>

    </>
    
  );
}

export default FormRegister;
