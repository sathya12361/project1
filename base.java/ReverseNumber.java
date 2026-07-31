import java.util.Scanner;

public class ReverseNumber 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Number: ");
        long n = sc.nextLong();

        while (n != 0) {
            System.out.print(n % 10);
            n = n / 10;
        }
    }
}