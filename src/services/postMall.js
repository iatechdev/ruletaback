import db from '../database/models/index';

const postMall = async () => {
  return await db.ruletaCC.findAll()
    .then(data => {
      return data;
    }).catch(e => {
      console.log(e);
    });
}

module.exports = {
  postMall
}