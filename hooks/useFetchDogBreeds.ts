import { useState } from 'react';
import { getAllBreeds } from '@/services/axiosClient';

/*Hook customizado pra fetching das raças pelo cliente do Axios 
pra separar a função do arquivo de serviço e permitir tratamento de erros.*/
export function useFetchDogBreeds() {
    const [dogBreeds, setDogBreeds] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchBreeds = async () => {
        setLoading(true);
        setError(null);

        try {
            const breedsData = await getAllBreeds();
            const breedOptions = [];

            /*Um forEach pra construir a lista a ser enviada pro dropdown com 
            condicional pra verificar se há subraça e construir a label dinamicamente.*/
            Object.keys(breedsData).forEach(breed => {
                if (breedsData[breed].length > 0) {
                    breedsData[breed].forEach(subBreed => {
                        breedOptions.push({
                            label: `${breed.charAt(0).toUpperCase() + breed.slice(1)} (${subBreed.charAt(0).toUpperCase() + subBreed.slice(1)})`,
                            value: breed,
                            subBreed: subBreed,
                        });
                    });
                } else {
                    breedOptions.push({
                        label: breed.charAt(0).toUpperCase() + breed.slice(1),
                        value: breed,
                        subBreed: null,
                    });
                }
            });

            setDogBreeds(breedOptions); 
        } catch (error) {
            //@TODO: Tratamento de erros mais eficaz. 
            setError('Erro buscando raças.');
        } finally {
            setLoading(false);
        }
    };

    return { dogBreeds, loading, error, fetchBreeds };
}
