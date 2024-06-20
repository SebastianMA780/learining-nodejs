import express from 'express';

const app = express(); // Create an express application

const PORT = 3000;

app.get('/', (req, res) => {
	res.send('Server with express');
});

app.get('/products' , (req, res) => {
	res.json([
		{ id: 1, name: 'Product 1' },
		{ id: 2, name: 'Product 2' },
		{ id: 3, name: 'Product 3' },
	]);
});

app.get('/products/filter', (req, res) => { 
	// This route will be called when the URL is /products/filter
	// It is important to note that the order of the routes is important
	// If we put this route before the /products/:id route, it will never be called
	res.send('Filter products');
});

app.get('/products/:id', (req, res) => {
	const { id } = req.params; // req.params is an object with the parameters in the URL
	const { name } = req.query; // req.query is an object with the query parameters in the URL

	res.json({ id, name: `Product ${id}`, query: name});
});

app.listen(PORT, () => { // Start the server
	console.log(`Server is running on port ${PORT}`);
});
