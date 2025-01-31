import { Avatar, Box } from "@mui/material";
import DynamicMenu from "../../Components/Basic-Components/menu/menu";
import InboxIcon from "@mui/icons-material/Inbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ArchiveIcon from "@mui/icons-material/Archive";
import Sidebar from "./Sidebar/sidebar";
import { Children, useEffect, useState } from "react";

export default function AdminLayout({ children }) {
  const [activeId, setActiveId] = useState(() => {
    return localStorage.getItem("activeMenu") || "1"; // Default active menu
  });

  useEffect(() => {
    localStorage.setItem("activeMenu", activeId);
  }, [activeId]);

  const handlePage = (url, id) => {
    setActiveId(id);
    window.location.href = url;
  };

  const menuItems = [
    { label: "Profile", onClick: () => handlePage("/profile", "profile") },
    { label: "Logout", onClick: () => handlePage("/logout", "logout") },
  ];

  const drawerItems = [
    { id: "1", text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    {
      id: "2",
      text: "Post",
      icon: <PostAddIcon />,
      subItems: [
        {
          id: "2-1",
          text: "Create Post",
          icon: <PostAddIcon />,
          path: "/create-post",
        },
        { id: "2-2", text: "My Post", icon: <InboxIcon />, path: "/my-posts" },
        {
          id: "2-3",
          text: "Archived Post",
          icon: <ArchiveIcon />,
          path: "/archived-posts",
        },
      ],
    },
    {
      id: "3",
      text: "Organize Posts",
      icon: <SettingsIcon />,
      path: "/organize-posts",
    },
  ];

  return (
    <Box
      display="grid"
      gridTemplateAreas={`"nv nv nv nv" "sb cnt cnt cnt" "sb cnt cnt cnt" "sb cnt cnt cnt"`}
      gridTemplateRows="10vh auto"
      gridTemplateColumns="250px auto"
      minHeight="100vh"
    >
      {/* Navbar */}
      <Box
        gridArea="nv"
        bgcolor="primary.main"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px="2rem"
        minHeight="10vh"
      >
        <img src="/Logo-blackBG.svg" alt="logo" />
        <DynamicMenu menuItems={menuItems} icon={<Avatar />} />
      </Box>

      {/* Sidebar */}
      <Box gridArea="sb">
        <Sidebar
          menuItems={drawerItems}
          bgColor="beige"
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </Box>

      {/* Main Content */}
      <Box gridArea="cnt" bgcolor="white" p="2rem">
        {children}
      </Box>
    </Box>
  );
}
