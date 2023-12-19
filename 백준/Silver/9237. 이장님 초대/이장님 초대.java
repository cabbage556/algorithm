import java.io.*;
import java.util.Arrays;
import java.util.Collections;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        Integer[] trees = new Integer[N];
        for (int i = 0; i < N; i++) {
            trees[i] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(trees, Collections.reverseOrder());
        int max = 0;
        for (int i = 0; i < trees.length; i++) {
            trees[i] += (i + 1);
            max = Math.max(trees[i], max);
        }

        bw.write(String.valueOf(max + 1));
        bw.flush();
        br.close();
        bw.close();
    }
}
