import { content } from "./content/content.js";
import BusinessCard from "./components/businessCard";

function App() {
  return (
    <main className='bg-softwhite p-8 min-h-screen flex justify-center items-center'>
      <BusinessCard content={content} />
    </main>
  );
}

export default App;
