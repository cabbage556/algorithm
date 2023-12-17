import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int count = 0;
        for (int i = 666; i < Integer.MAX_VALUE; i++) {
            String str = String.valueOf(i);
            if (str.contains("666")) {
                count++;
            }
            if (count == N) {
                bw.write(String.valueOf(i));
                break;
            }
        }

        bw.flush();
        br.close();
        bw.close();
    }
}
