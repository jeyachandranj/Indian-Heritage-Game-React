import React from "react";
import ReactDOM from "react-dom";
import styles from "./ModalElement.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={styles.backdrop} ></div>;
};

const Modal = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

const ModalElement = (props) => {
  return(
      <>
      {ReactDOM.createPortal(
          <Backdrop onClick={props.onClick}></Backdrop>,
          document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
          <Modal onClick={props.onClick}>{props.children}</Modal>,
          document.getElementById("modal-root")
      )}
      </>
  );
};

export default ModalElement;
