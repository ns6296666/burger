import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={classes.Backdrop} onClick={props.onClose}/>;
};

const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        portalElement
      )}
    </div>
  );
};
export default Modal;
