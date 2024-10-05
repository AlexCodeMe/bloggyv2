import { useAuth } from "@/hooks/useAuth";
import { UserInfo } from "./_components/user-info";
import { BlogStats } from "./_components/blog-stats";
import { EditProfileForm } from "./_components/edit-profile-form";
import { RecentPosts } from "./_components/recent-posts";
import { getUserByIdWithOAuthProvider } from "@/actions/user-actions";

// Dummy data
const blogStats = [
  { label: "Total Posts", value: 42 },
  { label: "Total Views", value: 15320 },
  { label: "Total Likes", value: 2187 },
  { label: "Total Comments", value: 364 },
];

const recentPosts = [
  {
    id: 1,
    title: "The Future of AI in Content Creation",
    views: 1234,
    likes: 89,
    comments: 23,
  },
  {
    id: 2,
    title: "10 Tips for Better Writing",
    views: 987,
    likes: 76,
    comments: 15,
  },
  {
    id: 3,
    title: "How to Build a Successful Blog in 2023",
    views: 765,
    likes: 54,
    comments: 11,
  },
];

export default async function ProfilePage() {
  const session = await useAuth();

  const user = await getUserByIdWithOAuthProvider(session?.user?.id as string);
  if (!user) {
    return <div>User not found</div>;
  }

  const userInfo = {
    name: user?.name as string,
    email: user?.email as string,
    bio: user?.bio as string,
    avatarUrl: user?.image as string,
    oauthProvider: user?.oauthProvider as boolean,
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Your Profile</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <UserInfo user={userInfo} />
            <BlogStats stats={blogStats} />
          </div>
          <div>
            <EditProfileForm user={userInfo} userId={user.id as string} />
          </div>
        </div>
        <RecentPosts posts={recentPosts} />
      </main>
    </div>
  );
}
