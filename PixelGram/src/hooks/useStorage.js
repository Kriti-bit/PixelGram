import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp} from '../firebase/config'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images') //collection called images
        //As put is an asynchronous function, we keep a track of the % of the file uploaded with the help of .on() when state is changed, this function may run multiple times as the file uploads
        storageRef.put(file).on('state_changed',(snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt });
            setUrl(url);
        })
    }, [file]) //file is a dependency here, the function will run everytime the value of file changes

    return { progress, url, error}

}

export default useStorage;