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

}








