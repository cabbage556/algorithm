/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    const lastAsteroid = stack.at(-1);
    const currentAsteroid = asteroids[i];

    // 스택이 비었거나 충돌하지 않는 경우
    if (!stack.length || lastAsteroid < 0 || currentAsteroid > 0) {
      stack.push(currentAsteroid);
    }
    // 충돌하는데 크기가 같은 경우
    else if (Math.abs(lastAsteroid) === Math.abs(currentAsteroid)) {
      stack.pop();
    }
    // 스택의 소행성보다 현재 소행성이 더 큰 경우
    else if (Math.abs(lastAsteroid) < Math.abs(currentAsteroid)) {
      stack.pop();
      i--;
    }
  }

  return stack;
};

console.log(asteroidCollision([5, 10, -5]));
console.log(asteroidCollision([8, -8]));
console.log(asteroidCollision([10, 2, -5]));
console.log(asteroidCollision([-5, 5]));
