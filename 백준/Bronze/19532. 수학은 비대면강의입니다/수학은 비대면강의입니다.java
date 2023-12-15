import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int[] abcdef = new int[6];
        for (int i = 0; i < abcdef.length; i++) {
            abcdef[i] = Integer.parseInt(st.nextToken());
        }

        for (int x = -999; x <= 999; x++) {
            for (int y = -999; y <= 999; y++) {
                boolean first = abcdef[0] * x + abcdef[1] * y == abcdef[2];
                boolean second = abcdef[3] * x + abcdef[4] * y == abcdef[5];
                if (first && second) {
                    bw.write(x + " " + y);
                    bw.flush();
                    br.close();
                    bw.close();
                    return;
                }
            }
        }

    }
}
