import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(br.readLine());
        String pt = br.readLine();
        int aster = pt.indexOf('*');
        String first = pt.substring(0, aster);
        String second = pt.substring(aster + 1);

        for (int i = 0; i < n; i++) {
            String s = br.readLine();
            
            if (first.length() + second.length() > s.length()) {
                bw.write("NE\n");
                continue;
            }
            
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < first.length(); j++) {
                sb.append(s.charAt(j));
            }

            if (!first.contentEquals(sb)) {
                bw.write("NE\n");
                continue;
            }

            sb.delete(0, sb.length());
            for (int j = s.length() - second.length(); j < s.length(); j++) {
                sb.append(s.charAt(j));
            }

            if (!second.contentEquals(sb)) {
                bw.write("NE\n");
                continue;
            }

            bw.write("DA\n");
        }

        bw.flush();
        br.close();
        bw.close();
    }
}
