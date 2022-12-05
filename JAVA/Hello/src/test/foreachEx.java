package test;
/*
package test;

public class Hello {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("hello world");
	}

}
*/

/*
package test;

import java.util.Scanner;

public class ScannerEx {
    // Scanner �궎�뿰�뒿
    public static void main(String[] args) {
        System.out.println("�씠由�,�룄�떆,�굹�씠,泥댁쨷,�룆�떊 �뿬遺�瑜� �엯�젰");
        Scanner s = new Scanner(System.in);
        String name = s.next();     // 臾몄옄�뿴 �씫湲� 
        System.out.print("�씠由꾩� "+name+",");       
        String city = s.next();
        System.out.print("�룄�떆 "+city+",");                   
        int age = s.nextInt();   // �젙�닔 �씫湲� 
        System.out.print("�굹�씠 "+age+"�궡,");        
        double weight = s.nextDouble();   // �떎�닔 �씫湲� 
        System.out.print("泥댁쨷�� "+weight+"kg,");       
        boolean single = s.nextBoolean();    // �끉由ш컪 �씫湲� 
        System.out.println("�룆�떊�뿬遺��뒗 "+single+"�엯�땲�떎.");
        s.close();
    }
}
*/


/*
package test;
import java.util.Scanner;
	public class ArithmeticOperator {
		public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("�젙�닔瑜� �엯�젰�븯�꽭�슂: ");
		int time = scanner.nextInt(); // �젙�닔 �엯�젰
		int second = time % 60; // 60�쑝濡� �굹�늿 �굹癒몄��뒗 珥�
		int minute = (time / 60) % 60; // 60�쑝濡� �굹�늿 紐レ쓣 �떎�떆 60�쑝濡� �굹�늿 �굹癒몄��뒗 遺�
		int hour = (time / 60) / 60; // 60�쑝濡� �굹�늿 紐レ쓣 �떎�떆 60�쑝濡� �굹�늿 紐レ� �떆媛�
		System.out.print(time + "珥덈뒗 ");
		System.out.print(hour + "�떆媛�, ");
		System.out.print(minute + "遺�, ");
		System.out.println(second + "珥덉엯�땲�떎.");
		scanner.close();
	}
}
*/

// 媛믪쓣 �엯�젰�븯怨�, �겙�닔 > 以묎컙�닔 > �옉���닔 �닚�쑝濡� 異쒕젰�븯湲�
/*
package test;
import java.util.Scanner;

public class FindMaxValue {
    public static void main(String[] args) {
        int num1,num2,num3;
        int big,middle,small;
        
        Scanner input = new Scanner(System.in);
        System.out.print("�닽�옄 �엯�젰 : ");
        num1 = input.nextInt();//�닽�옄 1 �엯�젰
        System.out.print("�닽�옄 �엯�젰 : ");
        num2 = input.nextInt();//�닽�옄 2 �엯�젰
        System.out.print("�닽�옄 �엯�젰 : ");
        num3 = input.nextInt();//�닽�옄 3 �엯�젰
        
        big = (num1>num2)&&(num1>num3)?num1:(num3>num2?num3:num2);
        small = (num2>num1)&&(num3>num1)?num1:(num2>num3?num3:num2);
        middle = (num1>num2)?((num1>num3)?((num2>num3)?num2:num3):num1):((num2>num3)?((num1>num3)?num1:num3):num2);
        
        System.out.println(big);
        System.out.println(middle);
        System.out.println(small);        
    }
}
*/


/*
package test;
import java.util.Scanner;
	public class TestGrade {
		public static void main (String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		char grade;
		System.out.print("점수를 입력하세요(0~100): ");
		int score = scanner.nextInt();
		switch (score/10) {
			case 10: // score = 100
			case 9: // score는 90~99
				grade = 'A';
				break;
			case 8: // score는 80~89
				grade = 'B';
				break;
			case 7: // score는 70~79
				grade = 'C';
				break;
			case 6: // score는 60~69
				grade = 'D';
				break;
			default: // score는 59 이하
				grade = 'F';
		}
		System.out.println("학점은 "+grade+"입니다");
		scanner.close();
	}
}
*/
/*
package test;
public class ForSample {
	public static void main(String[] args) {
		int sum=0;
		for (int i =1; i<10; i++) {
			sum+=i;
			System.out.print(i);
			
			if (i<9)
				System.out.print('+');
			else {
				System.out.print('=');
				System.out.print(sum);
			}
		
		}
	}
}

*/

/*
// 짝수만 출력하기
public class ForSample2 {
	public static void main(String[] args) {
		int sum=0;
		for (int i =2; i<10; i+=2) {
			sum+=i;
			System.out.print(i);
			
			if (i<8)
				System.out.print('+');
			else {
				System.out.print('=');
				System.out.print(sum);
			}
		
		}
	}
}
*/

/*
package test;
import java.util.Scanner;
public class WhileSample {
	public static void main(String[] args) {
		int count=0; // count는 입력된 정수의 개수
		int sum=0; // sum은 합
		Scanner scanner = new Scanner(System.in);
		System.out.println("정수를 입력하고 마지막에 -1을 입력하세요.");
		int n = scanner.nextInt(); // 정수 입력
		while(n != -1) { // -1이 입력되면 while 문 벗어남
			sum += n;
			count++;
			n = scanner.nextInt(); // 정수 입력
		}
		if(count == 0) System.out.println("입력된 수가 없습니다.");
		else {
			System.out.print("정수의 개수는 " + count + "개이며 ");
			System.out.println("평균은 " + (double)sum/count + "입니다.");
		}
		scanner.close();
	}
}
*/

