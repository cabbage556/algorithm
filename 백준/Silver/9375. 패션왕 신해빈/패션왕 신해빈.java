import java.io.*;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int t = Integer.parseInt(br.readLine());
        for (int i = 0; i < t; i++) {
            int n = Integer.parseInt(br.readLine());
            Map<String, Integer> map = new HashMap<>();
            for (int j = 0; j < n; j++) {
                StringTokenizer st = new StringTokenizer(br.readLine());
                String cloth = st.nextToken();
                String kind = st.nextToken();

                Integer cnt = map.get(kind);
                if (cnt == null) map.put(kind, 1);
                else map.put(kind, cnt + 1);
            }

            int cnt = 1;
            for (Integer value : map.values()) {
                cnt *= (value + 1);
            }
            bw.write((cnt - 1) + "\n");
        }

        bw.flush();
        br.close();
        bw.close();
    }
}
