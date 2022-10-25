import {
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
} from "@mui/material";

const LatestNewsCard = () => (
  <Card sx={{ p: 2 }}>
    <List sx={{ py: 0 }}>
      <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
        <ListItemAvatar>
          <Skeleton
            variant="rectangular"
            width={120}
            height={80}
            sx={{ borderRadius: 2 }}
          />
        </ListItemAvatar>
        <ListItemText
          sx={{ py: 0, my: 0, px: 1 }}
          primary={<Skeleton variant="rectangular" height={18} />}
          secondary={
            <>
              <Skeleton variant="text" width={120} />
              <Skeleton variant="text" />
              <Skeleton variant="text" width={200} />
            </>
          }
        />
      </ListItem>
    </List>
  </Card>
);

export default LatestNewsCard;
