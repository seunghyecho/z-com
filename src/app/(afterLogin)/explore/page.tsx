import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import Trend from "@/app/(afterLogin)/_component/Trend";

export default function Home() {
  return (
    <main className="main">
      <div className="formZone">
        <SearchForm />
      </div>
      {/* 실시간 트렌드 */}
      <div className="trend">
        <h3>Trend</h3>
      </div>
    </main>
  );
}
