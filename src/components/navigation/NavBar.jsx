import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Tabs,
  Tab,
  MenuItem,
  Menu,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [value, setValue] = React.useState(1);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // tab items

  const mobileTabsItems = [
    { label: "Home", link: "/", id: 0 },
    { label: "Browse All Plans", link: "/all-plans", id: 1 },
    { label: "Custom Plan Request", link: "/custom-plan-req", id: 2 },
  ];
  // desktop tabs have a different id structure bc of the tab
  // indicator color feature, we start at 1

  const desktopTabsItems = [
    { label: "Home", link: "/", id: 1 },
    { label: "Browse All Plans", link: "/all-plans", id: 2 },
    { label: "Custom Plan Request", link: "/custom-plan-req", id: 3 },
  ];

  // styles variables

  const tabsContainerStyles = {
    flexGrow: 1,
    alignContent: "center",
    justifyContent: "center",
    display: { xs: "none", md: "flex" },
  };

  return (
    <AppBar position="fixed">
      <Container
        maxWidth="xl"
        sx={{
          p: 2,
          bgcolor: "primary.main",
          display: { xs: "flex", md: "none" },
        }}
      >
        {" "}
      </Container>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for not collapsed view */}

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            BP DESIGN STUDIO
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* menu for collapsed view */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{}}
            >
              <Container>
                {mobileTabsItems.map((item) => (
                  <MenuItem key={item.id} component={Link} to={item.link}>
                    <Typography textAlign="center"> {item.label}</Typography>
                  </MenuItem>
                ))}
              </Container>
            </Menu>
          </Box>

          {/* logo for collapsed view */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            BP DESIGN COMPANY
          </Typography>
          {/* tabs for computer screen  */}
          <Box sx={tabsContainerStyles}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              textColor="secondary"
              indicatorColor="secondary"
              allowScrollButtonsMobile
              scrollButtons
            >
              {desktopTabsItems.map((item) => (
                <Tab
                  key={item.id}
                  value={item.id}
                  label={item.label}
                  component={Link}
                  to={item.link}
                />
              ))}
            </Tabs>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
