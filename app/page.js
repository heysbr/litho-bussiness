import Footer from "./Components/Footer";
import Header from "./Components/Header";

const Home = () => {
  return (
    <div>
      <Header/>
      <main className="flex-1 bg-gray-100">
        <div className="max-w-4xl mx-auto p-8">
          <h2 className="text-xl font-bold mb-4 text-black">Main Content</h2>
          <p className="text-black">This section takes up the remaining height of the screen.</p>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;