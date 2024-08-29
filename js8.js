//XML
let requist = new XMLHttpRequest();
requist.open("GET", "https://reqres.in/api/unknown", true);

requist.onload = function() {
    if (requist.status >= 200 && requist.status < 300) {
        let response = requist.responseText;
        let responseJs = JSON.parse(response); 
        let data = responseJs.data;
        data.forEach(function(item) {
            console.log("Name: " + item.name + ", Color: " + item.color);
        });
    } else {
        console.log("Error: " + requist.status);
    }
};

requist.send();
//fetch
fetch("https://jsonplaceholder.typicode.com/users", {
    method:"GET",
})
.then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
.then(data =>{
    data.forEach(users => {
        console.log('company name:' + users.company.name);
    });
})
.catch( error=> {
    console.error("There was a problem with the fetch operation:", error)
});