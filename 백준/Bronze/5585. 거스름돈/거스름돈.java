import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int[] changes = {500, 100, 50, 10, 5, 1};
        int moneyLeft = 1000 - Integer.parseInt(br.readLine());
        int change = 0;

        for (int i = 0; i < changes.length; i++) {
            if (moneyLeft >= changes[i]) {
                int num = moneyLeft / changes[i];
                moneyLeft %= changes[i];
                change += num;
            }
        }

        bw.write(String.valueOf(change));
        bw.flush();
        br.close();
        bw.close();
    }
}
