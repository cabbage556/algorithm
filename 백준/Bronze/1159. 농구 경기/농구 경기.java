import java.io.*;

public class Main {
    private static int[] cnt = new int[30];
    private static int n = 0;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        n = Integer.parseInt(br.readLine());
        for (int i = 0; i < n; i++) {
            String name = br.readLine();
            char c = name.charAt(0);
            cnt[c - 'a']++;
        }

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < cnt.length; i++) {
            if (cnt[i] >= 5) {
                sb.append((char) (i + 'a'));
            }
        }

        if (sb.length() == 0) bw.write("PREDAJA");
        else bw.write(sb.append("\n").toString());

        bw.flush();
        br.close();
        bw.close();
    }
}
