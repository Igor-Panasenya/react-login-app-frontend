import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";
import UsersList from "./components/UsersList";
import { useState } from "react";
import { IoIosClose } from 'react-icons/io';
import Header from "./components/Header";
import {useAuthStore, useBackground} from "./store/store";
import ModalEditProfile from "./components/ModalEditProfile";
import ModalAddBackground from "./components/ModalAddBackground";
import Greetings from "./components/Greetings";

function App() {

  const [isVisibleModalLogin, setIsVisibleModalLogin] = useState(false);
  const [isVisibleModalEditProfile, setIsVisibleModalEditProfile] = useState(false);
  const [isVisibleModalAddBackground, setIsVisibleModalAddBackground] = useState(false);

  const username = useAuthStore(state => state.username);

  const [activeForm, setActiveForm] = useState('register');

  const background = useBackground((state) => state.background);
  const changeBackground = useBackground((state) => state.changeBackground);

  return (
    <div className="main" style={{backgroundImage: `url(${background})`}} >

      <Header
        setIsVisibleModalEditProfile={setIsVisibleModalEditProfile}
        setIsVisibleModalAddBackground={setIsVisibleModalAddBackground}
        changeBackground={changeBackground}
      />

      <div className={`${isVisibleModalLogin ? "modal modal-login visible" : "modal modal-login"}`}>

        <IoIosClose
          className="btn-close-modal"
          onClick={() => setIsVisibleModalLogin(false)}
        />

        <div className={`${activeForm === "register" ? "forms" : "forms login"}`}>

          <div className={`${activeForm === "register" ? "wrapper" : "wrapper login"}`}>

          <FormRegister setActiveForm={setActiveForm} setIsVisibleModalLogin={setIsVisibleModalLogin} />
          <FormLogin setActiveForm={setActiveForm} setIsVisibleModalLogin={setIsVisibleModalLogin} />

          </div>

        </div>

      </div>

      <ModalEditProfile isVisibleModalEditProfile={isVisibleModalEditProfile} setIsVisibleModalEditProfile={setIsVisibleModalEditProfile} />
      <ModalAddBackground isVisibleModalAddBackground={isVisibleModalAddBackground} setIsVisibleModalAddBackground={setIsVisibleModalAddBackground} />

        {!username && <Greetings setIsVisibleModalLogin={setIsVisibleModalLogin} />}

        {username && <UsersList />}

      <footer className="footer">
        All rights reserved | 2023
      </footer>

    </div>
  );
}

export default App;
