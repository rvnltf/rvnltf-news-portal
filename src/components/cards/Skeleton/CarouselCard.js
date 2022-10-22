// material-ui
import {
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
} from "@mui/material";

// ==============================|| SKELETON - TOTAL INCOME DARK/LIGHT CARD ||============================== //

const CarouselCard = () => (
  <Card sx={{ p: 2 }}>
    <Skeleton variant="rectangular" height={400} sx={{ borderRadius: 5 }} />
  </Card>
);

export default CarouselCard;
