/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
export const possibleBipartition = (N, dislikes) => {
  // create a groupList board
  // unassigned group is 0, group A is 1, and group B is 2
  const groupList = new Array(N + 1).fill(0);

  // create a people list from 0 - N + 1 that store which people they dont like
  const enemyList = Array.from({ length: N + 1 }, (_) => []);

  // fill an enemyList,
  // index position represents the person, and its elements = enemy
  dislikes.forEach((people) => {
    const [a, b] = people
    enemyList[a].push(b);
    enemyList[b].push(a);
  });

  // initialized person 1 in group A
  groupList[1] = 1;

  function findGroup(person) {
    // find possible group through the enemy list
    for (let i = 0; i < enemyList[person].length; i++) {
      const enemy = enemyList[person][i];
      // if the person and his/her enemy are under the same group, return false
      if (groupList[enemy] === groupList[person]) {
        return false;
      }
      // if the enemy has his/her own group, skip
      if (groupList[enemy] !== 0) {
        continue;
      }
      // assign enemy to a group that is oppsite from the person
      const oppositePerson = groupList[person] === 1 ? 2 : 1
      groupList[enemy] = oppositePerson

      // call the recursion to check each enemy's list
      if (!findGroup(enemy)) {
        return false;
      }
    }
    return true;
  }

  // traverse through all everyone
  for (let i = 1; i <= N; i++) {
    // return false if we can't form the best group
    if (!findGroup(i)) {
      return false;
    }
  }

  return true;
};
