import { useRouter } from "next/router";

export default () => {
  const router = useRouter();

  return (
    <button onClick={() => router.replace("/brayden/isGay")}>Go back</button>
  );
};
