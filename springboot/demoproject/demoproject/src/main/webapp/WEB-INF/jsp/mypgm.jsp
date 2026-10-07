<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
   <h1>Welcome to JSP</h1>
<%
    int i=1;
String sname="sathya.R";
while(i<=50)
{
	if(i%2==0)
		out.println("<br><font color='red'>"+sname+" "+i+"</font>");
		else
			out.println("<br><font color='green'>"+sname+"  "+i+"</font>");
			i++;
}
%>   
</body>
</html>