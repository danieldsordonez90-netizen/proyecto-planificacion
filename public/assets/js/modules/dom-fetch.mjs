/*
 author jose.inestroza@unah.edu.hn, christian.vijil@unah.hn
 version 0.1.0
 date 2026/07/18
 */

export const fetchJSON = async (endpoint, options = {}) => {
    try {
        const response = await fetch(endpoint, options);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Fallo en la petición Fetch:", error);
        return null;
    }
};