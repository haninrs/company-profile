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
    <div className="bg-slate-900">
      <TeamSection />
      <FooterPage />
    </div>
  );
}
