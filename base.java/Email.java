import java.util.Scanner;

public class Email {
    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter Email: ");
    String s = sc.nextLine();
    int alpha = 0, num = 0, special = 0;

        int i = 0;

        while (i < s.length()) 
        { 

            char ch = s.charAt(i);
            {
            if (ch == '@') 
                break;
            }
            if (Character.isLetter(ch))
                alpha++;
            else if (Character.isDigit(ch))
                num++;
            else
                special++;

            i++;
        }

        System.out.println("Alphabets : " + alpha);
        System.out.println("Numbers : " + num);
        System.out.println("Special : " + special);
        
    }
}