import PropTypes from "prop-types";

// material-ui
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// project imports
import MainCard from "../../components/cards/MainCard";

// assets
import { Link } from "react-router-dom";

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

const TopNews = () => {
  const theme = useTheme();
  const data = [
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
  ];

  return (
    <>
      {!data ? (
        // <TotalIncomeCard />
        <></>
      ) : (
        data.map((v, i) => {
          return (
            <>
              <Link to={`/${v.uuid}`} style={{ textDecoration: "none" }}>
                <MainCard border={true} content={false} sx={{ my: 1 }}>
                  <Box sx={{ p: 1 }}>
                    <List sx={{ py: 0 }}>
                      <ListItem
                        alignItems="center"
                        disableGutters
                        sx={{ py: 0 }}
                      >
                        <ListItemAvatar sx={{ mr: 1 }}>
                          <Avatar
                            variant="rounded"
                            sx={{
                              ...theme.typography.commonAvatar,
                              ...theme.typography.extraLargeAvatar,
                              backgroundColor: theme.palette.warning.light,
                              color: theme.palette.warning.dark,
                            }}
                          >
                            <img
                              src={`${v.image_url}`}
                              srcSet={`${v.image_url}`}
                              alt={v.title}
                              loading="lazy"
                              style={{
                                height: 70,
                              }}
                            />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          sx={{
                            py: 0,
                            mt: 0.45,
                            mb: 0.45,
                          }}
                          primary={
                            <Typography
                              component="h5"
                              variant="h5"
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
                            <Typography
                              variant="subtitle2"
                              sx={{
                                color: theme.palette.grey[500],
                                mt: 0.5,
                              }}
                            >
                              {v.source}
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                  </Box>
                </MainCard>
              </Link>
            </>
          );
        })
      )}
    </>
  );
};

TopNews.propTypes = {
  isLoading: PropTypes.bool,
};

export default TopNews;
