import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int[] cnt = new int[100];
        String name = br.readLine();
        for (int i = 0; i < name.length(); i++) {
            cnt[name.charAt(i)]++;
        }

        StringBuilder sb = new StringBuilder();
        int flag = 0;
        String mid = "";
        for (int i = 90; i >= 65; i--) {
            if (cnt[i] == 0) continue;

            if (cnt[i] % 2 == 1) {
                flag++;
                mid = String.valueOf((char) i);
                cnt[i]--;
            }
            if (flag == 2) {
                bw.write("I'm Sorry Hansoo");
                bw.flush();
                br.close();
                bw.close();
                return;
            }

            for (int j = 0; j < cnt[i]; j += 2) {
                sb.insert(0, (char) i);
                sb.append((char) i);
            }
        }

        if (!mid.equals("")) sb.insert(sb.length() / 2, mid);
        bw.write(sb.toString());
        bw.flush();
        br.close();
        bw.close();
    }
}
