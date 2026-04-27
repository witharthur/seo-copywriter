import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    product_name: '',
    category: '',
    keywords: ''
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to connect to backend. Make sure the server is running on port 3001.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container animate-fade-in">
      <div className="glass-card">
        <h2>SEO Copywriter Pro</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Name</label>
            <input 
              type="text" 
              placeholder="e.g. Zenith Smartwatch" 
              value={formData.product_name}
              onChange={(e) => setFormData({...formData, product_name: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input 
              type="text" 
              placeholder="e.g. Wearable Tech" 
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Keywords (comma separated)</label>
            <textarea 
              placeholder="e.g. fitness tracking, heart rate, battery life" 
              value={formData.keywords}
              onChange={(e) => setFormData({...formData, keywords: e.target.value})}
              required
              rows="3"
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? <div className="loader" /> : 'Generate SEO Content'}
          </button>
        </form>
      </div>

      <div className="glass-card">
        {result ? (
          <div className="results-area animate-fade-in">
            <h2>Optimized Results</h2>
            
            <div className="result-item">
              <div className="result-label">SEO Title Tag</div>
              <div className="result-content">{result.title}</div>
            </div>

            <div className="result-item">
              <div className="result-label">Meta Description</div>
              <div className="result-content">{result.meta_description}</div>
            </div>

            <div className="result-item">
              <div className="result-label">H1 Header</div>
              <div className="result-content">{result.h1}</div>
            </div>

            <div className="result-item">
              <div className="result-label">Body Description</div>
              <div className="result-content">{result.description}</div>
            </div>

            <div className="result-item">
              <div className="result-label">Key Features / Bullets</div>
              <ul className="bullet-list">
                {result.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <p>Fill in the product details on the left to generate SEO-optimized content.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
