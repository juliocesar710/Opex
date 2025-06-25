import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/characters',
  timeout: 5000,
})

export async function fetchAllCharacters() {
  try {
    const response = await api.get('/')
    return response.data
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Erro ao buscar personagens'
    )
  }
}

export async function fetchCharacterById(id) {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Erro ao buscar personagem"
    );
  }
}

export async function fetchCharactersByName(name) {
  try {
    const response = await api.get(`/search`, {
      params: { name },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Erro ao buscar personagens pelo nome'
    );
  }
}

export async function fetchCharactersByFilters(filters) {
  try {
    // Remove valores vazios/nulos antes de enviar
    const cleanFilters = Object.fromEntries(
      Object.entries(filters).filter(([value]) => value !== '' && value !== null)
    );
    
    const response = await api.get('/filter', {
      params: cleanFilters,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Erro ao filtrar personagens'
    );
  }
}