import React from "react";

import "./styles.css";

const Modal = (props) => {
    const { className, modalRef } = props;

    return(
        <div ref={modalRef} className={`${className} modal`}>
            <p>Meu modal!</p>
        </div>
    )
}

export default Modal;