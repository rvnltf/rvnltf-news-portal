import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactTimeago from "react-timeago";
import DetailCard from "../../components/cards/Skeleton/DetailCard";
import { gridSpacing } from "../../store/constants";
import { newsByUuid, selectNewsById } from "../../store/customization";
import SimilarNews from "../home/SimilarNews";
import Content from "./Content";
import TopNews from "./TopNews";

const Detail = () => {
  const { uuid } = useParams();
  const data = useSelector(selectNewsById);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsByUuid(uuid));
  }, [dispatch, uuid]);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            {!data ? (
              <>
                <DetailCard />
              </>
            ) : (
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item sx={{ pb: 2 }} alignSelf={"flex-start"}>
                  <Typography variant="h2">{data.title}</Typography>
                  <Typography component="span" variant="subtitle2">
                    {data.source} &#183;{" "}
                    <ReactTimeago date={new Date(data.published_at)} />
                  </Typography>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="text.primary"
                  />
                </Grid>

                <Grid item>
                  <img
                    src={`${data.image_url}`}
                    srcSet={`${data.image_url}`}
                    alt={data.title}
                    loading="lazy"
                    style={{
                      height: 400,
                      borderRadius: 12,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  />

                  <Typography variant="body1">{data.description}</Typography>
                </Grid>
              </Grid>
            )}
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
                <Typography variant="h3">Similar News</Typography>
              </Grid>
            </Grid>
            <SimilarNews />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Detail;
