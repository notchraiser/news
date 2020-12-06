import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  maincontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },  
  heading: {
    fontSize: "1.6rem",
    fontFamily: "Ubuntu",
    letterSpacing: "1px",
    color: "#2d2e2f",
    // boxShadow: '1px 1px 8px rgba(0, 0, 0, 0.6)',
    position: "sticky",
    top: 0,
    background: "#f2f2f2",
    zIndex: 10,
  },
  [theme.breakpoints.down("xs")]: {
    maincontainer: {
      justifyContent: 'center',
   },
  },
}));
