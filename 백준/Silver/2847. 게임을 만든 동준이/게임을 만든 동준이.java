import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int[] scores = new int[N];
        for (int i = 0; i < N; i++) {
            scores[i] = Integer.parseInt(br.readLine());
        }

        int count = 0;
        for (int i = scores.length - 2; i >= 0; i--) {
            int next = scores[i + 1];
            int curr = scores[i];

            if (curr < next) {
                continue;
            }

            int amount = curr - (next - 1);
            scores[i] -= amount;
            count += amount;
        }

        bw.write(String.valueOf(count));
        bw.flush();
        br.close();
        bw.close();
    }
}
