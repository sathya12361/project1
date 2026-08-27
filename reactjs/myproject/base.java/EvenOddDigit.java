import java.util.Scanner;

public class EvenOddDigit {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Number: ");
        int n = sc.nextInt();

        int evenCount = 0, oddCount = 0;
        int evenSum = 0, oddSum = 0;

        String evenDigits = "";
        String oddDigits = "";

        while (n > 0) {
            int digit = n % 10;

            if (digit % 2 == 0) {
                evenDigits = digit + evenDigits;
                evenCount++;
                evenSum += digit;
            } else {
                oddDigits = digit + oddDigits;
                oddCount++;
                oddSum += digit;
            }

            n = n / 10;
        }

        System.out.println("Display Even Digits : " + evenDigits);
        System.out.println("Display Odd Digits  : " + oddDigits);

        System.out.println("Even Digit Count : " + evenCount);
        System.out.println("Odd Digit Count  : " + oddCount);

        System.out.println("Sum of Even Digits : " + evenSum);
        System.out.println("Sum of Odd Digits  : " + oddSum);

        sc.close();
    }
}