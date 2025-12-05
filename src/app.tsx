import Layout from "./components/Layout";
import SectionDiffs from "./components/SectionDiffs";
import SectionSettings from "./components/SectionSettings";

export function App() {
  return (
    <Layout>
      <SectionSettings />

      <SectionDiffs />
    </Layout>
  );
}
