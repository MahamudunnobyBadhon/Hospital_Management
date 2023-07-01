import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import "./confirmdialogbox.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmDialogBox(props) {
  const handleClose = () => {
    props.onSetOpenDailog();
  };

  return (
    <Dialog
      className="confirmDialogBox"
      open={props.openDailog}
      TransitionComponent={Transition}
      keepMounted
      // onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title ">
        <div className="title">{<h6> {props.title}</h6>}</div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {props.isLoading ? (
            <i className="fas fa-spinner fa-pulse fa-2x"></i>
          ) : (
            <span className="des">{props.des}</span>
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {props.isLoading ? null : (
          <div>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => props.handleConfirmOkBtn()}
            >
              Ok
            </button>
            <button
              onClick={handleClose}
              type="button"
              className="btn btn-danger"
            >
              Close
            </button>
          </div>
        )}
      </DialogActions>
    </Dialog>
  );
}
