import { Link } from "react-router-dom";

// material-ui
import { ButtonBase, Typography } from "@mui/material";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  return (
    <ButtonBase disableRipple component={Link} to="/">
      <Typography
        variant="h2"
        noWrap
        component="div"
        sx={{
          bgcolor: "black",
          p: 1,
          color: "white",
          borderRadius: 2,
        }}
      >
        News
      </Typography>
      <Typography
        variant="h2"
        noWrap
        component="div"
        sx={{
          p: 1,
          color: "black",
        }}
      >
        Portal
      </Typography>
    </ButtonBase>
  );
};

export default LogoSection;
