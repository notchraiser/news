import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  box: {
    background: '#f2f2f2',
    minHeight: '100vh',
    position: 'relative',
  },
  heading: {
    margin: "0 0 20px 0",
    padding: "10px 20px",
    boxShadow: "1px 1px 8px rgba(0, 0, 0, 0.6)",
    position: "sticky",
    top: 0,
    background: "#f2f2f2",
    zIndex: 10,
    overflow: "hidden",
  },
  footer: {
    position:'absolute',
    bottom: 0,
    width: '100%',
    margin: "20px 0 0 0",
    color: "#fff",
    background: "#000",
    zIndex: 10,
    overflow: "hidden",
    boxShadow: "-1px -1px 8px rgba(0, 0, 0, 0.6)",
  },
}));
