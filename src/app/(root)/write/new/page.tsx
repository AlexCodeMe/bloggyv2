import { useAuth } from "@/hooks/useAuth";
import CreatePostForm from "./_components/create-post-form";
import { getUserById } from "@/actions/user-actions";

export default async function DraftEditor() {
  const session = await useAuth();

  const user = await getUserById(session?.user?.id as string);
  if (!user) {
    return <div>User not found</div>;
  }
  
  return <CreatePostForm user={user} />;
}
