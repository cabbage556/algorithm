import java.io.*;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int T = Integer.parseInt(br.readLine());
        for (int i = 0; i < T; i++) {
            int N = Integer.parseInt(br.readLine());
            int[] trees = new int[N];
            StringTokenizer st = new StringTokenizer(br.readLine());
            for (int j = 0; j < N; j++) {
                trees[j] = Integer.parseInt(st.nextToken());
            }
            Arrays.sort(trees);

            int[] better = new int[N];
            int left = 0;
            int right = N - 1;
            for (int j = 0; j < N; j++) {
                if (j % 2 == 0) {
                    better[left++] = trees[j];
                } else {
                    better[right--] = trees[j];
                }
            }

            int result = Math.abs(better[0] - better[N - 1]);
            for (int j = 1; j < N; j++) {
                result = Math.max(result, Math.abs(better[j] - better[j - 1]));
            }

            bw.write(String.valueOf(result));
            bw.write("\n");
        }

        bw.flush();
        br.close();
        bw.close();
    }
}
