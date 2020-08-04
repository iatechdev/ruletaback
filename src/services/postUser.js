import db from '../database/models/index';
let userData  ="";
let base64 = require('base-64');
const fetch = require('node-fetch');
global.fetch = fetch
global.Headers = fetch.Headers;
const url =  'http://api.crmviva.com/api/Customer/GetMasterTableByName?masterTableName=MALLS&id=1%27';
const url2 = 'http://api.crmviva.com/api/Customer/GetCustomerByIdentification';
const url3 = 'http://api.crmviva.com/api/Customer/SaveGameParticipation';
const username = 'USER_RULETA';
const password = 'VivaRuleta2020';
const headers = new Headers({
  'content-type': 'application/json',
  'Authorization': 'Basic ' + base64.encode(username + ":" + password)
});

const postUser = async (body) => {
          let IdentificationNumber = body.IdentificationNumber
          let CodeIdentificationType = body.CodeIdentificationType
          let win = 0;
          let msg = "Gracias por actualizar tus datos";
          var n100 = Math.floor(Math.random() * 100 + 1);
          //traigo la informacion del usuario desde viva
          let userData = await fetch(url2, {
              method: 'POST',
              headers: headers,
              body: JSON.stringify({
                IdentificationNumber: IdentificationNumber,
                CodeIdentificationType: CodeIdentificationType
              })
            })
            .then(response => response.json())
            .then(function (json) {
              return json.Data
            });
            //console.log(userData)
            if (userData){
                      let cc = userData[0].CENTRO_COMERCIAL_REGISTRO_ID;
                      let GUID = userData[0].GUID
                      let nombres = userData[0].PRIMER_NOMBRE + " " + userData[0].PRIMER_APELLIDO;
                      
                      
                      
                      //traigo la informacion del usuario desde viva

                      let ccData = await db.ruletaCC.findOne({
                        where: {
                          idcc: cc
                        }
                      }).then(data => {
                          return data;
                        }).catch(e => {
                      //  //console.log(e);
                      });
                      let userDataruleta = await db.ruletaUser.findOne({
                        where: {
                          identification_number: IdentificationNumber
                        }
                      }).then(data => {
                        return {
                          data: data
                        }
                      }).catch(e => {
                      //  //console.log(e);
                      });

                
                      if (ccData.quantity > ccData.winners && ccData.available >= 1 && userDataruleta.data === null && n100 >= 75) {
                                let iswin = false
                                let updPremios = await db.sequelize.query('UPDATE ruleta_cc SET winners= winners + 1, available = available - 1 WHERE id = ' + ccData.id + ' AND winners < ' + ccData.quantity)
                                  .then(function (data) {
                                    return data;
                                  })
                                  if (updPremios[0].affectedRows == "1"){  
                                    win = 1
                                    iswin = true
                                  }else{
                                    win = 0
                                  }

                                  await db.ruletaUser.create({
                                    identification_type_id: CodeIdentificationType,
                                    identification_number: IdentificationNumber,
                                    guid: GUID,
                                    centro_comercial_registro: cc,
                                    iswinner: win
                                  }).then(data => {
                                    return data;
                                  }).catch(e => {
                                    //console.log(e);
                                  });

                                  await fetch(url3, {
                                    method: 'POST',
                                    headers: headers,
                                    body: JSON.stringify({
                                      ClientGuid: GUID,
                                      IsWinner: iswin
                                    })
                                  })
                                  .then(response => response.json())
                                  .then(function (json) {
                                    console.log(json)
                                  });


                                  return {
                                    st: win,
                                    name: nombres,
                                    msg: msg
                                  }

                    } else {
                              await fetch(url3, {
                                  method: 'POST',
                                  headers: headers,
                                  body: JSON.stringify({
                                    ClientGuid: GUID,
                                    IsWinner: false
                                  })
                                })
                                .then(response => response.json())
                                .then(function (json) {
                                  //console.log(json)
                                });

                                  return {
                                    st: win,
                                    name: nombres,
                                    msg: msg
                                  }
                    }


            } else {
              return {
                st: 3,
                name: "Usuario no registrado",
                msg: msg
              }
            }






          
         // return userDataruleta


/* //centro comercial
  await fetch(url, {
      method: 'POST',
      headers: headers
    })
    .then(response => response.json())
    .then(function (json) {
        return json.Data
    });
*/


/*
    //para dar el ganador
  let IsWinner = await fetch(url3, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        ClientGuid: IdentificationNumber,
        IsWinner: CodeIdentificationType
      })
    })
    .then(response => response.json())
    .then(function (json) {
      return json.Data
    });


  return await userData[0].GUID*/
  
    





}

module.exports = {
  postUser
}