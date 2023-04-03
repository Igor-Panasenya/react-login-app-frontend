import { BiCloudUpload } from 'react-icons/bi';
import { IoIosClose } from "react-icons/io";
import { useForm } from "react-hook-form";

function ModalAddBackground({ isVisibleModalAddBackground, setIsVisibleModalAddBackground }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmitLogin = data => {
      alert(JSON.stringify(data));
      setIsVisibleModalAddBackground(false);
      reset();
    }

  return (
    <div className={`${isVisibleModalAddBackground ? "modal modal-add-background visible" : "modal modal-add-background"}`}>
        
        <form onSubmit={handleSubmit(onSubmitLogin)} className="form">
            
            <h2 className="form-title"> Adding a Background </h2>
            <h3 style={{fontWeight: 500, textAlign: 'center'}}>
                You can add your own picture for the background
                <br/> and use it (but no more than three).
            </h3>

            <label className="label-image"> 
              <BiCloudUpload className="input-icon" />
              <input type="file" className="input-image" {...register("Username", { required: "This field is required" })} />
              {errors?.username && <span className="error"> {errors?.username?.message} </span>}
            </label>

            <input type="submit" value="Add Background" className="btn-submit" />

          </form>

        <IoIosClose
          className="btn-close-modal"
          onClick={() => setIsVisibleModalAddBackground(false)}
        />
    </div>
  );
}

export default ModalAddBackground;
