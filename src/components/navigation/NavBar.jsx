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
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

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

  // favorites, cart, and user account redirects
  let navigate = useNavigate();

  const loginRedirect = () => {
    let path = `/login`;
    navigate(path);
  };

  const userCartRedirect = () => {
    let path = `/cart`;
    navigate(path);
  };
  const userFavoritesRedirect = () => {
    let path = `/my-favorites`;
    navigate(path);
  };

  // styles variables

  const tabsContainerStyles = {
    flexGrow: 1,
    alignContent: "center",
    justifyContent: "center",
    display: { xs: "none", md: "flex" },
    backgroundColor: "white",
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

          <Box display="flex" sx={{ flexGrow: 0, alignItems: "center" }}>
            <FavoriteBorderIcon onClick={userFavoritesRedirect} />
            <ShoppingCartOutlinedIcon onClick={userCartRedirect} />
            <Button
              variant="outlined"
              sx={{ color: "white", padding: 0 }}
              onClick={loginRedirect}
            >
              {" "}
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
