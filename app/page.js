"use client";
import HomeHeader from "@/components/home/HomeHeader";
import HomeJob from "@/components/home/HomeJob";
import Pagination from "@/components/home/Pagination";
import ShortBar from "@/components/home/ShortBar";

export default function Home() {
  return (
    <main className="">
      <HomeHeader />
      <ShortBar />
      <HomeJob />
      <Pagination />
    </main>
  );
}
