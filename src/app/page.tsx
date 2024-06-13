import UserList from "@/app/components/users/UserList";
import { User, userSchema } from "@/model/user";
import { revalidatePath } from "next/cache";
import { postUsers } from "@/routes";
import UserForm from "@/app/components/users/UserForm";
import Container from "@/app/components/mui/surfaces/Container";

type UserFormAction = {
  message: string;
  user?: User;
  issues?: string[];
};

export default async function Home() {
  const Sample = () => (
    <>
      <div style={{ backgroundColor: "red" }}>Widget1</div>
      <div style={{ backgroundColor: "green", width: "100px" }}>
        Widget Type 2
      </div>
      <div style={{ backgroundColor: "orange", width: "80px" }}>Widget3</div>
    </>
  );
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
      <h6>Left</h6>
      <Container gap={"8px"}>
        <Sample />
      </Container>
      <h6>Equal</h6>
      <Container variant={"equal"} gap={"8px"}>
        <Sample />
      </Container>
      <h6>Spread</h6>
      <Container variant={"spread"} gap={"8px"}>
        <Sample />
      </Container>
      <h6>Evenly</h6>
      <Container variant={"evenly"} gap={"8px"}>
        <Sample />
      </Container>
      <h6>Middle</h6>
      <Container variant={"middle"} gap={"8px"}>
        <Sample />
      </Container>
      <h6>Centre</h6>
      <Container variant={"center"} gap={"8px"}>
        <Sample />
      </Container>
      <h6>Right</h6>
      <Container variant={"right"} gap={"8px"}>
        <Sample />
      </Container>
      <h6>Stacked</h6>
      <Container direction={"column"} gap={"8px"}>
        <Sample />
      </Container>
      <h6>Stacked centre</h6>
      <Container variant="center" direction={"column"} gap={"8px"}>
        <Sample />
      </Container>
      <h6>Wrap</h6>
      <Container variant={"wrap"} gap={"8px"}>
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
      </Container>
      <UserForm onFormAction={onFormAction} />
      <UserList />
    </main>
  );
}
