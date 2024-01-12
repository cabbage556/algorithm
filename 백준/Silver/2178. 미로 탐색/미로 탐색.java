import java.io.*;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {

    public static int[][] miro = new int[104][104], visited = new int[104][104];
    public static int[] dy = {-1, 0, 1, 0}, dx = {0, 1, 0, -1};
    public static int n, m;
    public static void bfs(int y, int x) {
        visited[y][x] = 1;
        Queue<Integer> qY = new LinkedList<>();
        Queue<Integer> qX = new LinkedList<>();
        qY.add(y);
        qX.add(x);

        while (qY.size() > 0 && qX.size() > 0) {
            y = qY.remove();
            x = qX.remove();

            for (int i = 0; i < 4; i++) {
                int ny = y + dy[i];
                int nx = x + dx[i];
                if (ny < 0 || ny > n || nx < 0 || nx > m) continue;
                if (visited[ny][nx] > 0 || miro[ny][nx] == 0) continue;

                visited[ny][nx] = visited[y][x] + 1;
                qY.add(ny);
                qX.add(nx);
            }
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        for (int i = 0; i < n; i++) {
            String s = br.readLine();
            for (int j = 0; j < s.length(); j++) {
                miro[i + 1][j + 1] = Integer.parseInt(String.valueOf(s.charAt(j)));
            }
        }

        bfs(1, 1);
        bw.write(String.valueOf(visited[n][m]));
        bw.flush();

        br.close();
        bw.close();
    }
}
