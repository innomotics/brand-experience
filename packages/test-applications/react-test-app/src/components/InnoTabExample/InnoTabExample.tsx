import { InnoTab, InnoTabItem } from "@innomotics/brand-experience-react-lib";
import { useState } from "react";

export default function InnoTabExample() {
  const [selectedTab, setSelectedTab] = useState(0);

  const changeTab = (tabId: number) => setSelectedTab(tabId);

  return (
    <div>
      <InnoTab
        layout="stretched"
        selected={selectedTab}
        onSelectedChange={(event) => changeTab(event.detail)}
      >
        <InnoTabItem>Tab 1</InnoTabItem>
        <InnoTabItem>Tab 2</InnoTabItem>
        <InnoTabItem>Tab 3</InnoTabItem>
      </InnoTab>
      {selectedTab === 0 ? <div>Content 1</div> : null}
      {selectedTab === 1 ? <div>Content 2</div> : null}
      {selectedTab === 2 ? <div>Content 3</div> : null}
    </div>
  );
}
