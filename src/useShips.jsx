import { useState, useEffect, useMemo } from "react";
import useAPIResult from "./useAPIResult";
import { getShips } from "./services/APIrequests";

export default function useShips () {
  const request = useMemo(() => getShips(), []);
  return useAPIResult(request);
};

// Trying to use the useMemo hook to prevent extra API calls