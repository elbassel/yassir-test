console.log('API======>');
console.log(process.env.API_URL);


module.exports = {
    API: process.env.API_URL || 'http://localhost:3000',
}