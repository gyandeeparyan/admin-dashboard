"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/data/dataAPI";
import DataTable from "../components/DataTable/DataTable";
import Loader from "../app/Loader";

import SearchBar from "@/components/DataTable/SearchBar";
const Home = () => {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.data.rows);
  let status = useSelector((state) => state.data.status);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (status === "failed") {
    return <div>Error loading data. Please try again.</div>;
  }

  if (rows.length === 0) {
    return (
      <div className='flex flex-col  md:px-8 py-16 '>
        <SearchBar />

        <div class='flex flex-col overflow-x-auto rounded-2xl text-white mostly-customized-scrollbar'>
          <div class='sm:-mx-6 lg:-mx-8'>
            <div class='inline-block min-w-full py-2 sm:px-6 lg:px-9'>
              <div class='overflow-x-auto  '>
                <table className='w-full  rounded-full'>
                  <tr className='bg-violet-600 px-10 py-8 rounded-t-xl'>
                    <th className='px-10'>
                      <input type='checkbox' />
                    </th>
                    <th className='px-10 py-4'>Name</th>
                    <th className='px-10 py-4'>Email</th>
                    <th className='px-10 py-4'>Role</th>
                    <th className='px-10 py-4'> Actions</th>
                  </tr>
                  <tbody className='rounded-2xl'>
                    {[...Array(10)].map((_, index) => (
                      <Loader key={index} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return status === "loading" ? (
    <div className='flex flex-col  md:px-8 py-16 '>
      <SearchBar />

      <div class='flex flex-col overflow-x-auto rounded-2xl text-white mostly-customized-scrollbar'>
        <div class='sm:-mx-6 lg:-mx-8'>
          <div class='inline-block min-w-full py-2 sm:px-6 lg:px-9'>
            <div class='overflow-x-auto  '>
              <table className='w-full  rounded-full'>
                <tr className='bg-violet-600 px-10 py-8 rounded-t-xl'>
                  <th className='px-10'>
                    <input type='checkbox' />
                  </th>
                  <th className='px-10 py-4'>Name</th>
                  <th className='px-10 py-4'>Email</th>
                  <th className='px-10 py-4'>Role</th>
                  <th className='px-10 py-4'> Actions</th>
                </tr>
                <tbody className='rounded-2xl'>
                  {[...Array(10)].map((_, index) => (
                    <Loader key={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='px-4 '>
      <DataTable />
    </div>
  );
};

export default Home;
