import java.util.Scanner;
public class TwoDArrayDemo 
{
    public static void main(String[] args) {
  //      int arr[][]={{11,22,33},{44,55,66},{77,88,99}};
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter row and col size:");
        int r=scan.nextInt();
        int c=scan.nextInt();
        int arr[][]=new int[r][c];
        System.out.println("Enter matrix values:"+r+"X"+c);
        for(int i=0;i<r;i++)
        {
            for(int j=0;j<c;j++)
            {
                arr[i][j]=scan.nextInt();
            }
            System.out.println();
        }
        System.out.println("Result array:");
        for(int i=0;i<r;i++)
        {
            for(int j=0;j<c;j++)
            {
                System.out.println("    "+arr[i][j]);

            }
            System.out.println();
        }
        scan.close(); 
    }
}

