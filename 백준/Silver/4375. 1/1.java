import java.io.*;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String n = "";
        while ((n = br.readLine()) != null) {
            int num = Integer.parseInt(n);
            long num2 = 1;
            int cnt = 1;

            while (true) {
                if (num2 % num == 0) {
                    bw.write(cnt + "\n");
                    bw.flush();
                    break;
                } else {
                    num2 = num2 * 10 + 1;
                    num2 %= num;
                    cnt++;
                }
            }
        }

        br.close();
        bw.close();
    }
}
