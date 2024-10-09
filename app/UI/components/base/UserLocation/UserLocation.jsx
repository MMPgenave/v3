"use client";
import React from "react";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import { useQuery } from "@tanstack/react-query";
import { getLocationByIP } from "@/app/actions/find-user-location-by-ip";

const UserLocation = () => {
  const { isLoading, error, data, getData } = useVisitorData({ extendedResult: true }, { immediate: true });
  //   console.log(`location data is ${JSON.stringify(data)}`);
  const countryQuery = useQuery({
    queryKey: ["country-name"],
    queryFn: () => getLocationByIP(data?.ip),
    enabled: !!data?.ip,
  });

  if (isLoading) return <div className="text-slate-300">Loading location...</div>;
  return (
    <div className=" text-gold font-semibold max-sm:text-sm max-sm:-ml-1">
      <i class="bi bi-geo-alt"></i> {countryQuery.data?.country_code2}{" "}
    </div>
  );
};

export default UserLocation;
