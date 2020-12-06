import React, { useEffect } from "react";
import { Grid, CircularProgress, Typography} from "@material-ui/core";
import Article from "./Article";
import useStyles from "./styles";
import { useSelector, useDispatch } from 'react-redux';
import { loadArticles } from '../../actions';

export default function Articles() {
  const classes = useStyles();
  const { load, articles, error, searchtext } = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch, searchtext]);


  return load ? (
    <CircularProgress />    
  ) : (
    <div>
    {articles.length === 0  && error === "" && <Typography variant="h6"> There is no article for this search. </Typography>}
    {error === "Error" && <Typography variant="h6"> There is no article for this search. </Typography>}
    <Grid className={classes.container} container alignItems="stretch" spacing={3} >
      {articles.map((article, index) => (
        <Grid item key={`${index}_${article.source.id}`} xs={12} sm={4}>
          <Article article={article} />
        </Grid>
      ))}
    </Grid>
    </div>
  );
}
