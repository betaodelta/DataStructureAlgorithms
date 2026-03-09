let dp: number[][][];
const MOD: number = 1e9 + 7;

function solve(
  zerosleft: number,
  onesleft: number,
  oneused: boolean,
  limit: number
): number {

  if (zerosleft === 0 && onesleft === 0) return 1;

  let idx: number = oneused ? 1 : 0;

  if (dp[zerosleft][onesleft][idx] !== -1)
    return dp[zerosleft][onesleft][idx];

  let result: number = 0;

  if (oneused) {

    let maxlen: number = Math.min(zerosleft, limit);

    for (let len: number = 1; len <= maxlen; len++) {
      result =
        (result + solve(zerosleft - len, onesleft, false, limit)) % MOD;
    }

  } else {

    let maxlen: number = Math.min(onesleft, limit);

    for (let len: number = 1; len <= maxlen; len++) {
      result =
        (result + solve(zerosleft, onesleft - len, true, limit)) % MOD;
    }

  }

  dp[zerosleft][onesleft][idx] = result;
  return result;
}
function numberOfStableArrays(zero: number, one: number, limit: number): number {
    dp = Array.from({ length: zero + 1 }, () =>
    Array.from({ length: one + 1 }, () => Array(2).fill(-1))
  );

  let val1: number = solve(zero, one, true, limit);
  let val2: number = solve(zero, one, false, limit);

  return (val1 + val2) % MOD;
};