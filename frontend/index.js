const axios = require('axios');

const runFrontend = async () => {
  try {
    const res = await axios.get('http://backend:5000/api');
    console.log('Frontend received:', res.data.message);
  } catch (err) {
    console.error('Frontend error:', err.message);
  }
};

runFrontend();
setInterval(runFrontend, 5000); 
