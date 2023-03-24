import NavBar from "@/components/NavBar";
import dbConnect from "@/lib/mongoose";
import { User } from "@/models/User";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useSession } from "next-auth/react";
import { Container, Stack } from "react-bootstrap";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <Stack>
      <NavBar user={session ? session.user : null} />
    </Stack>
  );
}
