import { ListItemAvatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import TimeAgo from "react-timeago";
import LatestNewsCard from "../../components/cards/Skeleton/LatestNewsCard";
import useFetch from "../../utils/useFetch";

const Content = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const q = searchParams.get("q");
  const [query, setQuery] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const { loading, error, list, hasMore } = useFetch(type, query, pageNum);

  const observer = useRef(); // (*)
  const lastElemetRef = useCallback(
    // (*)
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    setQuery(q);
    setPageNum(1);
  }, [setQuery, setPageNum, q]);

  return (
    <>
      {!list ? (
        <>
          <LatestNewsCard />
          <LatestNewsCard />
          <LatestNewsCard />
        </>
      ) : (
        <>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {list.map((v, i) => {
              const isLastElement = list.length === i + 1;
              return isLastElement ? (
                <div key={i} ref={lastElemetRef}>
                  <Link to={`/${v.uuid}`} style={{ textDecoration: "none" }}>
                    <ListItem
                      alignItems="flex-start"
                      key={v.uuid}
                      sx={{ py: 0 }}
                    >
                      <ListItemAvatar sx={{ mr: 1 }}>
                        <img
                          src={`${v.image_url}`}
                          srcSet={`${v.image_url}`}
                          alt={v.title}
                          loading="lazy"
                          style={{
                            width: 140,
                            height: 100,
                            borderRadius: 12,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            marginRight: 10,
                          }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            component="h3"
                            variant="h3"
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
                          <>
                            <Typography
                              component="span"
                              variant="subtitle2"
                              sx={{
                                m: 0,
                              }}
                            >
                              {v.source} &#183;{" "}
                              <TimeAgo date={new Date(v.published_at)} />
                            </Typography>
                            <Typography
                              component="span"
                              variant="subtitle1"
                              color="text.primary"
                              sx={{
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 1,
                                lineHeight: 1,
                              }}
                            >
                              {v.snippet}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                  </Link>
                  {i + 1 < list.length && (
                    <Divider component="li" sx={{ my: 2 }} />
                  )}
                </div>
              ) : (
                <div key={i}>
                  <Link to={`/${v.uuid}`} style={{ textDecoration: "none" }}>
                    <ListItem
                      alignItems="flex-start"
                      key={v.uuid}
                      sx={{ py: 0 }}
                    >
                      <ListItemAvatar sx={{ mr: 1 }}>
                        <img
                          src={`${v.image_url}`}
                          srcSet={`${v.image_url}`}
                          alt={v.title}
                          loading="lazy"
                          style={{
                            width: 140,
                            height: 100,
                            borderRadius: 12,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            marginRight: 10,
                          }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            component="h3"
                            variant="h3"
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
                          <>
                            <Typography
                              component="span"
                              variant="subtitle2"
                              sx={{
                                m: 0,
                              }}
                            >
                              {v.source} &#183;{" "}
                              <TimeAgo date={new Date(v.published_at)} />
                            </Typography>
                            <Typography
                              component="span"
                              variant="subtitle1"
                              color="text.primary"
                              sx={{
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 1,
                                lineHeight: 1,
                              }}
                            >
                              {v.snippet}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                  </Link>
                  {i + 1 < list.length && (
                    <Divider component="li" sx={{ my: 2 }} />
                  )}
                </div>
              );
            })}
          </List>
          {loading && (
            <>
              <LatestNewsCard />
              <LatestNewsCard />
              <LatestNewsCard />
            </>
          )}
          {error && <p>Oppsss, something wrong!!</p>}
        </>
      )}
    </>
  );
};

export default Content;
