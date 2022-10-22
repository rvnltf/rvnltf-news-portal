import PropTypes from "prop-types";

// material-ui
import { Box, Drawer, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// third-party
import PerfectScrollbar from "react-perfect-scrollbar";

// project imports
import { drawerWidth } from "../../../store/constants";
import LogoSection from "../LogoSection";
import MenuList from "../MenuList";

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  // console.log(drawerToggle);

  const drawer = (
    <>
      <Box sx={{ display: { xs: "block", lg: "none" }, mx: "auto" }}>
        <Box sx={{ display: "flex", p: 2 }}>
          <LogoSection />
        </Box>
      </Box>
      <PerfectScrollbar
        component="div"
        style={{
          height: !matchUpMd ? "calc(100vh - 56px)" : "calc(100vh - 88px)",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <MenuList />
      </PerfectScrollbar>
    </>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: "none",
            [theme.breakpoints.up("md")]: {
              top: "88px",
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  window: PropTypes.object,
};

export default Sidebar;
