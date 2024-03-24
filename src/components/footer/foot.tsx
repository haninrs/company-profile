import React from "react";
import ButtonLinks from "../navbar/buttonLinks";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function FooterPage() {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-slate-900 rounded">
        <nav className="grid grid-flow-col gap-4">
          <ButtonLinks href="/about">About</ButtonLinks>
          <ButtonLinks href="/service">Service</ButtonLinks>
          <ButtonLinks href="/team">Teams</ButtonLinks>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4 ">
            <Link href="https://twitter.com/elonmusk" target="_blank">
              <FaTwitter className="fill-slate-50 w-6 h-6"/>
            </Link>
            <Link href="https://www.youtube.com/@AdiHidayatOfficial" target="_blank">
              <FaYoutube className="fill-slate-50 w-6 h-6"/>
            </Link>
            <Link href="https://www.facebook.com/" target="_blank">
              <FaFacebook className="fill-slate-50 w-6 h-6" />
            </Link>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by GAMESTART Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
}
