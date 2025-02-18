"use client";
import React from "react";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import { useQuery } from "@tanstack/react-query";
import { getLocationByIP } from "@/app/actions/find-user-location-by-ip";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/app/UI/components/ui/tooltip";
import { LoadingSpinner } from "@/app/UI/components/base/LoadingCustom";
const UserLocation = () => {
  const { isLoading, error, data, getData } = useVisitorData({ extendedResult: true }, { immediate: true });
  const countryQuery = useQuery({
    queryKey: ["country-name"],
    queryFn: () => getLocationByIP(data?.ip),
    enabled: !!data?.ip,
  });
  // console.log(`location data is ${JSON.stringify(countryQuery?.data)}`);

  if (isLoading) return <LoadingSpinner width="w-5" height="h-5" color="text-[#FAFAB6]" />;
  if (error) return <div className=" text-sm text-rose-600 ">Error</div>;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className=" text-gold font-semibold max-sm:text-sm max-sm:-ml-1 cursor-pointer">
            <i className="bi bi-geo-alt"></i> {countryQuery.data?.country_code2}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{countryQuery.data?.country_name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default UserLocation;
