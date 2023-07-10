function solution(skill, skill_trees) {
    // skill: 선행 스킬 순서
    // skill_tress: 유저 스킬트리를 담은 배열
    // skill: 'CBD'인 경우 C -> B -> D 순서로 스킬을 배울 수 있다.
    let answer = 0;

    skill_trees.forEach((skill_tree) => {
        const essentialSkillsInUserSkillTree = skill_tree
            .split("")
            .filter((el) => skill.includes(el))
            .join("");
        
        if (skill.indexOf(essentialSkillsInUserSkillTree) === 0) {
            answer++;
        }
    });

    return answer;
}
