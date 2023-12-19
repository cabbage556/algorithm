import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int[] milks = new int[N];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            milks[i] = Integer.parseInt(st.nextToken());
        }

        int result = 0;
        int lastMilk = 2;
        for (int milk : milks) {
            if (lastMilk == 2 && milk == 0) {
                lastMilk = milk;
                result++;
            } else if (lastMilk == 1 && milk == 2) {
                lastMilk = milk;
                result++;
            } else if (lastMilk == 0 && milk == 1) {
                lastMilk = milk;
                result++;
            }
        }

        bw.write(String.valueOf(result));
        bw.flush();
        br.close();
        bw.close();
    }
}
