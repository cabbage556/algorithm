import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    private static int[] heights = new int[9];
    private static int sum = 0;
    private static List<Integer> list = new ArrayList<>();
    private static List<Integer> list2 = new ArrayList<>();

    private static void solve() {
        for (int i = 0; i < 9; i++) {
            for (int j = i + 1; j < 9; j++) {
                if (sum - heights[i] - heights[j] == 100) {
                    list.add(i);
                    list.add(j);
                    return;
                }
            }
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        for (int i = 0; i < 9; i++) {
            heights[i] = Integer.parseInt(br.readLine());
            sum += heights[i];
        }
        Arrays.sort(heights);

        solve();

        for (int i = 0; i < 9; i++) {
            if (list.get(0) == i || list.get(1) == i) continue;
            list2.add(heights[i]);
        }

        for (Integer integer : list2) {
            bw.write(integer + "\n");
        }

        bw.flush();
        br.close();
        bw.close();
    }
}
