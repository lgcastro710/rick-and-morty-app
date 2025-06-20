
export const fetchClient = {
    get: async (url, config = {}) => {
        try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            ...config.headers,
            },
            ...config,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
        } catch (error) {
        console.error('Fetch GET error:', error);
        throw error;
        }
    },
    
    post: async (url, data, config = {}) => {
        try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            ...config.headers,
            },
            body: JSON.stringify(data),
            ...config,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
        } catch (error) {
        console.error('Fetch POST error:', error);
        throw error;
        }
    },
    
    put: async (url, data, config = {}) => {
        try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            ...config.headers,
            },
            body: JSON.stringify(data),
            ...config,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
        } catch (error) {
        console.error('Fetch PUT error:', error);
        throw error;
        }
    },
    
    delete: async (url, config = {}) => {
        try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            ...config.headers,
            },
            ...config,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
        } catch (error) {
        console.error('Fetch DELETE error:', error);
        throw error;
        }
    },
}