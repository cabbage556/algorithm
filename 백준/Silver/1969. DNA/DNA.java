import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        String[] dna = new String[N];
        for (int i = 0; i < N; i++) {
            dna[i] = br.readLine();
        }

        StringBuilder sb = new StringBuilder();
        int distance = 0;
        for (int i = 0; i < M; i++) {
            int[] ACGT = new int[4]; // 각 DNA의 A, C, G, T의 갯수
            for (int j = 0; j < N; j++) {
                switch (dna[j].charAt(i)) {
                    case 'A':
                        ACGT[0]++;
                        break;
                    case 'C':
                        ACGT[1]++;
                        break;
                    case 'G':
                        ACGT[2]++;
                        break;
                    case 'T':
                        ACGT[3]++;
                        break;
                }
            }

            int max = ACGT[0];
            int maxIndex = 0;
            for (int k = 1; k < 4; k++) {
                if (max < ACGT[k]) {
                    max = ACGT[k];
                    maxIndex = k;
                }
            }

            switch (maxIndex) {
                case 0:
                    sb.append('A');
                    break;
                case 1:
                    sb.append('C');
                    break;
                case 2:
                    sb.append('G');
                    break;
                case 3:
                    sb.append('T');
                    break;
            }
            distance += N - max; // N - 최다등장문자열횟수
        }

        sb.append("\n").append(distance);
        bw.write(sb.toString());
        bw.flush();
        br.close();
        bw.close();
    }
}
