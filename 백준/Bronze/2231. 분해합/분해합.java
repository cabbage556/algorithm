import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        boolean hasConstructor = false;
        for (int i = 1; i <= N; i++) {
            String s = String.valueOf(i);
            int sum = Integer.parseInt(s);

            for (int j = 0; j < s.length(); j++) {
                sum += Integer.parseInt(Character.toString(s.charAt(j)));
            }

            if (N == sum) {
                hasConstructor = true;
                bw.write(String.valueOf(i));
                break;
            }
        }
        if (!hasConstructor) {
            bw.write(String.valueOf(0));
        }
        
        bw.flush();

        br.close();
        bw.close();
    }
}
