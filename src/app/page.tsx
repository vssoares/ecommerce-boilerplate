import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-center p-4",
      )}
    >
      <h1 className={cn("mb-4 text-4xl font-bold")}>
        Welcome to the Home Page
      </h1>
      <Button>Teste</Button>
    </div>
  );
};

export default Home;
