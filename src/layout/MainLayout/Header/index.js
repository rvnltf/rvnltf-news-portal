import PropTypes from "prop-types";

// material-ui
import { Avatar, Box, ButtonBase } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// project imports
import LogoSection from "../LogoSection";
import SearchSection from "./SearchSection";

import MenuList from "../MenuList";
import MenuIcon from "@mui/icons-material/Menu";

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: "flex",
          [theme.breakpoints.down("md")]: {
            width: "auto",
          },
        }}
      >
        <Box
          component="span"
          sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
        >
          <LogoSection />
        </Box>

        <Box
          component="span"
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "flex-end",
            ml: 5,
          }}
        >
          <MenuList />
        </Box>

        <SearchSection />
        <ButtonBase
          sx={{
            display: { xs: "block", md: "none" },
            marginLeft: 1,
          }}
        >
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: "all .2s ease-in-out",
              background: theme.palette.grey[200],
              color: theme.palette.grey[500],
              "&:hover": {
                background: theme.palette.grey[500],
                color: theme.palette.grey[200],
              },
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <MenuIcon stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>
    </>
  );
};

// Header.propTypes = {
//   handleLeftDrawerToggle: PropTypes.func,
// };

export default Header;
