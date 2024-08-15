import * as React from "react";
import { FakeDataEntry, generateFakeData } from "@/utils/fake-data";
import { CustomerClient } from "./_components/customer-client";

export default function Home({}) {
  // const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const customers: FakeDataEntry[] = generateFakeData(1000);
  const defaultLayout = [30, 70];

  return (
    <div className="hidden flex-col md:flex">
      <CustomerClient customers={customers} defaultLayout={defaultLayout} navCollapsedSize={4} />
    </div>
  );
}
