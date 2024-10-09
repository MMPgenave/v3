"use client";
import React from "react";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import { useQuery } from "@tanstack/react-query";
import { getLocationByIP } from "@/app/actions/find-user-location-by-ip";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/app/UI/components/ui/tooltip";

const UserLocation = () => {
  const { isLoading, error, data, getData } = useVisitorData({ extendedResult: true }, { immediate: true });
  const countryQuery = useQuery({
    queryKey: ["country-name"],
    queryFn: () => getLocationByIP(data?.ip),
    enabled: !!data?.ip,
  });
  // console.log(`location data is ${JSON.stringify(countryQuery?.data)}`);

  if (isLoading) return <div className="text-slate-300 text-sm">Loading location...</div>;
  if (error) return <div className=" text-sm text-rose-600 ">Error</div>;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className=" text-gold font-semibold max-sm:text-sm max-sm:-ml-1 cursor-pointer">
            <i class="bi bi-geo-alt"></i> {countryQuery.data?.country_code2}
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
