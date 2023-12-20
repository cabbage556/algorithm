import java.io.*;
import java.util.Arrays;
import java.util.Collections;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        Integer[] prices = new Integer[N];
        for (int i = 0; i < N; i++) {
            prices[i] = Integer.parseInt(br.readLine());
        }
        Arrays.sort(prices, Collections.reverseOrder());

        int result = 0;
        for (int i = 0; i < N; i++) {
            if (i % 3 < 2) {
                result += prices[i];
            }
        }

        bw.write(String.valueOf(result));
        bw.flush();
        br.close();
        bw.close();
    }
}
