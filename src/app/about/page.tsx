import AboutUs from "@/components/about/aboutUs";
import FooterPage from "@/components/footer/foot";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
  description: "This about page",
};


export default function AboutUsPage() {
  return (
    <div>
      <AboutUs />
      <FooterPage />
    </div>
  );
}
