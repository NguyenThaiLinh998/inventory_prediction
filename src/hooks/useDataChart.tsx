import React, { useCallback, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useDataChart() {
  const queryClient = useQueryClient();
  const { data: dataChart } = useQuery({
    queryKey: ["getData"],
    initialData: undefined,
    enabled: false,
  });
  const setDataChart = useCallback(
    (data: any) => {
      queryClient.setQueryData(["getData"], data);
    },
    [queryClient]
  );

  return { dataChart, setDataChart };
}
