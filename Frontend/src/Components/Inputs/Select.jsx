import { Autocomplete, Box, InputBase } from "@mui/material";

export default function Select() {
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
      <Autocomplete
        disablePortal
        options={top100Films}
        sx={{
          width: 300,
          transition: "width 0.3s ease",
        }}
        renderInput={(params) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              bgcolor: "primary.text",
              borderRadius: "1rem",
              padding: "0.2rem 0.5rem",
            }}
          >
            <InputBase
              ref={params.InputProps.ref} // Forward ref for compatibility
              inputProps={{ ...params.inputProps }} // Pass the required input props
              placeholder="Search"
              sx={{ flex: 1, color: "gray" }}
            />
          </Box>
        )}
      />
    </>
  );
}
