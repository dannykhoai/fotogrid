import {useState, useEffect} from 'react';
import { projectStorage, projectFirestore, timestamp } from  '../firebase/config';


const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    
    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');



        storageRef.put(file).on('stage_change', (snap) => {
            let percentage = (snap.bytesTransferred /snap.totalBytes) * 100; //percentage of the upload
            setProgress(percentage);
        }, (err) => {
            setError(err); 
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp;
            collectionRef.add ({ url, createdAt })
            setUrl(url);
        })

    }, [file]); 
    return { progress, url, error}
}

export default useStorage;

