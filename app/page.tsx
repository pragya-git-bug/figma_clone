"use client";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar/Navbar";

export default function Page() {
  return (
    <main className="h-screen ovrflow-hidden">
      <Navbar/>
      <Live/>
    </main>
  );
}