import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gridSpacing } from "../../store/constants";
import { selectNews, topNews } from "../../store/customization";
import CorauselNews from "./CorauselNews";
import HeadlineNews from "./HeadlineNews";
import LatestNews from "./LatestNews";
import SimilarNews from "./SimilarNews";

function Home() {
  let news = useSelector(selectNews);
  const dispatcher = useDispatch();
  // console.log(news);

  useEffect(() => {
    dispatcher(topNews(5));
  }, [dispatcher]);
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid
          container
          alignContent="center"
          justifyContent="space-between"
          spacing={gridSpacing}
        >
          <Grid item>
            <Typography variant="h2" sx={{ pb: 2, pl: 2 }}>
              Top News
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={9}>
            <CorauselNews data={news.data} />
            <Grid
              container
              spacing={gridSpacing}
              sx={{ flexDirection: "row-reverse", mt: 3 }}
            >
              <Grid item xs={12} md={8}>
                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                  spacing={gridSpacing}
                >
                  <Grid item>
                    <Typography variant="h2" sx={{ pb: 2, pl: 2 }}>
                      Latest News
                    </Typography>
                  </Grid>
                </Grid>
                <LatestNews />
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  position: "sticky",
                  top: 70,
                  height: 0,
                }}
              >
                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                  spacing={gridSpacing}
                >
                  <Grid item>
                    <Typography variant="h3">Similar News</Typography>
                  </Grid>
                </Grid>
                <SimilarNews />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            md={3}
            sx={{
              display: { xs: "none", md: "block" },
              position: "sticky",
              top: 70,
              height: 0,
            }}
          >
            <HeadlineNews />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
