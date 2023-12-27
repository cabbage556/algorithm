import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String str = br.readLine();
        StringBuilder sb = new StringBuilder(str);
        String str2 = sb.reverse().toString();

        int ret = 0;
        if (str.equals(str2)) {
            ret = 1;
        }

        bw.write(String.valueOf(ret));
        bw.flush();
        br.close();
        bw.close();
    }
}
