import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeAlert } from "../Redux/Slices/alertSlice";
import { useHistory } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledAlert = styled(MuiAlert)(({ theme }) => ({
  backgroundColor: 'var(--bg-glass)',
  backdropFilter: 'blur(20px)',
  border: '1px solid var(--border-primary)',
  borderRadius: 'var(--radius-xl)',
  color: 'var(--text-primary)',
  fontWeight: 'var(--font-weight-medium)',
  fontSize: 'var(--font-size-sm)',
  boxShadow: 'var(--shadow-2xl)',
  
  '& .MuiAlert-icon': {
    color: 'var(--primary-600)',
  },
  
  '& .MuiAlert-action': {
    color: 'var(--text-primary)',
  },
}));

const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  '& .MuiSnackbar-root': {
    backgroundColor: 'transparent',
  },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <StyledAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertSnackBar = () => {
  const dispatch = useDispatch();
  const { open, message, severity, duration, nextRoute } = useSelector(
    (state) => state.alert
  );
  const history = useHistory();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(closeAlert());
    try {
      history.push(nextRoute);
    } catch (error) {}
  };

  return (
    <>
      <StyledSnackbar
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </StyledSnackbar>
    </>
  );
};

export default AlertSnackBar;
