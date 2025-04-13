"use client";
import HomeHeader from "@/components/home/HomeHeader";
import ShortBar from "@/components/home/ShortBar";
import JobTemplate from "@/components/utilities/JobTemplate";

export default function Home() {
  return (
    <main className="">
      <HomeHeader />
      <ShortBar />
      <JobTemplate />
    </main>
  );
}
