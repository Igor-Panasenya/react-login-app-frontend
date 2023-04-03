import React from 'react';

const ModalDeleteBackground = ({ isVisibleModalDeleteBackground, setIsVisibleModalDeleteBackground }) => {
    return (
        <div className={`${isVisibleModalDeleteBackground ? "modal-delete-background visible" : "modal-delete-background"}`}>
            <h2> Do you really want to delete this background? </h2>

            <div className="btns">
                <button className="btn" onClick={() => setIsVisibleModalDeleteBackground(false)}> Yes </button>
                <button className="btn" onClick={() => setIsVisibleModalDeleteBackground(false)}> No </button>
            </div>

        </div>
    );
};

export default ModalDeleteBackground;