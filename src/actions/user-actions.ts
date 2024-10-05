"use server";

import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";

type User = {
  name: string;
  email: string;
  bio: string;
};

export async function getUserById(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Could not fetch user");
  }
}

export async function getUserByIdWithOAuthProvider(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        accounts: true,
      },
    });

    const oauthProvider = user?.accounts.find(
      (account) => account.type === "oauth"
    )?.provider;

    return {
      ...user,
      oauthProvider: !!oauthProvider,
    };
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Could not fetch user");
  }
}

export async function updateUserProfile(userId: string, data: User) {
  try {
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data,
    });

    return user;
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      console.error("User not found for update:", error);
      throw new Error("User not found");
    }
    console.error("Error updating user profile:", error);
    throw new Error("Could not update user profile");
  }
}
