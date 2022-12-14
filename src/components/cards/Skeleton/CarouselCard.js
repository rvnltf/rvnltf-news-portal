import { Card, Skeleton } from "@mui/material";

const CarouselCard = () => (
  <Card sx={{ p: 2 }}>
    <Skeleton variant="rectangular" height={400} sx={{ borderRadius: 5 }} />
  </Card>
);

export default CarouselCard;
