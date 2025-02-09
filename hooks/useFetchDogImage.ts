import { useState } from 'react';
import { getBreedImage, getSubBreedImage } from '@/services/axiosClient';

//@TODO: Type props aqui e em outros lugares pra evitar os type:any implícitos.

/*Hook customizado pra fetching das imagens de acordo com a raça pelo cliente do Axios 
pra separar a função do arquivo de serviço e permitir tratamento de erros.*/

export function useFetchDogImage() {
    const [dogImage, setDogImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchDogImage = async (breed, subBreed) => {
        setLoading(true);
        setError(null);

        try {
            let imageUrl;
            if (subBreed) {
                imageUrl = await getSubBreedImage(breed, subBreed);
            } else {
                imageUrl = await getBreedImage(breed);
            }
            setDogImage(imageUrl);
        } catch (error) {
            //@TODO: Tratamento de erros mais eficaz.
            setError('Erro buscando imagens.');
        } finally {
            setLoading(false);
        }
    };

    return { dogImage, loading, error, fetchDogImage };
}
