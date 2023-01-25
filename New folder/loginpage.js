function validate() 
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
let loginCred = [{username: 'Atharva', password:'abc123'},{username: 'deepak', password:'12345'},{username: 'kuldeep', password: 'welcome'}]

const userIndex = loginCred.findIndex(x => x.username === username);

if (loginCred.indexOf(username != -1))
{
    
    if((username ===loginCred[userIndex].username) && (password ===  loginCred[userIndex].password)){
    alert(JSON.stringify(loginCred[2]))
    alert ("login succesfully");
    }
    else
    {
        alert("login failed password incorrect");
    }
}
else
{
    alert("login failed");
}
}