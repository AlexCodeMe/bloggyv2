"use server";

import { signIn } from "@/lib/auth";
import prisma from "@/lib/db";
import { AuthError } from "next-auth";
import bcrypt from "bcryptjs"

export async function googleSignIn() {
  await signIn("google");
}
export async function githubSignIn() {
  await signIn("github");
}
export async function signUp(email: string, password: string, username: string, name: string) {
  try {
    const existingUserByEmail = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });

    if (existingUserByEmail) {
      return {
        message: "User with this email already exists",
      };
    }

    const existingUserByUsername = await prisma.user.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
      },
    });
    if (existingUserByUsername) {
      return {
        message: "Username already exists",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        name,
        hashedPassword,
      },
    });

    return {
      message: "User successfully created",
      user: newUser,
    };
  } catch (error) {
    console.log(error);
    throw new Error("An error occurred during sign-up");
  }
}


export async function credentialsSignin({ email, password }: {
  email: string,
  password: string
}) {
  try {
      await signIn("credentials", { email, password, redirectTo: "/dashboard" });
  } catch (error) {
      if (error instanceof AuthError) {
          switch (error.type) {
              case 'CredentialsSignin':
                  return {
                      message: 'Invalid credentials',
                  }
              default:
                  return {
                      message: 'Something went wrong.',
                  }
          }
      }
      throw error;
  }
}


