const base = 'http://localhost:3099/api';
const fetch = require('node-fetch');

module.exports = {
    Query: {
        employees: async () => {
            //call /api/employees
            //HTTP, axios, request, node-fetch (Fetch API)
            return await fetch(`${base}/employees`).then(response => response.json());
        },
        employee: async (parent, { id }) => {
            return await fetch(`${base}/employees/${id}`).then(response => response.json());
        }
    },
    Employee : {
        department: async parent => {
            return await fetch(`${base}/departments/${parent.department}`).then(response => response.json());
        }
    }
}