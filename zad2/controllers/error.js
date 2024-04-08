const getNotFoundPage = (req, res) => {
    res.render('NotFound', 
    { pageTitle: 'Not found', message: 'Page doesn’t exist' 
});};

module.exports = { getNotFoundPage };
