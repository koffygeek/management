"use client";
import HomeHeader from "@/components/home/HomeHeader";
import HomeJob from "@/components/home/HomeJob";
import Pagination from "@/components/home/Pagination";
import ProfileHome from "@/components/home/ProfileHome";
import ShortBar from "@/components/home/ShortBar";
import ShortProfileBar from "@/components/home/ShortProfileBar";

export default function Home() {
  return (
    <main className="">
      <HomeHeader />
      <ShortBar />
      <HomeJob />
      <Pagination />
      <ShortProfileBar />
      <ProfileHome />
    </main>
  );
}
