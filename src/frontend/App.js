import { downloadService } from './services/pdf'; 

const App = () => {
  return (
    <div>
      <button onClick={downloadService}>Download pdf here!</button>
    </div>
  );
}

export default App;
