"use client"

import LeftSidebar from "@/components/LeftSidebar";
import ContentTopBar from "@/components/ContentTopBar/ContentTopBar";
import Settings from "@/components/Settings";
import Categories from "@/components/Categories";
import MainContent from "@/components/MainContent/MainContent";

export default function Home() {
  return (
    <div className="bg-[#ebeef2] min-h-screen w-full mx-auto">
      <div className="flex flex-col lg:flex-row gap-1 justify-between w-full mx-auto md:p-5 p-1">
        <div className="lg:w-1/12 w-full p-5 h-full lg:flex hidden">
          <LeftSidebar />
        </div>
        <div className="lg:w-11/12 w-full ">
          <ContentTopBar />
          <div className="py-5 flex flex-col lg:flex-row gap-4">
            <div className="lg:w-3/12 w-full">
              <Categories />
            </div>
            <div className="lg:w-7/12 w-full">
              <MainContent />
            </div>
            <div className="w-2/12 hidden lg:flex">
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
