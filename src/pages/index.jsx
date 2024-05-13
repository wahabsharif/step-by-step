import HomeMain from "../components/homes/home";
import SEO from "../components/seo";
import { Wrapper } from "../layout";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Step By Step"} />
      <HomeMain />
    </Wrapper>
  );
}
