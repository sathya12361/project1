import java.util.Scanner;
class Task  {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.print("Enter N value:");
        int n=scan.nextInt(); //1234
        int r=0;
        while (n != 0)  // 1234 123 12  1
        {
            int rem=n%10; //4  3  2  1
            r=r*10+rem;  //r= 0+4  40+3  430+2  4320+1
            n=n/10;  // 123 12 1  0
        }
        System.out.println("Reverse of the number is:"+r);
        scan.close();
            
        }
    }