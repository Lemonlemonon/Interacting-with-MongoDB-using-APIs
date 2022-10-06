function fetchClient(url, type, data) {
    /* GET */
    if (type === "GET") {
        return fetch(url, {
                method: type,
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => {
                if (res.ok) {
                    console.log("HTTP request successful")
                    alert("HTTP request successful,Check console for detail!");
                } else {
                    console.log("HTTP request unsuccessful");
                    alert("HTTP request unsuccessful! Please make sure you enter vaild data!!!!");
                }
                return res
            })
            .then(res => res.json())
            .then(data => data)
            .catch(error => error)
    }

    /* DELETE */
    if (type === "DELETE") {
        return fetch(url, {
                method: type,
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => {
                if (res.ok) {
                    console.log("HTTP request successful")
                    alert("HTTP request successful,Check console for detail!");
                } else {
                    console.log("HTTP request unsuccessful")
                    alert("HTTP request unsuccessful! Please make sure you enter vaild data!!!!");
                }
                return res
            })
            .catch(error => error)
    }

    /* POST or PUT */
    if (type === "POST" | type === "PUT") {
        return fetch(url, {
                method: type,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => {
                if (res.ok) {
                    console.log("HTTP request successful")
                    alert("HTTP request successfu,Check console for detail!l");
                } else {
                    console.log("HTTP request unsuccessful")
                    alert("HTTP request unsuccessful! Please make sure you enter vaild data!!!!");
                }
                return res
            })
            .then(res => res.json())
            .then(data => data)
            .catch(error => error)
    }
    //patch
    if (type === "PATCH") {
        return fetch(url, {
                method: type,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => {
                if (res.ok) {
                    console.log("HTTP request successful")
                    alert("HTTP request successful,Check console for detail!");
                } else {
                    console.log("HTTP request unsuccessful")
                    alert("HTTP request unsuccessful! Please make sure you enter vaild data!!!!");
                }
                return res
            })
            .then(res => res.json())
            .then(data => data)
            .catch(error => error)
    }
}

$(document).ready(function($)
{
    $(document).on('click','#AllClient',function(event)
        {
        fetchClient("http://localhost:3000/clients", "GET").then(res => console.log(res));
    
        }
    )

    $(document).on('click','#getClientId',function(event)
        {
            var id= document.getElementById("ClientId").value.trim();
            if(id==null||id=="")
            {
                alert("Please fill in ID to search!");
            }
            else{
                fetchClient(`http://localhost:3000/clients/${id}`, "GET").then(res => console.log(res));
                alert("Search Request Sent!");
            }
            
        }
    )

    $(document).on('click','#postClient',function(event)
        {
            var Title=$("#CLTitle1").val();
            if(Title=="Other")
            {
                Title=$("#CLTitle").val();
            }
            var Gender=$("#Gender").val();
            var FirstName=$("#CLFirstName").val();
            var LastName=$("#CLLastName").val();
            var DOB=$("#DOB").val();
            var U18=$("#U18").val();
            var MS=$("#MS").val();
            var Mobile=$("#CLMobile").val();
            var Email=$("#CLEmail").val();
            var Permission=$("#Permission").val();
            var Address=$("#CLAddress").val();
            var Address2=$("#CLAddress2").val();
            var City=$("#CLCity").val();
            var Town=$("#CLTown").val();
            var Eircode=$("#CLEircode").val();
            var RecordDate=Date();
            if (Title == null || Title == "" ||DOB == null || DOB == "" ||FirstName == null || FirstName == "" || LastName == null || LastName == "" || Mobile == null || Mobile == ""|| Email == null || Email == ""|| Address == null || Address == ""|| Town == null || Town == ""|| City == null || City == "") {
                alert("Please Fill All Required Field");//check everything is inputed
            }
            else{
                // fetchClient("http://localhost:3000/clients", "POST",data).then(res => console.log(res));
                fetchClient("http://localhost:3000/clients", "POST",{"Title": `${Title}`,"Gender": `${Gender}`,"Firstname": `${FirstName}`,"Surename": `${LastName}`,"DOB": `${DOB}`,"U18": `${U18}`,"MS": `${MS}`,"Mobile": `${Mobile}`,"Email": `${Email}`,"PermissionToMessage": `${Permission}`,"Address1": `${Address}`,"Address2": `${Address2}`,"Town": `${Town}`,"CountryCity": `${City}`,"Eircode": `${Eircode}`,"RecordDate": `${RecordDate}`}).then(res => console.log(res));
                alert("Data Inserted!");
                
            }
            
        }
    )
    $(document).on('click','#deleteClient',function(event)
        {
            var id= document.getElementById("ClientId").value.trim();
            if(id==null||id=="")
            {
                alert("Please fill in ID to search!");
            }
            else{
                fetchClient(`http://localhost:3000/clients/${id}`, "DELETE").then(res => console.log(res));
                alert("Delete Request Sent!");
            }
            
        }
    )
    $(document).on('click','#patchClient',function(event)
        {
            var Title=$("#CLTitle1").val();
            if(Title=="Other")
            {
                Title=$("#CLTitle").val();
            }
            var FirstName=$("#CLFirstName").val();
            var LastName=$("#CLLastName").val();
            var DOB=$("#DOB").val();
            var U18=$("#U18").val();
            var MS=$("#MS").val();
            var Mobile=$("#CLMobile").val();
            var Email=$("#CLEmail").val();
            var Permission=$("#Permission").val();
            var Address=$("#CLAddress").val();
            var Address2=$("#CLAddress2").val();
            var City=$("#CLCity").val();
            var Town=$("#CLTown").val();
            var Eircode=$("#CLEircode").val();
            var id= document.getElementById("ClientId").value.trim();
            if (Title == null || Title == "" ||id==null||id==""||FirstName == null || FirstName == "" || LastName == null || LastName == "" || Mobile == null || Mobile == ""|| Email == null || Email == ""|| Address == null || Address == ""|| Town == null || Town == ""|| City == null || City == "") {
                alert("Please Fill All Required Field In The Above Form!");//check everything is inputed
            }
            else{
                fetchClient(`http://localhost:3000/clients/${id}`, "PATCH",{"Title": `${Title}`,"Gender": `${Gender}`,"Firstname": `${FirstName}`,"Surename": `${LastName}`,"DOB": `${DOB}`,"U18": `${U18}`,"MS": `${MS}`,"Mobile": `${Mobile}`,"Email": `${Email}`,"PermissionToMessage": `${Permission}`,"Address1": `${Address}`,"Address2": `${Address2}`,"Town": `${Town}`,"CountryCity": `${City}`,"Eircode": `${Eircode}`}).then(res => console.log(res));
                alert("Updated Request Sent!");
            }
            
        }
    )
});
function checkCLTitlevalue(val)
{
    if(val==="Other")
       document.getElementById('CLTitle').style.display='block';
    else
       document.getElementById('CLTitle').style.display='none'; 
}