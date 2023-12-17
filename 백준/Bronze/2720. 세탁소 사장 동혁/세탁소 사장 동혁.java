import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int[] changes = {25, 10, 5, 1};
        int T = Integer.parseInt(br.readLine());
        int[] expenses = new int[T];
        for (int i = 0; i < T; i++) {
            expenses[i] = Integer.parseInt(br.readLine());
        }

        for (int expense : expenses) {
            StringBuilder sb = new StringBuilder();
            for (int change : changes) {
                if (expense >= change) {
                    int count = expense / change;
                    expense %= change;
                    sb.append(count).append(" ");
                } else {
                    sb.append("0 ");
                }
            }
            bw.write(sb.toString().trim());
            bw.write("\n");
        }

        bw.flush();
        br.close();
        bw.close();
    }
}
