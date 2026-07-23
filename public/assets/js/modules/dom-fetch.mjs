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