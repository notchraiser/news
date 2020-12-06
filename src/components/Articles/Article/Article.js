import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import moment from "moment";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import NoImage from "../../../images/noimage.png";

export default function Article({ article }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={article.urlToImage ?? NoImage} title={article.title ?? article.source.name} />
      <div className={classes.overlay}>
        <Typography variant="h6">{article.source.name}</Typography>
        <Typography variant="body2">{moment(article.publishedAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small">
          <StarBorderIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          #{article.source.name}
        </Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h6" component="h2" >{article.title}</Typography>
      <CardContent>
        <Typography align="justify" variant="body2" color="textSecondary" gutterBottom component="p" >{article.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />&nbsp;{`Like `}
        </Button>
        <Button size="small" color="primary" onClick={() => {window.open(`${article.url}`,'_blank')}}>
          {` Read More `}
        </Button>
      </CardActions>
    </Card>
  );
}
