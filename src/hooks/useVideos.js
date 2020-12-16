import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
    
    const [videos, setVideos] = useState([]);

    const onSearchSubmit = async (term) => {
        
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        
        if (response.status === 200) {
            const responseItems = response.data.items ? response.data.items : response.items;
            setVideos(responseItems);
        }
    };

    useEffect(() => {
        onSearchSubmit(defaultSearchTerm)
    }, [defaultSearchTerm]);

    //return { videos, onSearchSubmit };
    return [videos, onSearchSubmit];
}

export default useVideos;