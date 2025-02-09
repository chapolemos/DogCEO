//Cliente do Axios pra requisições da DogCEO API.

import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://dog.ceo/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Get de cachorro aleatório (todas as raças)
export const getRandomDogImage = async () => {
    try {
        const response = await axiosClient.get('breeds/image/random');
        return response.data.message;
    } catch (error) {
        console.error('Error fetching random dog image:', error);
        throw error;
    }
};

// Get de raças pra preenchimento do dropdown menu
export const getAllBreeds = async () => {
    try {
        const response = await axiosClient.get('breeds/list/all');
        return response.data.message;
    } catch (error) {
        console.error('Error fetching dog breeds:', error);
        throw error;
    }
};

// Get de cachorros específicos (raça escolhida pelo dropdown menu)
export const getBreedImage = async (breed) => {
    try {
        const response = await axiosClient.get(`breed/${breed}/images/random`);
        return response.data.message;
    } catch (error) {
        console.error(`Erro ao obter imagens da raça  ${breed}:`, error);
        throw error;
    }
};

// Get de cachorros específicos com sub-raça (raça escolhida pelo dropdown menu) 
// As funções foram separadas pra respeitar o principio de responsabilidade unica do SOLID
export const getSubBreedImage = async (breed, subBreed) => {
    try {
        const response = await axiosClient.get(`breed/${breed}/${subBreed}/images/random`);
        return response.data.message;
    } catch (error) {
        console.error(`Erro ao obter imagens da raça ${breed} ${subBreed}:`, error);
        throw error;
    }
};

/*
Essa função foi feita inicialmente como uma só, com condicional, mas decidi separar devido ao principio
de responsabilidade única do SOLID. Ela está aqui apenas pra referência e provavelmente vai ser apagada
num commit posterior de limpeza caso eu não volte a usá-la.

const getBreedImage = async (breed, subBreed = '') => {
  try {
    let url = `breed/${breed}/images/random`;
    if (subBreed) {
      url = `breed/${breed}/${subBreed}/images/random`; 
    }

    const response = await axiosClient.get(url);

    return response.data.message;
  } catch (error) {
    console.error(`Erro ao obter imagens da raça ${breed}${subBreed ? ` (${subBreed})` : ''}:`, error);
    throw error;
  }
};
*/
