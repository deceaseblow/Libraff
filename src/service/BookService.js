import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

async function getAllBooksAxios() {
    try {
        const response = await axios.get(BASE_URL + '/books');
        return response.data;
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
}

async function getWeeksBooks() {
    try {
        const response = await axios.get(BASE_URL + '/heftenin-en-son-baxilanlari');
        return response.data;
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
}

async function getSecilmisBooks() {
    try {
        const response = await axios.get(BASE_URL + '/secilmis');
        return response.data;
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
}

async function getCategories() {
    try {
        const response = await axios.get(BASE_URL + '/kateqoriyalar');
        return response.data;
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
}

async function getBookByIdAxios(id) {
    try {
        const response = await axios.get(`${BASE_URL}/books/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching book:", error);
        throw error;
    }
}

async function postBookAxios(bookData) {
    try {
        const response = await axios.post(`${BASE_URL}/books`, bookData);
        return response.data;
    } catch (error) {
        console.error("Error posting book:", error);
        throw error;
    }
}

async function updateBookAxios(id, bookData) {
    try {
        const response = await axios.put(`${BASE_URL}/books/${id}`, bookData);
        return response.data;
    } catch (error) {
        console.error("Error updating book:", error);
        throw error;
    }
}

async function deleteBookAxios(id) {
    try {
        const response = await axios.delete(`${BASE_URL}/books/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting book:", error);
        throw error;
    }
}

export { 
    getAllBooksAxios, 
    getWeeksBooks, 
    getSecilmisBooks, 
    getCategories, 
    getBookByIdAxios, 
    postBookAxios, 
    updateBookAxios,
    deleteBookAxios,
    BASE_URL 
};