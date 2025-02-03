import { Avatar, Box } from "@mui/material";
import DynamicMenu from "../../Components/Basic-Components/menu/menu";

export default function AdminLayout() {
  const handlePage = (url) => {
    window.location.href = url;
  };

  const menuItems = [
    { label: "Profile", onClick: () => handlePage("/profile") },
    { label: "Logout", onClick: () => handlePage("/logout") },
  ];

  return (
    <>
      <Box
        minHeight="10vh"
        bgcolor="primary.main"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px="2rem"
      >
        <img src="/Logo-blackBG.svg" alt="logo" />
        <DynamicMenu menuItems={menuItems} icon={<Avatar />} />
      </Box>
    </>
  );
}
