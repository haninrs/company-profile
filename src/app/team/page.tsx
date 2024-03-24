import FooterPage from "@/components/footer/foot";
import TeamSection from "@/components/team/team";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description: "This team page",
};

export default function TeamPage() {
  return (
    <div className="bg-gradient-to-t from-slate-900 to-slate-900 via-teal-950 ">
      <TeamSection />
      <FooterPage />
    </div>
  );
}
