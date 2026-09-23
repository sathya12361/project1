public class Emp {  //type 2 method
    int eno1;
    String ename;
    float esal;
    Emp(int eno,String ename,float esal)
    {
        System.out.println("arg or parametarazied constructor");
        eno1=eno;
        this.ename=ename;
        this.esal=esal;
    }
    void show()
    {
        System.out.println("this is normal method");
        System.out.println(eno1+"  "+ename+"   "+esal);
    }
    public static void main(String[] args) {
        
        Emp e1=new Emp(1001,"sathya",77556.10f); // constructor
        Emp e2=new Emp(1002,"pavya",97556.9f); // constructor
        e1.show(); // normal method
        e2.show(); // normal method
        e1=e2;//copy  //copy constructor method
        e1.show();
        e2.show();
    }

}