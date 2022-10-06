function fetchSession(url, type, data) {
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
    $(document).on('click','#AllSession',function(event)
        {
        fetchSession("http://localhost:3000/sessions", "GET").then(res => console.log(res));
    
        }
    )

    $(document).on('click','#getSessionId',function(event)
        {
            var id= document.getElementById("SessionId").value.trim();
            if(id==null||id=="")
            {
                alert("Please fill in ID to search!");
            }
            else{
                fetchSession(`http://localhost:3000/sessions/${id}`, "GET").then(res => console.log(res));
                alert("Search Request Sent!");
            }
            
        }
    )

    $(document).on('click','#postSession',function(event)
        {
            var Client1=$("#Client1").val();
            var Client2=$("#Client2").val();
            var Client3=$("#Client3").val();
            var TherapistID=$("#Therapist").val();
            var SessionDate=$("#SessionDate").val();
            var SessionTime=$("#SessionTime").val()+"Mins";
            var Fee=$("#Fee").val()+"€";
            var SessionNumber=$("#Number").val();
            var Attendance=$("#Attendance").val();
            var Type=$("#Type").val();
            if(Type=="Other")
            {
                Type=$("#TypeOther").val();
            }
            var Note=$("#Note").val();
            var RecordDate=Date();
            if (Type == null || Type == "" ||Client1 == null || Client1 == "" || TherapistID == null || TherapistID == "" || SessionTime== null || SessionTime == "" || Fee == null || Fee == "" || SessionNumber == null || SessionNumber == "" || Note == null || Note == "") {
                alert("Please Fill in All Required Field!");//check everything is inputed
            }
            else if((Client2 == null|| Client2 =="")&&( Client3 == null|| Client3 =="")){
                fetchSession("http://localhost:3000/sessions", "POST",{"Client1ID": `${Client1}`,"TherapistID": `${TherapistID}`,"SessionDate": `${SessionDate}`,"SessionTime": `${SessionTime}`,"Fee": `${Fee}`,"SessionNumber": `${SessionNumber}`,"Attendance": `${Attendance}`,"Type": `${Type}`,"Note": `${Note}`,"RecordDate": `${RecordDate}`}).then(res => console.log(res));
                alert("Data Inserted!");
            }
            else if((Client2 != null|| Client2!="")&&( Client3 == null|| Client3 =="")){
                fetchSession("http://localhost:3000/sessions", "POST",{"Client1ID": `${Client1}`,"Client2ID": `${Client2}`,"TherapistID": `${TherapistID}`,"SessionDate": `${SessionDate}`,"SessionTime": `${SessionTime}`,"Fee": `${Fee}`,"SessionNumber": `${SessionNumber}`,"Attendance": `${Attendance}`,"Type": `${Type}`,"Note": `${Note}`,"RecordDate": `${RecordDate}`}).then(res => console.log(res));
                alert("Data Inserted!");      
            }
            else if((Client2 == null|| Client2=="")&&( Client3 != null|| Client3 !="")){
                fetchSession("http://localhost:3000/sessions", "POST",{"Client1ID": `${Client1}`,"Client3ID": `${Client3}`,"TherapistID": `${TherapistID}`,"SessionDate": `${SessionDate}`,"SessionTime": `${SessionTime}`,"Fee": `${Fee}`,"SessionNumber": `${SessionNumber}`,"Attendance": `${Attendance}`,"Type": `${Type}`,"Note": `${Note}`,"RecordDate": `${RecordDate}`}).then(res => console.log(res));
                alert("Data Inserted!");      
            }
            else{
                // fetchSession("http://localhost:3000/sessions", "POST",data).then(res => console.log(res));
                fetchSession("http://localhost:3000/sessions", "POST",{"Client1ID": `${Client1}`,"Client2ID": `${Client2}`,"Client3ID": `${Client3}`,"TherapistID": `${TherapistID}`,"SessionDate": `${SessionDate}`,"SessionTime": `${SessionTime}`,"Fee": `${Fee}`,"SessionNumber": `${SessionNumber}`,"Attendance": `${Attendance}`,"Type": `${Type}`,"Note": `${Note}`,"RecordDate": `${RecordDate}`}).then(res => console.log(res));
                alert("Data Inserted!");
                
            }
            
        }
    )
    $(document).on('click','#deleteSession',function(event)
        {
            var id= document.getElementById("SessionId").value.trim();
            if(id==null||id=="")
            {
                alert("Please fill in ID to search!");
            }
            else{
                fetchSession(`http://localhost:3000/sessions/${id}`, "DELETE").then(res => console.log(res));
                alert("Delete Request Sent!");
            }
            
        }
    )
    $(document).on('click','#patchSession',function(event)
        {
            var Client1=$("#Client1").val();
            var Client2=$("#Client2").val();
            var Client3=$("#Client3").val();
            var TherapistID=$("#Therapist").val();
            var SessionDate=$("#SessionDate").val();
            var SessionTime=$("#SessionTime").val()+"Mins";
            var Fee=$("#Fee").val()+"€";
            var SessionNumber=$("#Number").val();
            var Attendance=$("#Attendance").val();
            var Type=$("#Type").val();
            if(Type=="Other")
            {
                Type=$("#TypeOther").val();
            }
            var Note=$("#Note").val();
            var RecordDate=Date();
            var id= document.getElementById("SessionId").value.trim();
            if (Type == null || Type == "" ||Client1 == null || Client1 == "" || TherapistID == null || TherapistID == "" || SessionTime== null || SessionTime == "" || Fee == null || Fee == "" || SessionNumber == null || SessionNumber == "" || Note == null || Note == "") {
                alert("Please Fill All Required Field In The Above Form!");//check everything is inputed
            }
            else{
                fetchSession(`http://localhost:3000/sessions/${id}`, "PATCH",{"Client1ID": `${Client1}`,"Client2ID": `${Client2}`,"Client3ID": `${Client3}`,"TherapistID": `${TherapistID}`,"SessionDate": `${SessionDate}`,"SessionTime": `${SessionTime}`,"Fee": `${Fee}`,"SessionNumber": `${SessionNumber}`,"Attendance": `${Attendance}`,"Type": `${Type}`,"Note": `${Note}`,"RecordDate": `${RecordDate}`}).then(res => console.log(res));
                alert("Updated Request Sent!");
            }
            
        }
    )
});
function checkTypevalue(val)
{
    if(val==="Other")
       document.getElementById('TypeOther').style.display='block';
    else
       document.getElementById('TypeOther').style.display='none'; 
}