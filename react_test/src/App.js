// import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import MillonImage from "./MillonImage";
import createModule from './add.js';

//1.构建wasm模块加载Promise
const AddPromise = createModule({
  noInitialRun:true,
  noExitRuntime:false
})

function App() {

  //2.加载初始化instance
  const [addModlue,setAddModule] = useState();
  useEffect(()=>{
    AddPromise.then(mod=>{
      setAddModule(mod);
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <MillonImage />
        <p>
          {/* 3.使用 */}
          <h1>Addition Result: {addModlue && addModlue._add(1,2)}</h1>
        </p>
      </header>
    </div>
  );
}

export default App;
