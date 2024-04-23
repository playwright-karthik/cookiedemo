// var un = $('.un');
// var pwd = $('.pass');
// var submitBtn = $('.submit')
// var forgotpwd = $('.forgot')

// // var authenticate = function () {

// //     $.post('http://localhost:57095/api/name/authenticate',
// //     {
// //         "username": username, "password": password
// //     }, function (data, status) {
// //         console.log('Entered');
// //         if(!data == null)
// //         {
// //             forgotpwd.value = status;
// //         }
// //     })
// // }

// // var authenticateCrossOrigin = function () {
// //     $.ajax({
// //         type: 'POST',
// //         url: 'http://localhost:57095/api/name/authenticate',
// //         crossDomain: true,
// //         data: '{"username" : "test1", "password" : "password1"}',
// //         dataType: 'json',
// //         success: function (responseData, textStatus, jqXHR) {
// //             var value = responseData.someKey;
// //             console.log(val);
// //         },
// //         error: function (responseData, textStatus, errorThrown) {
// //             alert('POST failed.');
// //         }
// //     });
// // }



// const authenticateJs = function(){ 
//     const username = un.val();
//     const password = pwd.val();
//     fetch('http://localhost:57095/api/name/authenticate', {
//     method: 'POST', 
//     body: JSON.stringify({"username": `${username}`, "password":`${password}`}),
//     headers: {
//         'content-type': 'application/json'
//     }
//   }).then(res => {
//     console.log("Request complete! response:", res);
//   });
// }



// submitBtn.on('click', authenticateJs);





