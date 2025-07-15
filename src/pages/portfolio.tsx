import { useLoaderData } from "react-router-dom";

export default function Portfolio() {
  const data = useLoaderData();

  console.log(data);
  return <div>portfolio</div>;
}
