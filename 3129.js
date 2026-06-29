/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
 let dp;
const MOD = 1e9 + 7;

function solve(zerosleft, onesleft, oneused, limit) {

  if (zerosleft === 0 && onesleft === 0) return 1;

  let idx = oneused ? 1 : 0;

  if (dp[zerosleft][onesleft][idx] !== -1)
    return dp[zerosleft][onesleft][idx];

  let result = 0;

  if (oneused) {

    let maxlen = Math.min(zerosleft, limit);

    for (let len = 1; len <= maxlen; len++) {
      result = (result + solve(zerosleft - len, onesleft, false, limit)) % MOD;
    }

  } else {

    let maxlen = Math.min(onesleft, limit);

    for (let len = 1; len <= maxlen; len++) {
      result = (result + solve(zerosleft, onesleft - len, true, limit)) % MOD;
    }

  }

  dp[zerosleft][onesleft][idx] = result;
  return result;
}

var numberOfStableArrays = function(zero, one, limit) {
  dp = Array.from({ length: zero + 1 }, () =>
    Array.from({ length: one + 1 }, () => Array(2).fill(-1))
  );

  let val1 = solve(zero, one, true, limit);
  let val2 = solve(zero, one, false, limit);

  return (val1 + val2) % MOD;
};