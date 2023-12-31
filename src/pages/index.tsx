import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { Card } from "@/components";
import { people } from "@/constants";
import { useDebounceValue } from "@/hooks/useDebounceValue";
import axios from "axios";

type Person = {
  name: string;
  age: number;
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [person, setPerson] = useState<Person>({ name: "David", age: 20 });
  const router = useRouter();

  const login = async (e: any) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/auth/login", {
      data: {
        email,
        password,
      },
    });

    console.log(response.data);
  };

  // console.log(typeof person.age === "number");

  // const handleSearch = (name: string) => {
  //   setSearchValue(name);
  // };

  // const handlePerson = () => {
  //   setPerson({ name: "John", age: 30 });
  // };

  // useEffect(() => {
  //   if (person.name === "John") {
  //     router.push("/about");
  //   }
  // }, [debounceValue]);

  // const spreadPeople = () => {
  //   return people.map((person, index) => (
  //     <Card
  //       key={index}
  //       name={person.name}
  //       age={person.age}
  //       searchValue={searchValue}
  //       setSearchValue={handleSearch}
  //     />
  //   ));
  // };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form
        onSubmit={login}
        className="flex min-h-screen flex-col items-center justify-center space-y-12"
      >
        <input
          className="rounded-md border-2 border-black p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="rounded-md border-2 border-black p-2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          // onClick={handlePerson}
          className="rounded-md bg-blue-500 px-2 py-2"
        >
          Login Please
        </button>
        {/* {spreadPeople()} */}
      </form>
    </>
  );
}
