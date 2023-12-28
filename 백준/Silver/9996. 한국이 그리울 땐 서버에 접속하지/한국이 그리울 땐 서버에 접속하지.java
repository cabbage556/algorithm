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

            if (first.equals(s.substring(0, first.length()))
                    && second.equals(s.substring(s.length() - second.length()))) {
                bw.write("DA\n");
            } else {
                bw.write("NE\n");
            }
        }

        bw.flush();
        br.close();
        bw.close();
    }
}
