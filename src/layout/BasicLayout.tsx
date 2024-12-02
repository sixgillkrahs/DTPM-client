import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { MenuItem } from "../interfaces";
import { getDataMenu } from "../service/pages/api";
import { NavBar, Preloader, Sidebar, TopBar } from "../components";
import HeaderForMobile from "../components/Mobile/Header";

const BasicLayout = () => {
  const [itemMenu, setItemMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getItemMenu = async () => {
    try {
      const resp = await getDataMenu();
      setItemMenu(resp.data.data);
      console.log(resp.data.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  useEffect(() => {
    getItemMenu();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const token = localStorage.getItem("token");
      console.log(token);
      // if (!token) {
      //   // navigate("auth/login");
      //   return;
      // } else {
      //   try {
      //     // const resp = await validate(token);
      //   } catch (error) {
      //     // navigate("auth/login");
      //     return;
      //   }
      //   // }
      // }
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <TopBar />
      <NavBar />
      <HeaderForMobile />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default BasicLayout;
