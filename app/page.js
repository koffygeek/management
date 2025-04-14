"use client";
import HomeHeader from "@/components/home/HomeHeader";
import HomeJob from "@/components/home/HomeJob";
import ShortBar from "@/components/home/ShortBar";

export default function Home() {
  return (
    <main className="">
      <HomeHeader />
      <ShortBar />
      <HomeJob />
    </main>
  );
}
