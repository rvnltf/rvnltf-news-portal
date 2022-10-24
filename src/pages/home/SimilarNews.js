import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MainCard from "../../components/cards/MainCard";
import { Link, useParams } from "react-router-dom";
import SimilarCard from "../../components/cards/Skeleton/SimilarCard";
import { useDispatch, useSelector } from "react-redux";
import { selectSimilarNews, similarNews } from "../../store/customization";
import { useEffect } from "react";

const SimilarNews = () => {
  const theme = useTheme();
  const { uuid } = useParams();
  const { data } = useSelector(selectSimilarNews);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(similarNews({ uuid, limit: 5 }));
  }, [dispatch, uuid]);

  return (
    <>
      {!data ? (
        <>
          <SimilarCard />
          <SimilarCard />
        </>
      ) : (
        data?.map((v, i) => {
          return (
            <>
              <Link to={`/${v.uuid}`} style={{ textDecoration: "none" }}>
                <MainCard border={true} content={false} sx={{ my: 1 }}>
                  <Box sx={{ p: 1 }}>
                    <List sx={{ py: 0 }}>
                      <ListItem
                        alignItems="center"
                        disableGutters
                        sx={{ py: 0 }}
                      >
                        <ListItemAvatar sx={{ mr: 1 }}>
                          <Avatar
                            variant="rounded"
                            sx={{
                              ...theme.typography.commonAvatar,
                              ...theme.typography.extraLargeAvatar,
                              backgroundColor: theme.palette.warning.light,
                              color: theme.palette.warning.dark,
                            }}
                          >
                            <img
                              src={`${v.image_url}`}
                              srcSet={`${v.image_url}`}
                              alt={v.title}
                              loading="lazy"
                              style={{
                                height: 70,
                              }}
                            />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          sx={{
                            py: 0,
                            mt: 0.45,
                            mb: 0.45,
                          }}
                          primary={
                            <Typography
                              component="h5"
                              variant="h5"
                              sx={{
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 2,
                              }}
                            >
                              {v.title}
                            </Typography>
                          }
                          secondary={
                            <Typography
                              variant="subtitle2"
                              sx={{
                                color: theme.palette.grey[500],
                                mt: 0.5,
                              }}
                            >
                              {v.source}
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                  </Box>
                </MainCard>
              </Link>
            </>
          );
        })
      )}
    </>
  );
};

SimilarNews.propTypes = {
  isLoading: PropTypes.bool,
};

export default SimilarNews;
