"use client";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import useCustomerStore from "@/hooks/useCustomer";
import { FakeDataEntry } from "@/utils/fake-data";

interface CustomerListProps {
  customers: FakeDataEntry[];
}

export function CustomerList({ customers }: CustomerListProps) {
  const { selected, setSelected } = useCustomerStore();

  return (
    <ScrollArea className="h-full overflow-y-scroll">
      <div className="flex flex-col gap-2 p-4 pt-0 h-[100vh] overflow-y-scroll">
        {customers.map((item: FakeDataEntry) => (
          <div
            key={item.id}
            className="cursor-pointer"
            onClick={() => {
              setSelected(item);
            }}
          >
            <button
              className={cn(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                selected?.id === item.id ? "bg-muted" : ""
              )}
            >
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">{item.fullName}</div>
                  </div>
                  <div className={cn("ml-auto text-xs")}>
                    {formatDistanceToNow(new Date(item.createdAt), {
                      addSuffix: true,
                    })}
                  </div>
                </div>
                <div className="text-xs font-medium">{item.description.slice(0, 200) + "..."}</div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
