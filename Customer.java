import java.util.Scanner;
class Customer
{
      public static void main(String args[])
      {
       Scanner scan=new Scanner(System.in);
       System.out.println("Enter customer name:");
       String cname=scan.next();
       System.out.println("Enter customer id:");
       short cid=scan.nextShort();
       System.out.println("Enter amount:");
       int amt=scan.nextInt();
       System.out.println("is account valid y/n:");
       char av=scan.next().charAt(0);
       System.out.println("Enter customer height");
       float hei=scan.nextFloat();
       System.out.println("customer id : "+cid);
       System.out.println("customer name : "+cname);
       System.out.println("fees : "+amt);
       System.out.println("is account vaild : "+av); 
       System.out.println("customer height : "+hei);
       }

 }      
      name="sathya";
      system.out.println(name.replace(oldchar:'a',newchar:'o'));
      system.out.println("starts with :"+name.startsWith(prefix:"Sathya"));
      system.out.println("starts with:"+name.startsWith(prefix:"sathya"));
      system.out.println("ends with :"+name.endsWith(suffix:"ya"));
      System.out.println("ends with :"+name.endsWith(suffix:"er"));
       
      system.out.println(""+name.repeat(count:5));
      name"kal,vi,edu,cat,ion";
      String arr[]=name.split(regex:",");
      system.out.println(arr[0]);
      system.out.println(arr[3]);
}
}


