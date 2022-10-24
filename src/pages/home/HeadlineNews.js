import { ChevronRightOutlined } from "@mui/icons-material";
import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MainCard from "../../components/cards/MainCard";
import SkeletonPopularCard from "../../components/cards/Skeleton/HeadlineCard";
import { gridSpacing } from "../../store/constants";

const HeadlineNews = ({ data }) => {
  // const [data, setData] = useState({
  //   uuid: "df4ad427-a672-4c67-b6c6-6f81aa00e164",
  //   title:
  //     "Tesla stock jumps after announcement it will join S&P 500 in one go",
  //   description:
  //     "Tesla's stock price surged early Tuesday after the company b...",
  //   keywords: "Business, s&p 500, stocks, tesla",
  //   snippet:
  //     "Tesla’s stock price surged early Tuesday after the company, Tesla’s stock price surged early Tuesday after the company, Tesla’s stock price surged early Tuesday after the company, Tesla’s stock price surged early Tuesday after the company",
  //   url: "https://nypost.com/2020/12/01/tesla-stock-jumps-on-news-it-will-join-sp-500-in-one-shot/",
  //   image_url:
  //     "https://nypost.com/wp-content/uploads/sites/2/2020/12/tesla-52.jpg?quality=90&strip=all&w=1200",
  //   language: "en",
  //   published_at: "2020-12-01T14:35:46.000000Z",
  //   source: "nypost.com",
  //   categories: ["business"],
  //   relevance_score: 153.61266,
  // });
  return (
    <>
      {!data ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography variant="h3">Headline News</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ pt: "16px !important" }}>
                <img
                  src={`${data.image_url}`}
                  srcSet={`${data.image_url}`}
                  alt={data.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    borderRadius: 12,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
                <Typography sx={{ mt: 1 }} variant="h4" noWrap={true}>
                  {data.title}
                </Typography>
                <Typography variant="subtitle2" sx={{}}>
                  {data.snippet.substring(0, 200)}...
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: "flex-end" }}>
            <Button size="small" disableElevation>
              View All
              <ChevronRightOutlined />
            </Button>
          </CardActions>
        </MainCard>
      )}
    </>
  );
};

export default HeadlineNews;
