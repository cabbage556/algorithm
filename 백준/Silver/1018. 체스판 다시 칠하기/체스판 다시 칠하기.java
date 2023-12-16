import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static int solution(int startRow, int startCol, String[] board) {
        String[] whiteChessBoard = {"WBWBWBWB", "BWBWBWBW"};
        int whiteCount = 0;
        for (int i = 0; i < 8; i++) {
            int row = startRow + i;
            for (int j = 0; j < 8; j++) {
                int col = startCol + j;

                if (board[row].charAt(col) != whiteChessBoard[row % 2].charAt(j)) {
                    whiteCount++;
                }
            }
        }

        return Math.min(whiteCount, 64 - whiteCount);
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        String[] board = new String[N]; // N x M
        for (int i = 0; i < N; i++) {
            board[i] = br.readLine();
        }

        int result = Integer.MAX_VALUE;
        for (int i = 0; i < N - 7; i++) {
            for (int j = 0; j < M - 7; j++) {
                int currentResult = solution(i, j, board);
                if (result > currentResult) {
                    result = currentResult;
                }
            }
        }

        bw.write(String.valueOf(result));
        bw.flush();
        br.close();
        bw.close();
    }
}
