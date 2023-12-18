import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        String seats = br.readLine();
        int cupholders = 0;

        for (int i = 0; i < N; i++) {
            cupholders++;

            if (seats.charAt(i) == 'L') {
                i++;
            }
        }

        // 마지막 컵홀더
        cupholders++;

        if (N < cupholders) {
            bw.write(String.valueOf(N));
        } else {
            bw.write(String.valueOf(cupholders));
        }

        bw.flush();
        br.close();
        bw.close();
    }
}
