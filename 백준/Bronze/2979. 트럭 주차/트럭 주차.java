import java.io.*;
import java.util.StringTokenizer;

public class Main {
    private static int[] cnt = new int[104];
    private static int ret = 0;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());
        int c = Integer.parseInt(st.nextToken());

        for (int i = 0; i < 3; i++) {
            st = new StringTokenizer(br.readLine());
            int time1 = Integer.parseInt(st.nextToken());
            int time2 = Integer.parseInt(st.nextToken());

            for (int j = time1; j < time2; j++) {
                cnt[j]++;
            }
        }

        for (int i : cnt) {
            if (i == 3) ret += c * 3;
            else if (i == 2) ret += b * 2;
            else if (i == 1) ret += a;
        }

        bw.write(String.valueOf(ret));
        bw.flush();
        br.close();
        bw.close();
    }
}
