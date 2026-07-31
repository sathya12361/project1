import java .util.Scanner;
public class WhilDemo {
    public static void main(String[] args);
    Scanner scan=new Scanner (System )
    System.out.print(:"Enter N Value");
    long n=scan.nextLong();  //1234
    long r,s=0;
    While(n!=0)  //1234 123 12 1 0
    {
        r=n%10;  //4  3   2   1
        n=n/10;  //123  12  1  0
        s=s+r;  //0+4  4+3  7+2 9+
    }
    System.out.println("sum of digite");
    scan.close();
}
