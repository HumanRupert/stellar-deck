import { createRoot } from 'react-dom/client'
// Import reveal.js CSS first (contains @import for fonts that must come first)
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/white.css'
// Then our custom styles
import './index.css'
import App from './App.tsx'

// Note: StrictMode removed because reveal.js doesn't handle double-initialization well
createRoot(document.getElementById('root')!).render(<App />)
