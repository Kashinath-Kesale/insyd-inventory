const API_BASE_URL = 'http://localhost:5000/api/inventory';

export const getItems = async() =>{
    const response = await fetch(API_BASE_URL);
    return response.json();
}

export const addItem = async(item) =>{
    const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    })

    return response.json();
}

export const updateItem = async(id, data) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},

        body:JSON.stringify(data)
    })

    return response.json();
};

export const getLowStockItems = async() =>{
    const response = await fetch(`${API_BASE_URL}/low-stock`);
    return response.json();
}