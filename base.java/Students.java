import java.util.Scanner;
public class Students {
    int rno;
    String sname;
    float mark;
    Scanner scan=new Scanner(System.in);
    void getdata()
    {
        System.out.println("Enter rno sname and mark:");
        rno=scan.nextInt();
        sname=scan.next();
        mark=scan.nextFloat();
    
   
    }
    void dis()
    {
        System.out.println(rno+"  "+sname+"   "+mark);
    }
    public static void main(String[] args)
    {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter total no. of students:");
        int n=scan.nextInt();
        Stud s[]=new Stud[n];
        for(int i=0;i<n;i++)
        {
            s[i]=new Stud();
            s[i].getdata();
        }
        for(int i=0;i<n;i++)`
        {
           s[i].dis();
        }
        //fail student list (mark<50)
        System.out.println("----------pass and fail students list-----------");
        for(int i=0;i<n;i++)
        {
            if(s[i].mark<40)  -->  //if(s[i].mark<50)
                s[i].dis();
        }

    }
}