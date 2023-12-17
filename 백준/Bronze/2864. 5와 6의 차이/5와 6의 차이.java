import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        String A = st.nextToken();
        String B = st.nextToken();

        StringBuilder sbA = new StringBuilder();
        StringBuilder sbB = new StringBuilder();
        for (int i = 0; i < A.length(); i++) {
            char a = A.charAt(i);
            char b = B.charAt(i);

            if (a == '6') {
                sbA.append('5');
            } else {
                sbA.append(a);
            }

            if (b == '6') {
                sbB.append('5');
            } else {
                sbB.append(b);
            }
        }

        int min = Integer.parseInt(sbA.toString()) + Integer.parseInt(sbB.toString());

        sbA.delete(0, A.length());
        sbB.delete(0, B.length());

        for (int i = 0; i < A.length(); i++) {
            char a = A.charAt(i);
            char b = B.charAt(i);

            if (a == '5') {
                sbA.append('6');
            } else {
                sbA.append(a);
            }

            if (b == '5') {
                sbB.append('6');
            } else {
                sbB.append(b);
            }
        }

        int max = Integer.parseInt(sbA.toString()) + Integer.parseInt(sbB.toString());

        sbA.delete(0, A.length());
        sbA.append(min).append(" ").append(max);

        bw.write(sbA.toString());
        bw.flush();
        br.close();
        bw.close();
    }
}
