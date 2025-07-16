import { useLoaderData } from "react-router-dom";

export default function Portfolio() {
  const data = useLoaderData();
  const data1 = data[1];

  console.log(data1);
  return <div>portfolio</div>;
}
