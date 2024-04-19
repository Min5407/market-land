import { Badge } from "@/components/ui/badge";
import Layout from "./layout";

const HeroSection = () => {
  return (
    <Layout>
      <h1 className="mt-20 text-2xl font-semibold">AI Company</h1>
      <p className="text-muted-foreground mt-3 px-2 text-xs">
        Lorem global <br />
        ipsam eaque ds
      </p>
      <p className="mt-10 text-6xl">
        Modeling & <br /> Development
      </p>

      <Badge
        variant="outline"
        className="mt-10 border-purple-400 px-5 text-lg text-purple-400"
      >
        Welcome to Service !
      </Badge>
    </Layout>
  );
};

export default HeroSection;
