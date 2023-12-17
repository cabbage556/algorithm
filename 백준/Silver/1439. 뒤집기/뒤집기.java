import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String s = br.readLine();
        int zeros = 0;
        int ones = 0;

        for (int i = 1; i < s.length(); i++) {
            char cur = s.charAt(i);
            char before = s.charAt(i - 1);

            if (cur == before) {
                continue;
            }

            if (before == '0') {
                zeros++;
            } else {
                ones++;
            }
        }

        if (s.charAt(s.length() - 1) == '0') {
            zeros++;
        } else {
            ones++;
        }

        bw.write(String.valueOf(Math.min(zeros, ones)));
        bw.flush();
        br.close();
        bw.close();
    }
}
