function solution(participant, completion) {
    const participantMap = new Map();

    for (const person of participant) {
        if (participantMap.get(person)) {
            participantMap.set(person, participantMap.get(person) + 1);
        } else {
            participantMap.set(person, 1);
        }
    }

    for (const person of completion) {
        participantMap.set(person, participantMap.get(person) - 1);
    }

    for (const [person, number] of participantMap) {
        if (number === 1) {
            return person;
        }
    }
}