import java.io.*;
import java.util.Stack;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int cnt = 0;
        for (int i = 0; i < N; i++) {
            Stack<Character> stk = new Stack<>();
            String s = br.readLine();

            for (int j = 0; j < s.length(); j++) {
                if (!stk.isEmpty() && stk.peek() == s.charAt(j)) stk.pop();
                else stk.push(s.charAt(j));
            }
            if (stk.isEmpty()) cnt++;
        }

        bw.write(cnt + "\n");
        bw.flush();
        br.close();
        bw.close();
    }
}
