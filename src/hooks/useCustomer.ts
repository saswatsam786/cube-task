import { create } from "zustand";
import { FakeDataEntry } from "@/utils/fake-data";

type CustomerStore = {
  selected: FakeDataEntry | null; // Store the entire data object
  setSelected: (customer: FakeDataEntry) => void; // Update to accept the whole object
};

const useCustomerStore = create<CustomerStore>((set) => ({
  selected: null, // Initialize with null
  setSelected: (customer) => set({ selected: customer }),
}));

export default useCustomerStore;
