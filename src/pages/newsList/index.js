import { Grid, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { gridSpacing, locale } from "../../store/constants";
import Content from "./Content";
import TopNews from "./TopNews";

const NewsList = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  let search = locale.find((v) => v.code === q);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <Grid item>
              <Typography variant="h2" sx={{ pl: 2 }}>
                Search for "{search ? search.country : q}"
              </Typography>
            </Grid>
            <Content />
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              display: { xs: "none", md: "block" },
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
                <Typography variant="h3">Top News</Typography>
              </Grid>
            </Grid>
            <TopNews />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewsList;
