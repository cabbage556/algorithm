import java.io.*;
import java.util.StringTokenizer;

public class Main {

    private static long solve(int a, int b, int c) {
        if (b == 1) return a % c;

        long ret = solve(a, b / 2, c);
        ret = (ret * ret) % c;
        if (b % 2 == 1) ret = (ret * a) % c;

        return ret;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());
        int c = Integer.parseInt(st.nextToken());

        bw.write(solve(a, b, c) + "\n");
        bw.flush();
        br.close();
        bw.close();
    }
}
