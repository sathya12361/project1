package com.sathyaspring.demoproject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/test")
    public String test() {
        return "<h1>Hello SpringBoot</h1>";
    }

    @GetMapping("/sathya")
    public String addition() {
        int a = 607;
        int b = 360;
        return "<h2>Total: " + (a + b) + "</h2>";
    }

    public int myfunction(int a, int b) {
        return a + b;
    }

    @GetMapping("/args")
    public String myAdd() {
        return "<h1>Result: " + myfunction(100, 200) + "</h1>";
    }


int sarr(int[] myarr)
{
	int len=myarr.length;
	int sum=0;
	for(int i=0;i<len;i++)
	{
		sum=sum+myarr[i];
		
	}
	return sum;
}
@GetMapping("/arrsum")
public String funArrSum() {
	int arr[]= {11,22,33,44,55,66};
	int arrtot = sarr(arr);
	return "Length oh array:"+arr.length+"<h2>summ of Array:"+arrtot +"</h2>";
}


//runtime data fron url with parameters

@GetMapping("/app/v1/{id}")
public String showArgs(@PathVariable Long id)
{
    long data=id;
    return "<h1>Your URL runtime data:"+data+"</h1>";
}

@GetMapping("/objdata")
public String showObjectData()
{
	    Person p1 = new Person("sathya", 20);
	    Person p2 = new Person("sathi", 21);
	    Person p3 = new Person("priya", 22);
	    Person p4 = new Person("jeeva", 21);
	    Person p5 = new Person("kerthika", 20);

	  /*  String data1 = p1.getSname() + "--------->" + p1.getAge();
	    String data2 = p2.getSname() + "--------->" + p2.getAge();
	    String data3 = p3.getSname() + "--------->" + p3.getAge();
	    String data4 = p4.getSname() + "--------->" + p4.getAge();
	    String data5 = p5.getSname() + "--------->" + p5.getAge();
	    */
	    Person p[] = {p1, p2, p3, p4, p5};

	    String ans = "<table border='4' cellpadding='5' bgcolor='cyan' align='center'>"
	               + "<tr><th>SNo</th><th>Student Name</th><th>Age</th></tr>";

	    for(int i = 0; i < p.length; i++)
	    {
	        ans = ans + "<tr><td>" + (i + 1) + "</td><td>"
	             + p[i].getSname() + "</td><td>"
	             + p[i].getAge() + "</td></tr>";
	    }

	    ans = ans + "</table>";

	    return ans;
}

}








