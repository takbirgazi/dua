"use client"

import LeftSidebar from "@/components/LeftSidebar";
import ContentTopBar from "@/components/ContentTopBar/ContentTopBar";
import Settings from "@/components/Settings";
import Categories from "@/components/Categories";
import MainContent from "@/components/MainContent/MainContent";

export default function Home() {
  return (
    <div className="bg-[#ebeef2] min-h-screen w-full mx-auto">
      <div className="flex gap-1 justify-between w-full mx-auto md:p-5 p-1">
        <div className="w-1/12 p-5 h-full">
          <LeftSidebar />
        </div>
        <div className="w-11/12 ">
          <ContentTopBar />
          <div className="py-5 flex gap-4">
            <div className="w-3/12">
              <Categories />
            </div>
            <div className="w-7/12">
              <MainContent />
            </div>
            <div className="w-2/12">
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
