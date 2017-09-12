module.exports = app => {
  app.db.sequelize.sync().done(() => {
    app.listen(process.env.port || 8080, () => console.log('API app started on port ' + (process.env.port || 8080)));
  });
};