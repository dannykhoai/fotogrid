import React, {useState} from 'react';
import Title from './comps/Title';
//import UploadForm from './comps/UploadForm'; 
import ImageGrid from './comps/ImageGrid';
import Zoom from './comps/Zoom';
import CheckAuth from './comps/CheckAuth';



function App() {

  const [selectedImg, setSelectedImg] = useState(null);


  return (
    <div className="App">
      
      <Title />
      <CheckAuth />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Zoom selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
