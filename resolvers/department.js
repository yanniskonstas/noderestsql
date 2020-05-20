const base = 'http://localhost:3099/api';
const fetch = require('node-fetch');

module.exports = {
    Query: {
        departments: async () => {
            return await fetch(`${base}/departments`).then(response => response.json());
        },
        department: async (parent, { id }) => {
            return await fetch(`${base}/departments/${id}`).then(response => response.json());
        },
    },
    Department: {
        employees: async parent => { 
            console.log(parent);
            const { id } = parent;
            return await fetch(`${base}/departments/${id}/employees`).then(response => response.json());
        }
    }
}