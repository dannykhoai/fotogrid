import  React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';


const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                    layout
                    whileHover={ {opacity : 1} }  //css styling has initial value of 0.8
                    onClick={() => setSelectedImg(doc.url)}
                >
                 <motion.img src={doc.url} alt="uploaded imgs"
                        initial=    {{opacity: 0}}
                        animate=    {{opacity: 1}} 
                        transition= {{delay: 1}}
                 />
                 { <img className="avatar" alt="uploader avatar" src={doc.photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} /> }
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;
