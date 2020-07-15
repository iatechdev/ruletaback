import db from '../database/models/index';

const postWinners = async () => {
  return await db.ruletaUser.findAll()
    .then(data => {
      return data;
    }).catch(e => {
      console.log(e);
    });
}

module.exports = {
  postWinners
}