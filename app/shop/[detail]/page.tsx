import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import getProductById from "@/app/service/getProductById";
import DetailProduct from "./components/DetailProduct";

export default function Page() {
  // const result = useQuery({
  //   queryKey: ["product", id],
  //   queryFn: () => getProductById(id),
  // });

  // if (!result) return <div>Loading...</div>;
  // console.log(result);
  return <DetailProduct />;
}
