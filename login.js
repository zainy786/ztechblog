var conn =require('./connect');
var g= conn();
module.exports=function login(username,password,response)
{
  query= 'Select * FROM login_table where username= \''+username+'\' AND password=\''+password+'\'';
  console.log(query);
  g.query(query, function(error,result)
  {
    if (error) throw error;
    if(result[0]){
response.writeHead(200,{'content-type':'text/html'});
response.write('you are connected');
response.end();
}
else {

response.writeHead(200,{'content-type':'text/html'});
response.write('you are not connected');
response.end();
}
    //console.log(result);
  });

}
