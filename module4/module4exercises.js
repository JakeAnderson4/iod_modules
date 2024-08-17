class User{
    constructor(id, name, username, email, address){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = '304 Kensington St USA';  
    }   
}

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    //process the data
    const users = data.map(user => {
        const {id, name, username, email, address} = user;
        return new User(id, name, username, email, address);
    });

  console.log(users);
})

.catch(error => console.error('Error fetching data' , error))





