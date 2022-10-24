import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gridSpacing } from "../../store/constants";
import {
  allNews,
  headlineNews,
  selectAllNews,
  selectHeadlineNews,
  selectSources,
  selectTopNews,
  sources,
  topNews,
} from "../../store/customization";
import CorauselNews from "./CorauselNews";
import HeadlineNews from "./HeadlineNews";
import LatestNews from "./LatestNews";
import SimilarNews from "./SimilarNews";
import SourceList from "./SourceList";

function Home() {
  const topNewsData = useSelector(selectTopNews);
  // const topNewsData = [];
  const allNewsData = useSelector(selectAllNews);
  // const allNewsData = [];
  const headlineNewsData = useSelector(selectHeadlineNews);
  // const headlineNewsData = [];

  const sourceData = useSelector(selectSources);

  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(sources());
    dispatcher(headlineNews());
    dispatcher(topNews({ limit: 5, local: "us" }));
    dispatcher(allNews({ limit: 5, local: "us" }));
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
            <CorauselNews data={topNewsData.data} />
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
                <LatestNews data={allNewsData.data} />
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
                    <Typography variant="h3">Source List</Typography>
                  </Grid>
                </Grid>
                {/* <SourceList data={sourceData.data} /> */}
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
            <HeadlineNews data={headlineNewsData[0]} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
