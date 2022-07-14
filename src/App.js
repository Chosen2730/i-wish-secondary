import Nav from "./components/navbar";
import Page from "./components/page";
function App() {
  return (
    <div className='text-gray-900'>
      <Nav />
      <div className='max-w-7xl mx-auto'>
        <Page />
      </div>
    </div>
  );
}

export default App;
