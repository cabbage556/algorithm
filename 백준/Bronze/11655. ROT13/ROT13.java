import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringBuilder sb = new StringBuilder();
        String s = br.readLine();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            char c2;
            if (c >= 'A' && c <= 'Z') {
                if (c + 13 > 'Z') c2 = (char) (c - 13);
                else c2 = (char) (c + 13);
            } else if (c >= 'a' && c <= 'z') {
                if (c + 13 > 'z') c2 = (char) (c - 13);
                else c2 = (char) (c + 13);
            } else {
                c2 = (char) c;
            }
            sb.append(c2);
        }

        bw.write(sb.append("\n").toString());
        bw.flush();
        br.close();
        bw.close();
    }
}
