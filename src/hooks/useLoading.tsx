import React, { useCallback, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function useLoading() {
  const queryClient = useQueryClient();
  const { data: isLoading } = useQuery({
    queryKey: ["loading"],
    initialData: false,
    enabled: false,
  });
  const setIsLoading = useCallback(
    (loading: any) => {
      queryClient.setQueryData(["loading"], loading);
    },
    [queryClient]
  );

  return { isLoading, setIsLoading };
}
