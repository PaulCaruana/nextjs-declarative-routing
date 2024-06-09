import UserList from "@/app/components/users/UserList";
import { User, userSchema } from "@/model/user";
import { revalidatePath } from "next/cache";
import { postUsers } from "@/routes";
import UserForm from "@/app/components/users/UserForm";

type UserFormAction = {
  message: string;
  user?: User;
  issues?: string[];
};

export default async function Home() {
  const onFormAction = async (
    prevState: UserFormAction,
    formData: FormData,
  ) => {
    "use server";
    const data = Object.fromEntries(formData);
    const parsed = await userSchema.safeParseAsync(data);

    if (parsed.success) {
      console.log("User data:", parsed.data);
      await postUsers(parsed.data);
      console.log("User registered");
      revalidatePath("/"); // Revalidate page to see new content
      return { message: "User registered", user: parsed.data };
    } else {
      return {
        message: "Invalid data",
        issues: parsed.error.issues.map((issue) => issue.message),
      };
    }
  };

  return (
    <main>
      <UserForm onFormAction={onFormAction} />
      <UserList />
    </main>
  );
}
