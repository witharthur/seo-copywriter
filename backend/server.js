const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/generate', (req, res) => {
    const { product_name, category, keywords } = req.body;

    if (!product_name || !category || !keywords) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Mocking an AI response based on the input
    const keywordArray = keywords.split(',').map(k => k.trim());
    
    const response = {
        title: `${product_name} - Premium ${category} | ${keywordArray[0]} & ${keywordArray[1] || 'More'}`,
        meta_description: `Discover the ultimate ${category} with ${product_name}. Optimized for ${keywordArray.join(', ')}. Perfect for high-performance needs and professional quality.`,
        h1: `Elevate Your Experience with ${product_name}`,
        description: `${product_name} is the leading solution in the ${category} market. Specifically designed to address the needs of professionals focusing on ${keywordArray[0]}, this product combines cutting-edge technology with intuitive design. Whether you are looking for ${keywordArray[1] || 'superior quality'} or ${keywordArray[2] || 'efficient workflows'}, ${product_name} delivers unmatched performance in the ${category} space.`,
        bullets: [
            `Revolutionary approach to ${keywordArray[0]} with state-of-the-art features.`,
            `Designed specifically for ${category} enthusiasts and professionals alike.`,
            `Enhanced ${keywordArray[1] || 'stability'} and reliability for demanding tasks.`,
            `Seamless integration with your existing ${keywordArray[2] || 'ecosystem'} and tools.`
        ]
    };

    // Simulate a slight delay for realism
    setTimeout(() => {
        res.json(response);
    }, 1500);
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
