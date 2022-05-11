import * as React from "react";
import { Box, Card, Typography, CardContent, Button } from "@mui/material";
import "./HomePageStyles.css";

export default function HomePage() {
  const buttonSelectorStyles = {
    borderRadius: "60%",
    padding: 1,
    height: 1,
    width: 6,
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2350&q=80"
          alt="spanish home"
          width="65%"
          height="60%"
          style={{
            boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.45)",
          }}
        />
        <Box id="filter-plans-selector" sx={{ position: "absolute" }}>
          <Card sx={{ width: "22rem" }}>
            <CardContent
              sx={{
                display: "grid",
                textAlign: "center",
                gap: 2,
              }}
            >
              <div id="bedrooms-selection">
                <Typography variant="h5"> Bedrooms</Typography>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <Button
                    id="selector-btns"
                    size="small"
                    variant="outlined"
                    sx={buttonSelectorStyles}
                  >
                    1
                  </Button>
                  <Button
                    id="selector-btns"
                    size="small"
                    variant="outlined"
                    sx={buttonSelectorStyles}
                  >
                    2
                  </Button>
                  <Button
                    id="selector-btns"
                    size="small"
                    variant="outlined"
                    sx={buttonSelectorStyles}
                  >
                    3
                  </Button>
                  <Button
                    id="selector-btns"
                    size="small"
                    variant="outlined"
                    sx={buttonSelectorStyles}
                  >
                    4
                  </Button>
                  <Button
                    id="selector-btns"
                    size="small"
                    variant="outlined"
                    sx={buttonSelectorStyles}
                  >
                    5+
                  </Button>
                </div>
              </div>

              <div id="bathrooms-selection">
                <Typography variant="h5"> Bathrooms:</Typography>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    id="selector-btns"
                    size="small"
                    variant="outlined"
                    sx={buttonSelectorStyles}
                  >
                    1
                  </Button>
                  <Button
                    id="selector-btns"
                    size="small"
                    variant="outlined"
                    sx={buttonSelectorStyles}
                  >
                    2
                  </Button>
                  <Button
                    id="selector-btns"
                    size="small"
                    variant="outlined"
                    sx={buttonSelectorStyles}
                  >
                    3
                  </Button>
                  <Button
                    id="selector-btns"
                    size="small"
                    variant="outlined"
                    sx={buttonSelectorStyles}
                  >
                    4
                  </Button>
                  <div>
                    <Button
                      id="selector-btns"
                      size="small"
                      variant="outlined"
                      sx={buttonSelectorStyles}
                    >
                      1.5
                    </Button>
                    <Button
                      id="selector-btns"
                      size="small"
                      variant="outlined"
                      sx={buttonSelectorStyles}
                    >
                      2.5
                    </Button>
                    <Button
                      id="selector-btns"
                      size="small"
                      variant="outlined"
                      sx={buttonSelectorStyles}
                    >
                      3.5
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
}
