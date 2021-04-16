import React from "react";

import "./styles.css";

const Modal = (props) => {
    const { className, title, modalRef } = props;

    return(
        <div className={`${className} modal`}>
            <div ref={modalRef} className="modal-content">
                <div className="modal-title">
                    <h2>{title}</h2>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;