module.exports = function(app) {
    app.use((error, req, res, next) => {
        res.status(error.statusCode || 500).json({name: error.name,
            message: error.message || 'Ocorreu um erro no servidor.'});
    });
};
