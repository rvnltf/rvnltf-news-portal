import { ChevronRightOutlined } from "@mui/icons-material";
import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import MainCard from "../../components/cards/MainCard";
import SkeletonPopularCard from "../../components/cards/Skeleton/HeadlineCard";
import { gridSpacing } from "../../store/constants";

const HeadlineNews = ({ data }) => {
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
                {/* <Typography variant="subtitle2" sx={{}}>
                  {data.snippet.substring(0, 200)}...
                </Typography> */}
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
