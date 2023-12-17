import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int[] times = {300, 60, 10};
        int T = Integer.parseInt(br.readLine());

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < times.length; i++) {
            if (T >= times[i]) {
                int count = T / times[i];
                T %= times[i];
                sb.append(count).append(" ");
            } else {
                sb.append("0 ");
            }
        }

        if (T > 0) {
            bw.write("-1");
        } else {
            bw.write(sb.toString().trim());
        }

        bw.flush();
        br.close();
        bw.close();
    }
}
