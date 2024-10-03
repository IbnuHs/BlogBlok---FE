import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import Articles from "./TabsContent/Articles";
import Profile from "./TabsContent/Profile";
import Account from "./TabsContent/Account";

export default function ContentProfile() {
  const [activeTab, setActiveTab] = useState("articles");
  return (
    <div className="px-2 mt-5 lg:w-[55%] lg:px-4">
      <Tabs id="custom-animation" value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          <Tab
            onClick={() => setActiveTab("articles")}
            key="Articles"
            value="articles"
          >
            Articles
          </Tab>
          <Tab onClick={() => setActiveTab("about")} key="About" value="about">
            About Me
          </Tab>
          <Tab
            onClick={() => setActiveTab("account")}
            key="Account"
            value="account"
          >
            Account
          </Tab>
        </TabsHeader>

        <TabsBody>
          <TabPanel key="Articles" value="articles">
            <Articles />
          </TabPanel>
          <TabPanel key="About" value="about">
            <Profile />
          </TabPanel>
          <TabPanel key="Account" value="account">
            <Account />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
}
