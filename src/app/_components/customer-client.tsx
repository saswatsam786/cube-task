"use client";
import * as React from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { CustomerList } from "./customer-list";
import { Button } from "@/components/ui/button";
import { FakeDataEntry } from "@/utils/fake-data";
import useCustomerStore from "@/hooks/useCustomer";
import { CustomerDisplay } from "./customer-display";

interface CustomerClientProps {
  customers: FakeDataEntry[];
  defaultLayout: number[] | undefined;
  navCollapsedSize: number;
}

export function CustomerClient({ customers, defaultLayout = [30, 70] }: CustomerClientProps) {
  const { selected } = useCustomerStore();
  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(sizes)}`;
      }}
      className="h-full max-h-[800px] items-stretch"
    >
      <ResizablePanel defaultSize={defaultLayout[0]} minSize={30} maxSize={45} className="overflow-y-auto p-2">
        <CustomerList customers={customers} />
      </ResizablePanel>
      <ResizableHandle className="cursor-col-resize" />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        {selected ? (
          <CustomerDisplay customer={selected} />
        ) : (
          <div className="flex flex-col h-full">
            <div className="p-8 text-center text-gray-500">No customer selected</div>
          </div>
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
