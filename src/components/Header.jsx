import {useAuthStore, useBackground} from "../store/store";
import {MdDeleteForever} from "react-icons/md";
import ModalDeleteBackground from "./ModalDeleteBackground";
import {useState} from "react";


function Header({ changeBackground, setIsVisibleModalEditProfile, setIsVisibleModalAddBackground, isAuthUser }) {

  const backgrounds = useBackground((state) => state.backgroundList);
  const [isVisibleModalDeleteBackground, setIsVisibleModalDeleteBackground] = useState(false);
  const username = useAuthStore(state => state.username);

    return (
      <header className="header">
        <div className="header-container">

            <ModalDeleteBackground
                setIsVisibleModalDeleteBackground={setIsVisibleModalDeleteBackground}
                isVisibleModalDeleteBackground={isVisibleModalDeleteBackground}
            />

            {username && <h2> Hello, {username} </h2>}

            <div className="themes">

              {backgrounds.map(theme =>
                <div
                  key={theme}
                  className="theme"
                  >
                    <div
                        className="theme-image"
                        style={{backgroundImage: `url(${theme})`}}
                        onClick={() => changeBackground(theme)}
                    ></div>

                    {username &&
                        <MdDeleteForever
                            className="background-delete"
                            onClick={() => setIsVisibleModalDeleteBackground(true)}
                        />
                    }

                </div>
                )}

                {username &&
                    <div
                        className="theme"
                        onClick={() => setIsVisibleModalAddBackground(true)}
                    >
                        +
                    </div>
                }

            </div>

            {username &&
                <button
                    className="btn"
                    onClick={() => setIsVisibleModalEditProfile(true)}
                >
                    edit profile
                </button>
            }

        </div>
      </header>
    );
  }
  
  export default Header;
  