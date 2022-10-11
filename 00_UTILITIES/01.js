//const { g_updateValues } = require('../01_google/03_g_updateValues');

async function mt_getAllContacts(){
  const Mautic = require('mautic')
  const client = new Mautic({
    baseUrl: 'https://ms2.institutoclei.com/api',
    auth: {
      username: 'adminms2',
      password: 'Clei/12345+' ,
    }
  })

  let totalContacts = (await client.contacts.list({search:'!is:anonymous'})).data.total
  console.log(totalContacts);
  
  let limit = '100'
  var matrix =[]

  for(j=20180;j<=totalContacts;j+=100){
    
    const response = await client.contacts.list({ search:'!is:anonymous', limit:limit, start:j, orderBy:'ID' })
    //console.log(response);
    var data = response.data

    //console.log(data);
    var total = Object.keys(data.contacts).length
    console.log(j);
    
    
    for (i=0;i<=total-1;i++){
  
      let array = []
      var firstname = Object.values(data.contacts)[i].fields.core.firstname.value
      var lastname = Object.values(data.contacts)[i].fields.core.lastname.value
      var phone = Object.values(data.contacts)[i].fields.core.phone.value
      var email = Object.values(data.contacts)[i].fields.core.email.value
      var invalidemail = Object.values(data.contacts)[i].fields.core.invalidemail.value
      var course = Object.values(data.contacts)[i].fields.core.course.value
      var interest = Object.values(data.contacts)[i].fields.core.interest.value
      var lifecyclestage = Object.values(data.contacts)[i].fields.core.lifecyclestage.value
      var lifecyclestageother = Object.values(data.contacts)[i].fields.core.lifecyclestageother.value
      var lifecyclestagequalified = Object.values(data.contacts)[i].fields.core.lifecyclestagequalified.value
      var secondaryphone = Object.values(data.contacts)[i].fields.core.secondaryphone.value
      var createdat = Object.values(data.contacts)[i].fields.core.createdat.value
      var updatedat = Object.values(data.contacts)[i].fields.core.updatedat.value
  
      array.push(firstname,lastname,phone,email,invalidemail,course,interest,lifecyclestage,lifecyclestageother,lifecyclestagequalified,secondaryphone,createdat,updatedat)
  
      //console.log(array);
  
      matrix.push(array)
      
      
    }


  }



console.log(matrix);
console.log(matrix.length);

  
}

mt_getAllContacts()
