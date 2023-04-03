import { IoIosClose } from "react-icons/io";

import { useForm } from "react-hook-form";
import { FiUser } from 'react-icons/fi';
import { HiUser, HiUsers } from 'react-icons/hi';
import { RiUser6Fill } from 'react-icons/ri';



function ModalEditProfile({ isVisibleModalEditProfile, setIsVisibleModalEditProfile }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmitLogin = data => {
      alert(JSON.stringify(data));
      setIsVisibleModalEditProfile(false);
      reset();
    }

  return (
    <div className={`${isVisibleModalEditProfile ? "modal modal-edit-profile visible" : "modal modal-edit-profile"}`}>
        
        <form onSubmit={handleSubmit(onSubmitLogin)} className="form">
            
            <h2 className="form-title"> Edit Profile </h2>

            <label className="label-photo"> 
              <HiUser className="input-icon" />
              <input type="file" className="input-photo" {...register("Username", { required: "This field is required" })} />
              {errors?.username && <span className="error"> {errors?.username?.message} </span>}
            </label>

            <label> 
              <HiUser className="input-icon" />
              <input placeholder="Username" {...register("username", { required: "This field is required" })} />
              {errors?.username && <span className="error"> {errors?.username?.message} </span>}
            </label>

            <label> 
              <FiUser className="input-icon" />
              <input placeholder="First Name" type="text" {...register("firstName", { required: "This field is required" })} />
              {errors?.firstName && <span className="error"> {errors?.firstname?.message} </span>}
            </label>

            <label> 
              <RiUser6Fill className="input-icon" />
              <input placeholder="Last Name" type="text" {...register("lastName", { required: "This field is required" })} />
              {errors?.lastName && <span className="error"> {errors?.lastName?.message} </span>}
            </label>

            <label> 
              <HiUsers className="input-icon" />
              <input placeholder="Company" type="text" {...register("company", { required: "This field is required" })} />
              {errors?.company && <span className="error"> {errors?.company?.message} </span>}
            </label>

            <input type="submit" value="Submit" className="btn-submit" />

          </form>

        <IoIosClose
          className="btn-close-modal"
          onClick={() => setIsVisibleModalEditProfile(false)}
        />
    </div>
  );
}

export default ModalEditProfile;
