import { Box, Typography } from "@mui/material";

export default function BlogMain() {
  const text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, veniam
  reprehenderit minima ducimus quibusdam quam ab adipisci nam expedita
  soluta repudiandae quas sit animi ea, voluptatibus fuga sint
  perspiciatis dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio
  consectetur molestiae officiis, error expedita nostrum quaerat
  necessitatibus deserunt odit eaque, nulla accusantium, architecto
  nobis nemo cum asperiores consequuntur culpa velit cupiditate facere
  aliquid. Soluta animi sed sequi id. Minima qui id odit quas fugiat
  earum nobis. Rerum, quia dolor!`;

  const firstLetter = text.charAt(0);
  const restOfText = text.slice(1);

  return (
    <Box bgcolor="beige" p="5rem" display="flex" justifyContent="center">
      <Typography
        variant="body1"
        component="p"
        maxWidth="40rem"
        sx={{ textAlign: "justify", lineHeight: 1.4 }}
      >
        <Typography
          component="span"
          sx={{
            float: "left",
            fontSize: "2.5rem",
            lineHeight: "1.12",
            marginRight: "0.2rem",
          }}
        >
          {firstLetter}
        </Typography>
        {restOfText}
      </Typography>
    </Box>
  );
}
