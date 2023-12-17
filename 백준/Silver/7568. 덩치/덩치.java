import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int[][] people = new int[N][2];
        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());

            for (int j = 0; j < 2; j++) {
                people[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        StringBuilder result = new StringBuilder();
        for (int i = 0; i < people.length; i++) {
            int count = 1;
            for (int j = 0; j < people.length; j++) {
                if (i == j) {
                    continue;
                }

                int weight1 = people[i][0], height1 = people[i][1];
                int weight2 = people[j][0], height2 = people[j][1];
                if (weight1 < weight2 && height1 < height2) {
                    count++;
                }
            }
            result.append(count).append(" ");
        }

        bw.write(result.toString().trim());
        bw.flush();
        br.close();
        bw.close();
    }
}
