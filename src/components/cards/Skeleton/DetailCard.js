import { Card, CardContent, Grid, Skeleton } from "@mui/material";
import { gridSpacing } from "../../../store/constants";

const DetailCard = () => (
  <Card>
    <CardContent>
      <Grid container spacing={gridSpacing}>
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
                  <Skeleton variant="rectangular" height={30} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Skeleton variant="rectangular" height={12} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Skeleton
            variant="rectangular"
            height={400}
            sx={{ borderRadius: 3 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
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
  </Card>
);

export default DetailCard;
