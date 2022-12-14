import {
  Button,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import Carousel from "better-react-carousel";
import { Link } from "react-router-dom";
import CarouselCard from "../../components/cards/Skeleton/CarouselCard";

const CorauselNews = ({ data }) => {
  return (
    <>
      {!data ? (
        <CarouselCard />
      ) : (
        <Carousel loop showDots autoplay={3000}>
          {data.map((v) => (
            <Carousel.Item key={v.uuid}>
              <ImageListItem>
                <img
                  src={`${v.image_url}`}
                  srcSet={`${v.image_url}`}
                  alt={v.title}
                  loading="lazy"
                  style={{
                    height: 400,
                    borderRadius: 12,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
                <ImageListItemBar
                  title={
                    <Typography
                      component="span"
                      variant="h3"
                      color="text.hint"
                      sx={{
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                      }}
                    >
                      {v.title}
                    </Typography>
                  }
                  subtitle={
                    <Typography
                      component="span"
                      variant="body1"
                      sx={{
                        overflow: "hidden",
                        WebkitLineClamp: 3,
                        lineHeight: 3,
                      }}
                    >
                      {v.snippet}
                    </Typography>
                  }
                  sx={{
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    p: 3,
                  }}
                  actionIcon={
                    <Link to={`/${v.uuid}`} style={{ textDecoration: "none" }}>
                      <Button variant="outlined">Read more</Button>
                    </Link>
                  }
                />
              </ImageListItem>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default CorauselNews;
