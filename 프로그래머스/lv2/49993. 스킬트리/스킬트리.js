function solution(skill, skill_trees) {
  let answer = 0;
  let treeIndex = new Array(skill_trees.length);
  
  for (let i = 0; i < skill_trees.length; i++) {
    treeIndex[i] = new Array(skill_trees[i].length);
  }
  
  for (let i = 0; i < skill_trees.length; i++) {
    for (let j = 0; j < skill_trees[i].length; j++) {
      treeIndex[i][j] = skill.indexOf(skill_trees[i][j]);
    }
  }
  
  treeIndex = treeIndex.map(el => el.filter(el2 => el2 !== -1));
  
  for (let i = 0; i < treeIndex.length; i++) {
    let temp = 0;
    for (let j = 0; j < treeIndex[i].length; j++) {
      if (temp === treeIndex[i][j]) {
        temp++;
      }
    }
    
    if (temp === treeIndex[i].length) {
      answer++;
    }
  }
  
  return answer;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])