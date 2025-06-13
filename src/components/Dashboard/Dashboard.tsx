import { useQuery } from "@tanstack/react-query";
import type { Inputs } from "@custom-types";
import { Symbols } from "../Symbols/Symbols";

export const Dashboard = () => {
  const { data: formData } = useQuery<Inputs>({
    queryKey: ["formData"],
    queryFn: () => Promise.resolve({ first: "", second: "" }),
    enabled: false,
  });
  return (
    <>
      <Symbols formData={formData!} />
    </>
  );
};
