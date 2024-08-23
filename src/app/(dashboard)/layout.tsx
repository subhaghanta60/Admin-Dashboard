import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className=" flex">
        { /* Left Sitebar */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4">
          <Link href="/" className="flex items-center justify-content lg:justify-start gap-2">
          <Image src="/logo.png" width={32} height={32} alt="LogoDashboard" />
          <span className="hidden lg:block font-bold">School Dash</span>
          </Link>
          <Menu />
        </div>

        { /* Right Sitebar */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
          <Navbar />
          {children}
        </div>
        
      </div>
   
  );
}
