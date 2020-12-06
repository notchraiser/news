import React, { useState, useEffect } from "react";
import { Grid, CircularProgress, Button} from "@material-ui/core";
import Article from "./Article";
import useStyles from "./styles";
import { useSelector, useDispatch } from 'react-redux';
import { loadArticles } from '../../actions';

const apikey = "a745c4c65e01443889e5cf862c2974f1";
let url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`;

export default function Articles() {
  const classes = useStyles();
/*
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((news) => {
        console.log(news);
        setArticles(news.articles);
      });
  }, []);
*/
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);


  return !articles.length ? (
    <CircularProgress />
  ) : (
    <Grid> 
    <Grid className={classes.container} container alignItems="stretch" spacing={3} >
      {articles.map((article, index) => (
        <Grid item key={`${index}_${article.source.id}`} xs={12} sm={4}>
          <Article article={article} />
        </Grid>
      ))}
    </Grid>
    <Grid container className={classes.load}>
    {/* <Button variant="contained" color="primary" disableElevation>
        {`Load More Articles`}
      </Button> */}
      </Grid>
    </Grid>
  );
}
