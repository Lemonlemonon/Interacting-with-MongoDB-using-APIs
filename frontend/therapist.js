function fetchTherapist(url, type, data) {
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
                    console.log("HTTP request unsuccessful")
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
    $(document).on('click','#AllTherapist',function(event)
        {
        fetchTherapist("http://localhost:3000/therapists", "GET").then(res => console.log(res));
    
        }
    )

    $(document).on('click','#getTherapistId',function(event)
        {
            var id= document.getElementById("TherapistId").value.trim();
            if(id==null||id=="")
            {
                alert("Please fill in ID to search!");
            }
            else{
                fetchTherapist(`http://localhost:3000/therapists/${id}`, "GET").then(res => console.log(res));
                alert("Search Request Sent!");
            }
            
        }
    )

    $(document).on('click','#postTherapist',function(event)
        {
            var Title=$("#Title").val();
            if(Title=="Other")
            {
                Title=$("#TPTitle").val();
            }
            var FirstName=$("#FirstName").val();
            var LastName=$("#LastName").val();
            var Mobile=$("#Mobile").val();
            var Email=$("#Email").val();
            var Address=$("#Address").val();
            var Address2=$("#Address2").val();
            var City=$("#City").val();
            var Town=$("#Town").val();
            var Eircode=$("#Eircode").val();
            var RecordDate=Date();
            if (Title == null || Title == "" ||FirstName == null || FirstName == "" || LastName == null || LastName == "" || Mobile == null || Mobile == ""|| Email == null || Email == ""|| Address == null || Address == ""|| Town == null || Town == ""|| City == null || City == "") {
                alert("Please Fill All Required Field");//check everything is inputed
            }
            else{
                fetchTherapist("http://localhost:3000/therapists", "POST",{"Title": `${Title}`,"Firstname": `${FirstName}`,"Surename": `${LastName}`,"Mobile": `${Mobile}`,"Email": `${Email}`,"Address1": `${Address}`,"Address2": `${Address2}`,"Town": `${Town}`,"CountryCity": `${City}`,"Eircode": `${Eircode}`,"RecordDate": `${RecordDate}`}).then(res => console.log(res));
                alert("Data Inserted!");
                
            }
            
        }
    )
    $(document).on('click','#deleteTherapist',function(event)
        {
            var id= document.getElementById("TherapistId").value.trim();
            if(id==null||id=="")
            {
                alert("Please fill in ID to search!");
            }
            else{
                fetchTherapist(`http://localhost:3000/therapists/${id}`, "DELETE").then(res => console.log(res));
                alert("Delete Request Sent!");
            }
            
        }
    )
    $(document).on('click','#patchTherapist',function(event)
        {
            var Title=$("#Title").val();
            if(Title=="Other")
            {
                Title=$("#TPTitle").val();
            }
            var FirstName=$("#FirstName").val();
            var LastName=$("#LastName").val();
            var Mobile=$("#Mobile").val();
            var Email=$("#Email").val();
            var Address=$("#Address").val();
            var Address2=$("#Address2").val();
            var City=$("#City").val();
            var Town=$("#Town").val();
            var Eircode=$("#Eircode").val();
            var id= document.getElementById("TherapistId").value.trim();
            if (Title == null || Title == "" ||id==null||id==""||FirstName == null || FirstName == "" || LastName == null || LastName == "" || Mobile == null || Mobile == ""|| Email == null || Email == ""|| Address == null || Address == ""|| Town == null || Town == ""|| City == null || City == "") {
                alert("Please Fill All Required Field In The Above Form!");//check everything is inputed
            }
            else{
                fetchTherapist(`http://localhost:3000/therapists/${id}`, "PATCH",{"Title": `${Title}`,"Firstname": `${FirstName}`,"Surename": `${LastName}`,"Mobile": `${Mobile}`,"Email": `${Email}`,"Address1": `${Address}`,"Address2": `${Address2}`,"Town": `${Town}`,"CountryCity": `${City}`,"Eircode": `${Eircode}`}).then(res => console.log(res));
                alert("Updated Request Sent!");
            }
            
        }
    )
});
function checkTPTitlevalue(val)
{
    if(val==="Other")
       document.getElementById('TPTitle').style.display='block';
    else
       document.getElementById('TPTitle').style.display='none'; 
}