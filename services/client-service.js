
const createProduct = async (jsonProduct) => {
    try {
        const response = await fetch(`x`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonProduct
        });
        return response.json;
    } catch (error) {
        return console.log(error);
    }
}

const readProducts = () => fetch('x').then(response => response.json());

const readProduct = (id) => fetch(`x/${id}`).then(response => response.json());

const deleteProduct = (id) => {
    return fetch(`x/${id}`, {
        method: 'DELETE'
    });
};

const updateProduct = (id, jsonProduct) => {
    return fetch(`x/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonProduct
    })
    .then(response => response.json)
    .catch(error => console.log(error))
}


export const clientService = {
    createProduct,
    readProducts,
    readProduct,
    updateProduct,
    deleteProduct,
};