module.exports = app => {
  app.db.sequelize.sync().done(() => {
    app.listen(process.env.PORT || 8080, () => console.log('API app started on port ' + (process.env.PORT || 8080)));
  });
};