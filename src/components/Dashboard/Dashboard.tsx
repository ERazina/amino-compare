import { useQuery } from "@tanstack/react-query";
import { Inputs } from "@custom-types/types";
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
