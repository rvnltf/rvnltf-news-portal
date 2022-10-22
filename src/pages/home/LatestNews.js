import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";
import LatestNewsCard from "../../components/cards/Skeleton/LatestNewsCard";

const LatestNews = () => {
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([
    {
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
    },
    {
      uuid: "af6ca080-7bb7-4afe-83a3-27872f394506",
      title:
        "Starting strong: Raptors edge Cavaliers to kick off daunting schedule",
      description:
        "It wasn't perfect, but it was a promising start for the Toronto Raptors. Facing another team with designs on contending in the East, the Raptors edged the Cleve...",
      keywords: "",
      snippet:
        "Select Your Favourite Teams\n\nSelect as many teams as you like from the leagues below. You can change your selection at any time.\n\nSelections might be changed at...",
      url: "https://www.sportsnet.ca/nba/article/starting-strong-raptors-edge-cavaliers-to-kick-off-daunting-schedule/",
      image_url:
        "https://www.sportsnet.ca/wp-content/uploads/2022/10/barnes-1040x572.jpg",
      language: "en",
      published_at: "2022-10-20T03:34:37.000000Z",
      source: "sportsnet.ca",
      categories: ["sports"],
      relevance_score: null,
      locale: "ca",
    },
    {
      uuid: "9fb9b10c-c475-4a90-bbd4-3fb2ce011210",
      title: "Saif rules out deal with Taliban",
      description:
        "Barrister Saif said he requests the Taliban leaders to call back their fighters from Pakistan",
      keywords: "",
      snippet:
        "Barrister Saif says the Taliban returned without the government's consent.\n\nSays there is no deal with the Taliban leadership.\n\nSays he requests the Taliban to ...",
      url: "https://www.geo.tv/latest/447308-saif-rules-out-deal-with-taliban",
      image_url:
        "https://www.geo.tv/assets/uploads/updates/2022-10-20/447308_033709_updates.jpg",
      language: "en",
      published_at: "2022-10-20T03:32:55.000000Z",
      source: "geo.tv",
      categories: ["general"],
      relevance_score: null,
      locale: "pk",
    },
    {
      uuid: "5ff5cba1-918e-4356-8d7c-1d66648ec98a",
      title:
        "As fuel prices rise and fall, those making a living on the road say they've been hit hard",
      description:
        "Prices for fuels such as gasoline, diesel, and furnace oil were all lowered Thursday across Newfoundland and Labrador, but the price of stove oil skyrocketed a...",
      keywords: "",
      snippet:
        "Don Howlett of Akita Equipment says the price of fuel is greatly impacting how they do their business on a day-to-day basis. (Garrett Barry/CBC)\n\nThe price of s...",
      url: "https://www.cbc.ca/news/canada/newfoundland-labrador/nl-fuel-prices-october-20-1.6622066?cmp=rss",
      image_url:
        "https://i.cbc.ca/1.6622129.1666204710!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/don-howlett-akita.JPG",
      language: "en",
      published_at: "2022-10-20T03:32:00.000000Z",
      source: "cbc.ca",
      categories: ["general"],
      relevance_score: null,
      locale: "ca",
    },
    {
      uuid: "60434394-ad65-4766-bfc0-acda76803027",
      title: "Elche vs. Real Madrid",
      description:
        "Get a report of the Elche vs. Real Madrid 2022-23 LaLiga football match.",
      keywords: "",
      snippet:
        "Despite three disallowed goals, Real Madrid easily takes down Elche 3-0. (2:53)\n\nFederico Valverde, Karim Benzema and Marco Asensio scored to give Real Madrid a...",
      url: "https://www.espn.co.uk/football/report?gameId=643868",
      image_url:
        "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1019%2Fr1078264_1296x729_16%2D9.jpg",
      language: "en",
      published_at: "2022-10-20T03:30:45.000000Z",
      source: "espn.co.uk",
      categories: ["sports"],
      relevance_score: null,
      locale: "gb",
    },
  ]);

  return (
    <>
      {isLoading ? (
        <>
          <LatestNewsCard />
          <LatestNewsCard />
          <LatestNewsCard />
        </>
      ) : (
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {data.map((v, i) => {
            return (
              <>
                <Link to={`/${v.uuid}`} style={{ textDecoration: "none" }}>
                  <ListItem alignItems="flex-start" key={v.uuid} sx={{ py: 0 }}>
                    <img
                      src={`${v.image_url}`}
                      srcSet={`${v.image_url}`}
                      alt={v.title}
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
                          {v.title}
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
                            {v.source} &#183;{" "}
                            <TimeAgo date={new Date(v.published_at)} />
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
                            {v.snippet}
                          </Typography>
                        </>
                      }
                      sx={{
                        my: 0,
                      }}
                    />
                  </ListItem>
                </Link>
                {i + 1 < data.length && (
                  <Divider component="li" sx={{ my: 2 }} />
                )}
              </>
            );
          })}
        </List>
      )}
    </>
  );
};

export default LatestNews;
