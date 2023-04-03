import React from 'react';

const Greetings = ({ setIsVisibleModalLogin }) => {
    return (
        <div className="greetings">

            <h1> Welcome to my Register App! &#128075; </h1>

            <br /><br />

            <p className="greetings-text">
                I designed this service so that you can understand my abilities in the
                registration process and make it quick and easy for you. Just a few simple steps
                and you'll be able to experience the whole process of registering, updating and
                deleting your data, and restoring your password with OTP verify and email.
                <br /><br />
                Don't be put off registering for later, I'm sure you'll be satisfied!
            </p>

            <button
                className="btn"
                onClick={() => setIsVisibleModalLogin(true)}
            >
                Register
            </button>

        </div>
    );
};

export default Greetings;