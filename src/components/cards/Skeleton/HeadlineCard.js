// material-ui
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

// project imports
import { gridSpacing } from "../../../store/constants";

// ==============================|| SKELETON - POPULAR CARD ||============================== //

const PopularCard = () => (
  <Card>
    <CardContent>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={gridSpacing}
          >
            <Grid item xs zeroMinWidth>
              <Typography variant="h3">Headline News</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Skeleton
            variant="rectangular"
            height={150}
            sx={{ borderRadius: 3 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                spacing={gridSpacing}
                justifyContent="space-between"
              >
                <Grid item xs={12}>
                  <Skeleton variant="rectangular" height={20} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="rectangular" height={20} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Skeleton variant="rectangular" height={15} />
            </Grid>
            <Grid item xs={12}>
              <Skeleton variant="rectangular" height={15} />
            </Grid>
            <Grid item xs={12}>
              <Skeleton variant="rectangular" height={15} />
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="rectangular" height={15} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
    <CardContent
      sx={{
        display: "flex",
        pt: 0,
        pr: 3,
        justifyContent: "flex-end",
      }}
    >
      <Skeleton variant="rectangular" height={20} width={75} />
    </CardContent>
  </Card>
);

export default PopularCard;
