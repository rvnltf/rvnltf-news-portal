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

const SimilarCard = () => (
  <Card sx={{ p: 2 }}>
    <List sx={{ py: 0 }}>
      <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
        <ListItemAvatar>
          <Skeleton
            variant="rectangular"
            width={70}
            height={70}
            sx={{ borderRadius: 2 }}
          />
        </ListItemAvatar>
        <ListItemText
          sx={{ py: 0, my: 0, px: 1 }}
          primary={<Skeleton variant="rectangular" height={20} />}
          secondary={<Skeleton variant="text" />}
        />
      </ListItem>
    </List>
  </Card>
);

export default SimilarCard;
