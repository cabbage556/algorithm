import java.io.*;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        Map<String, Integer> map1 = new HashMap<>();
        Map<Integer, String> map2 = new HashMap<>();
        for (int i = 1; i <= n; i++) {
            String s = br.readLine();

            map1.put(s, i);
            map2.put(i, s);
        }

        for (int i = 0; i < m; i++) {
            String s = br.readLine();
            if (map1.get(s) == null) {
                bw.write(map2.get(Integer.parseInt(s)) + "\n");
            } else {
                bw.write(map1.get(s) + "\n");
            }
        }

        bw.flush();
        br.close();
        bw.close();
    }
}
