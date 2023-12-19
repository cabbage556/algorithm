import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        int result = 0;
        int lastMilk = 2;

        while (st.hasMoreTokens()) {
            int milk = Integer.parseInt(st.nextToken());

            if (lastMilk == 2 && milk == 0) {
                result++;
                lastMilk = milk;
            } else if (lastMilk == 1 && milk == 2) {
                result++;
                lastMilk = milk;
            } else if (lastMilk == 0 && milk == 1) {
                result++;
                lastMilk = milk;
            }
        }

        bw.write(String.valueOf(result));
        bw.flush();
        br.close();
        bw.close();
    }
}
