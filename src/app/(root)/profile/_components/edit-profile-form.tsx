"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateUserProfile } from "@/actions/user-actions";

type User = {
  name: string;
  email: string;
  bio: string;
  oauthProvider: boolean;
};

export function EditProfileForm({
  user,
  userId,
}: {
  user: User;
  userId: string;
}) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUserProfile(userId, { name, email, bio });
      console.log("Profile update submitted:", { name, email, bio });
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2 relative group">
            <Label htmlFor="email">Email</Label>
            <Input
              disabled={user.oauthProvider}
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {user.oauthProvider && (
              <span className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-white border-2 border-secondary text-primary rounded py-1 px-2 w-max opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                OAuth users cannot change their email.
              </span>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <Button type="submit">Update Profile</Button>
        </form>
      </CardContent>
    </Card>
  );
}
