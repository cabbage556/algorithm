function solution(record) {
    // record에 담긴 문자열
    // [유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장: "Enter [유저 아이디] [닉네임]" ("Enter uid1234 Muzi")
    // [유저 아이디] 사용자가 채팅방에서 퇴장: "Leave [유저 아이디]" ("Leave uid1234")
    // [유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경: "Change [유저 아이디] [닉네임]" ("Change uid1234 Muzi")

    const answer = [];
    const userMap = new Map();

    for (const chatting of record) {
        let [action, userId, nickname] = chatting.split(" ");

        if (action === "Leave") {
            continue;
        }

        userMap.set(userId, nickname);
    }

    for (const chatting of record) {
        let [action, userId, nickname] = chatting.split(" ");

        if (action === "Leave") {
            answer.push(`${userMap.get(userId)}님이 나갔습니다.`);
            continue;
        } else if (action === "Enter") {
            answer.push(`${userMap.get(userId)}님이 들어왔습니다.`);
        }
    }

    return answer;
}
