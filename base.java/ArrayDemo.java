import java.util.Scanner;

public class ArrayDemo 
{
    public static void main(String[] args) {
 //      int arr[]={11,9,99,22,33,55,88,45};
       Scanner scan=new Scanner(System.in);
       System.out.println("Enter array size");
       int size=scan.nextInt();
       int arr[]=new int[size];
       for(int i=0;i<size;i++)
       {
        System.out.println("Enter array vaalue at index:"+i+" : ");
        arr[i]=scan.nextInt();
       }
       for(int i=0;i<size;i++)
       {
        System.out.println("arr["+i+"]="+arr[i]);
       }
       scan.close();
        
    }
    
}
