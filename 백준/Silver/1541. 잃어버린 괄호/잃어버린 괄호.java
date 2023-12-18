import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer mathExpr = new StringTokenizer(br.readLine(), "-");
        int result = 100000;

        while (mathExpr.hasMoreTokens()) {
            int sum = 0;

            StringTokenizer plus = new StringTokenizer(mathExpr.nextToken(), "+");
            while (plus.hasMoreTokens()) {
                sum += Integer.parseInt(plus.nextToken());
            }

            if (result == 100000) {
                result = sum;
            } else {
                result -= sum;
            }
        }

        bw.write(String.valueOf(result));
        bw.flush();
        br.close();
        bw.close();
    }
}
