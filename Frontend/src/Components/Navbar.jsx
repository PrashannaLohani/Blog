import {
  Autocomplete,
  Avatar,
  Box,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

export default function Navbar() {
  const navEle = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Blogs", path: "/Blogs" },
    { id: 3, label: "About", path: "#" },
    { id: 4, label: "FAQ", path: "#" },
  ];
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  return (
    <>
      <Box
        bgcolor="primary.main"
        p="1.5rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          margin: "0 auto", // Center the divider
          borderBottom: "1px solid white",
          borderWidth: "90%",
        }}
      >
        <Box p="1rem" display="flex" alignItems="center" gap="3rem">
          <Box>
            <Avatar
              sx={{
                background:
                  "linear-gradient(217deg, rgba(230,63,75,1) 57%, rgba(255,255,255,1) 100%)",
              }}
            >
              M
            </Avatar>
          </Box>
          <Box display="flex" gap="2rem">
            {navEle.map((navItem) => (
              <Typography
                key={navItem.id}
                variant="body1"
                component="a"
                href={navItem.path}
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400, // Ensure this matches the weight of 'poppins-extralight'
                  textDecoration: "none",
                  color: "primary.text",
                  "&:hover": {
                    color: "primary.light",
                    cursor: "pointer",
                  },
                  transition: "transform 0.3s",
                }}
              >
                {navItem.label}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box
          color="primary.light"
          minHeight="2rem"
          p="1rem"
          display="flex"
          gap="3px"
        >
          <Autocomplete
            disablePortal
            options={top100Films}
            sx={{ width: 300, bgcolor: "primary.text", color: "gray" }}
            renderInput={(params) => <TextField {...params} label="Search" />}
          />
          <Avatar />
        </Box>
      </Box>
    </>
  );
}
