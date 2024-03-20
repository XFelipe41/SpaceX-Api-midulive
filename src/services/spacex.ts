import { type Doc, type APISpaceXResponse } from "../types/api";

export const getLaunchBy = async ({ id }: { id: string }) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = (await res.json()) as Doc;
  console.log(launch);
  return launch;
};

export const getLatestLanches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 36,
      },
    }),
  });

  const { docs: launches } = (await res.json()) as APISpaceXResponse;
  console.log(launches);
  return launches;
};
