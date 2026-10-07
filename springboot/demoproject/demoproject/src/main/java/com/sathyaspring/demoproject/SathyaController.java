package com.sathyaspring.demoproject;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SathyaController {

    @GetMapping("/sa")
    public String myMethod(Model model) {

        model.addAttribute("name", "Sathya");
        model.addAttribute("age", 20);
        model.addAttribute("city", "Chennai");

        return "index";
    }

    @GetMapping("/sa/v3")
    public String itemMethod(Model model) {

        Person p1=new Person("sathya", 20);
        Person p2=new Person("pavya", 24);
        Person p3=new Person("abinaya", 23);
        Person p4=new Person("kerthika", 22);
        Person p5=new Person("sathi", 20);

        List<Person> plist=Arrays.asList(p1,p2,p3,p4,p5);

        model.addAttribute("Personslist", plist);

        return "myfile";
    }
    @GetMapping("/sa/v4")
    public String jspmethod(Model model) 
    {
    	return "mypgm";
    }
    
    @GetMapping("/sa/v5")
    public String testAge(Model model)
    {
    	int age=16;
    	model.addAttribute("studage", age);
    	return "age";
    }
}