/*
// 시작 값과 끝 값을 설정하고, 짝수합과 홀수합 출력하기
import java.util.Scanner;

public class ForSample3 {
	public static void main(String[] args) {
		int a;
		int b;
		
		int even = 0; // 초기값 설정(짝수)
		int odd = 0; // 초기값 설정(홀수)
		
		Scanner sc =new Scanner(System.in);
	      
	    System.out.println("첫 번째 수를 입력하여 주세요");
	    a=sc.nextInt();
	     
	    System.out.println("두 번째 수를 입력하여 주세요");
	    b=sc.nextInt();
	    
		for (int i = 1; i <= 100; i++) {
			if (i % 2 == 0) { // 짝수 조건식
				even += i; // even = even + i;
			} else { // 홀수 조건식 : i%2==1 또는 i%2!=0;
				odd += i; // odd = odd + i;
			}
		}
		System.out.println("짝수 합 : " + even); // 결과 : 2550
		System.out.println("홀수 합 : " + odd); // 결과 : 2500
	}
}
*/						

/*
//do-while 문을 이용하여 'a'부터 'z'까지 출력하는 프로그램을 작성하기
public class chapter303 {
	public static void main (String[] args) {
		char c = 'a';
		do {
		System.out.print(c);
		c = (char) (c + 1);
		} while (c <= 'z');
	}
}
*/

/*
//택시 탑승 금액 구하기
import java.util.Scanner;
public class chapter303EX{
	public static void main (String[] args) {
		int a = 0;
		int count = 0;
		do {
			int b = 0;
			System.out.println("현재 누적합(최대 10만): "+a);
			System.out.print(count+"번째 탑승손님의 요금을 입력하여 주세요:");
			Scanner sc =new Scanner(System.in);
		    b=sc.nextInt();
		    a+=b;
		    count+=1;
		
		} while (a < 100000); 
		System.out.println("==================");
		System.out.println("오늘의 소득: "+a);
		System.out.println("오늘의 탑승자수: "+count);
	}
}
*/

/*
public class chapter304 {
	public static void main(String[] args) {
		for(int i=1; i<10; i++) {
			for(int j=1; j<10; j++) {
				System.out.print(i+"*"+j+"="+i*j);
				System.out.print('\t');
			}
			System.out.println();
		}
	}
}
*/

/*
import java.util.Scanner;
public class chapter305{
	public static void main(String[] args) {
		Scanner s=new Scanner(System.in);
		System.out.println("정수를 5개 입력하세요.");
		int sum=0;
		for(int i=0; i<5; i++) {
			int n=s.nextInt();
			if(n<=0)
				continue;    // 양수가 아닌 경우 다음반복 
			else
				sum+=n;     // 양수인 경우 더하기
		}
		System.out.println("양수의 합은 "+sum);
		s.close();
	}
}
*/
/*
public class chapter304{
	public static void main(String[] args) {
		for(int i =1; i<10; i++) {
			for (int j=1; j<10; j++) {
				System.out.print(i+"*"+j+"="+i*j);
				System.out.print("\t");
			}
			System.out.println();
		}
	}
}
*/
/*
//가장 큰값 출력
import java.util.Scanner;
public class ArrayAccess{
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int intArray[] = new int[5]; //배열 생성
		
		int max = 0; //현재 가장 큰수
		System.out.println("양수 5개를 입력하세요.");
		for(int i=0; i<5; i++) {
			intArray[i] = scanner.nextInt(); //입력받은 정수를 배열에 저장
			if(intArray[i]>max)//intArray[i]가 현재 가장 큰 수보다 크면
				max = intArray[i]; //intArray[i]를 max로 변경
		}
		System.out.print("가장 큰 수는"+max+"입니다.");
		
		scanner.close();
	}
}
*/
/*
import java.util.Scanner;
public class ArrayAccess2{
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int intArray[] = new int[5];
		
		int min = 0;
		
		System.out.println("양수 5개를 입력하세요.");
		for(int i=0; i<5; i++) {
			intArray[i] = scanner.nextInt();
			if(intArray[i]<min)
				min = intArray[i];
		}
		System.out.print("가장 작은 수는"+min+"입니다.");
		
		scanner.close();
	}
}
*/

public class foreachEx{
	enum Week{월,화,수,목,금,토,일}
	
	public static void main(String[] args) {
		int n[] = {1,2,3,4,5};
		String names[] = {"사과","배","바나나","체리","딸기","포도"};
		
		int sum = 0;
		//아래 for-each에서 k는 n[0], n[1],...,n[4]로 반복
		for (int k : n) {
			System.out.print(k+" ");//반복되는 k값 출력
			sum += k;
		}
			System.out.println("합은 "+sum);
			
		//아래 for-each에서 s는 names[0],names[1],...,names[5]로 반복
		for (String s : names)
			System.out.print(s+" ");
		System.out.println();
			
		//아래 for-each에서 day는 월,화,수,목,금,토,일 값으로 반복
		for (Week day : Week.values())
			System.out.print(day+"요일 ");
		System.out.println();
		
	}
}