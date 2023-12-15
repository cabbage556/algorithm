import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int moneyLeft = 1000 - Integer.parseInt(br.readLine());
        int change = 0;
        while (moneyLeft >= 500) {
            moneyLeft -= 500;
            change++;
        }

        while (moneyLeft >= 100) {
            moneyLeft -= 100;
            change++;
        }

        while (moneyLeft >= 50) {
            moneyLeft -= 50;
            change++;
        }

        while (moneyLeft >= 10) {
            moneyLeft -= 10;
            change++;
        }

        while (moneyLeft >= 5) {
            moneyLeft -= 5;
            change++;
        }

        while (moneyLeft >= 1) {
            moneyLeft -= 1;
            change++;
        }

        bw.write(String.valueOf(change));
        bw.flush();
        
        br.close();
        bw.close();
    }
}
