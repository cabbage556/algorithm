import java.io.*;
import java.util.StringTokenizer;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int[] people = new int[N];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            people[i] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(people);
        int[] spends = new int[N];
        spends[0] = people[0];

        for (int i = 1; i < people.length; i++) {
            spends[i] = spends[i - 1] + people[i];
        }

        int sum = 0;
        for (int spend : spends) {
            sum += spend;
        }

        bw.write(String.valueOf(sum));
        bw.flush();
        br.close();
        bw.close();
    }
}
