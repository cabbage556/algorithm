import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String board = br.readLine();

        board = board.replace("XXXX", "AAAA");
        board = board.replace("XX", "BB");

        if (board.contains("X")) {
            bw.write("-1");
        } else {
            bw.write(board);
        }

        bw.flush();
        br.close();
        bw.close();
    }
}
