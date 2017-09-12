module.exports = app => {
  app.db.sequelize.sync().done(() => {
    app.listen(3000, () => console.log('API app started'));
  });
};