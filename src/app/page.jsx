"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../features/data/dataAPI";
import DataTable from "../components/DataTable/DataTable";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="md:px-40 px-4">
   
      <DataTable />
    </div>
  );
};

export default Home;
