import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";

const Content = () => {
  const data = {
    uuid: "3bce4bc8-6363-44a8-9a76-44ee1e05ebec",
    title: "Manchester United vs. Tottenham Hotspur",
    description:
      "Get a report of the Manchester United vs. Tottenham Hotspur 2022-23 English Premier League football match.",
    keywords: "",
    snippet:
      "Manchester United moved within a point of the Premier League's top four after a dominant 2-0 win over Tottenham Hotspur at Old Trafford on Wednesday.\n\nAfter fai...",
    url: "https://www.espn.co.uk/football/report?gameId=637937",
    image_url:
      "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1019%2Fr1078253_1296x729_16%2D9.jpg",
    language: "en",
    published_at: "2022-10-20T03:34:47.000000Z",
    source: "espn.co.uk",
    categories: ["sports"],
    relevance_score: null,
    locale: "gb",
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start" key={data.uuid} sx={{ py: 0 }}>
        <img
          src={`${data.image_url}`}
          srcSet={`${data.image_url}`}
          alt={data.title}
          loading="lazy"
          style={{
            height: 80,
            borderRadius: 12,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            marginRight: 10,
          }}
        />
        <ListItemText
          primary={
            <Typography
              component="h3"
              variant="h3"
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
            >
              {data.title}
            </Typography>
          }
          secondary={
            <>
              <Typography
                component="span"
                variant="subtitle2"
                sx={{
                  m: 0,
                }}
              >
                {data.source} &#183;{" "}
                <TimeAgo date={new Date(data.published_at)} />
              </Typography>
              <Typography
                component="span"
                variant="subtitle1"
                color="text.primary"
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1,
                  lineHeight: 1,
                }}
              >
                {data.snippet}
              </Typography>
            </>
          }
          sx={{
            my: 0,
          }}
        />
      </ListItem>
    </List>
  );
};

export default Content;
