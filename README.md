# NODE-EXPRESS

API is available on [https://frontcamp-node.herokuapp.com/](https://frontcamp-node.herokuapp.com/)

User example: 
* username: firstUser, password: 1111
* username: secondUser, password: 2222

Registration:   
POST /auth/register HTTP/1.1  
Host: frontcamp-node.herokuapp.com  
Content-Type: application/x-www-form-urlencoded  
cache-control: no-cache  
username=secondUserpassword=2222  

Login:  
POST /auth/login HTTP/1.1  
Host: frontcamp-node.herokuapp.com  
Content-Type: application/x-www-form-urlencoded  
cache-control: no-cache  
username=secondUserpassword=2222  

Logout:  
GET /auth/logout HTTP/1.1  
Host: frontcamp-node.herokuapp.com  

You can get all news without authentication:  
GET /news HTTP/1.1  
Host: frontcamp-node.herokuapp.com  

Other operations with news available only for authorized users:  
GET /news/1 HTTP/1.1  
Host: frontcamp-node.herokuapp.com  

DELETE /news/3 HTTP/1.1  
Host: frontcamp-node.herokuapp.com  
