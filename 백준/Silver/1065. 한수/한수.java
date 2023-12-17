import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int result = 0;

        for (int i = 1; i <= N; i++) {
            String str = String.valueOf(i);
            if (str.length() == 1 || str.length() == 2) {
                result++;
                continue;
            }

            boolean isSeq = true;
            int diff = Integer.parseInt(String.valueOf(str.charAt(1))) - Integer.parseInt(String.valueOf(str.charAt(0)));
            for (int j = 2; j < str.length(); j++) {
                int diff2 = Integer.parseInt(String.valueOf(str.charAt(j)))
                        - Integer.parseInt(String.valueOf(str.charAt(j - 1)));
                if (diff != diff2) {
                    isSeq = false;
                    break;
                }
            }
            if (isSeq) {
                result++;
            }
        }

        bw.write(String.valueOf(result));
        bw.flush();
        br.close();
        bw.close();
    }
}
