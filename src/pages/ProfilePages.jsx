import React from "react";
import Background from "../components/ProfilePages/Background";
import ProfileSection from "../components/ProfilePages/ProfileSection";
import ContentProfile from "../components/ProfilePages/ContentProfile";
import Account from "../components/ProfilePages/TabsContent/Account";

export default function ProfilePages() {
  return (
    <div className="min-h-screen">
      <Background />
      <div className="lg:flex">
        <ProfileSection />
        <ContentProfile />
      </div>
    </div>
  );
}
