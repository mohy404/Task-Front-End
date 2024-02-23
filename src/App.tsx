
import ContentCard from "./components/ContentCard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen bg-black">
      <Sidebar />
      <div className="flex-1 flex flex-col "> 
        <Header title="Category Title" breadcrumb="Path to file" />
        {/* Centering container for ContentCards */}
        <div className="flex flex-1 justify-center items-center"> 
          <ContentCard title="SCR_FieldManualConfigEntry_Standard+" content="Content (title, image, text...)" />
        </div>
      </div>
    </div>
  );
}

export default App;
