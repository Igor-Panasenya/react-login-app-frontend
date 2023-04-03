import React from 'react';
import {Triangle} from "react-loader-spinner";

const LoaderSpinner = () => {
    return (
        <div className="spinner-loader">
            <Triangle
                height="200"
                width="200"
                color="#F0F0F07A"
                ariaLabel="triangle-loading"
                visible={true}
            />
        </div>
    );
};

export default LoaderSpinner;