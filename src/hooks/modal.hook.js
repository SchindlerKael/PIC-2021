import { useState, useRef } from 'react';


const useModal = (callback) => {
  const [modal, setModal] = useState(""); 
  const modalRef = useRef(null);

  const toggleModal = () => {
    setModal("show");
    document.body.addEventListener("click", closeModal);
  }

  const closeModal = event => {
    event.stopPropagation();
    const contain = modalRef.current.contains(event.target);
    if (!contain) { 
      setModal("");
      document.body.removeEventListener("click", closeModal);
    }
  };

    return [{ modal, modalRef }, toggleModal];
  };
  
  export default useModal;