import { Metadata } from "next";
import TrendSection from "../_component/TrendSection";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";

export const metadata: Metadata = {
  title: "Explore / Z",
  description: "Explore",
};
export default function Home() {
  return (
    <div id="explore">
      <div className="formZone">
        <SearchForm />
      </div>

      <div className="trend">
        <h3>Trend For You</h3>
        <TrendSection />
      </div>
    </div>
  );
}
