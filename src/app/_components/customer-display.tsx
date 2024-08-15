import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FakeDataEntry } from "@/utils/fake-data";
import toast, { Toaster } from "react-hot-toast";

interface CustomerDisplayProps {
  customer: FakeDataEntry | null;
}

export function CustomerDisplay({ customer }: CustomerDisplayProps) {
  // State for holding photos
  const [photos, setPhotos] = useState<string[]>([]);

  const toastId = customer?.id.toString() || "customer";

  // Fetch photos from Unsplash API
  const fetchPhotos = async () => {
    toast.loading("Loading new photos...", { id: toastId });
    try {
      const response = await axios.get("https://api.unsplash.com/photos/random", {
        params: { count: 9, orientation: "portrait" },
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
        },
      });
      const newPhotos = response.data.map((photo: { urls: { small: string } }) => photo.urls.small);
      setPhotos(newPhotos);
      toast.success("New photos loaded!", { id: toastId });
    } catch (error) {
      toast.error("Failed to load new photos.", { id: toastId });
    }
  };

  useEffect(() => {
    fetchPhotos();
    const intervalId = setInterval(fetchPhotos, 10000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formattedDate = customer ? format(new Date(customer.createdAt), "MMMM d, yyyy 'at' h:mm a") : "";

  return (
    <div className="flex flex-col h-full">
      {customer ? (
        <div className="flex flex-col h-full">
          <div className="flex items-start p-4 border-b border-gray-200">
            <Avatar className="mr-4">
              <AvatarImage src="/path/to/avatar" alt={customer.fullName} />
              <AvatarFallback>
                {customer.fullName
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-start">
                <div className="text-xl font-semibold text-gray-800">{customer.fullName}</div>
                <div className="text-xs text-gray-500">{formattedDate}</div>
              </div>
              <div className="text-sm text-gray-600 mt-1">{customer.address}</div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex-1 overflow-auto">
            <div className="p-4 text-sm text-gray-700">
              <div className="whitespace-pre-wrap">{customer.description}</div>
            </div>
            <div className="p-4 grid grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                <Image
                  key={index}
                  src={photo}
                  alt={`Random ${index}`}
                  className="object-cover rounded-md"
                  width={400}
                  height={400}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-gray-500">No customer selected</div>
      )}
      <Toaster />
    </div>
  );
}
