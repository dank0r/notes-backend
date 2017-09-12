module.exports = app => {
  app.db.sequelize.sync().done(() => {
    app.listen(process.env.port || 3000, () => console.log('API app started'));
  });
};