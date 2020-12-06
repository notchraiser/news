import { Box, Container, Grid } from "@material-ui/core";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import useStyles from "./styles";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <Box className={classes.box}>
        <Box className={classes.heading}>
          <Header />
        </Box>
        <Container maxWidth="lg">
          <Grid>
            <Articles />
          </Grid>
        </Container>
        <Box className={classes.footer}>
          <Footer />
        </Box>
      </Box>
    </Provider>
  );
}
