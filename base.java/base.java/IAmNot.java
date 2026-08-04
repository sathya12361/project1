import java.util.Scanner;

public class IAmNotHapp
{
    public static void main(String[] args)
    {
    Scanner sc = new Scanner(System.in);
    System.out.print("I am not happy: ");
    String s = sc.nextLine();
    int I= 0, am= 0, not = 0, happy = 0;

        int i = 0;

        while (i < name.length()) 
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