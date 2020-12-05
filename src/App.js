import { Container, Grid } from "@material-ui/core";
import Header from "./components/Header";
import Articles from "./components/Articles";
import useStyles from "./styles";

export default function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Container>
        <Grid>
          <Header />
          <Articles />
        </Grid>
      </Container>
    </Container>
  );
}
