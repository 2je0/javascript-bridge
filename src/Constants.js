const ERROR_PREFIX = '[ERROR]';
const MESSAGE = Object.freeze({
  START_GAME: '다리 건너기 게임을 시작합니다.',
  ASK_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  ASK_MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  FINAL_RESULT: '최종 게임 결과',
  SUCCESS_OR_FAIL: (win) => `게임 성공 여부: ${win ? '성공' : '실패'}`,
  NUMBER_OF_ATTEMPTS: (attempts) => `총 시도한 횟수: ${attempts}`,
  ASK_GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  ERROR_NOT_A_NUMBER: `${ERROR_PREFIX} 숫자를 입력해주세요.`,
  ERROR_OUT_OF_RANGE: `${ERROR_PREFIX} 3이상 20이하 숫자를 입력해주세요.`,
  ERROR_NOT_U_OR_D: `${ERROR_PREFIX} U or D를 입력해주세요.`,
  ERROR_NOT_R_OR_Q: `${ERROR_PREFIX} R or Q를 입력해주세요.`,
});
const MOVEMENT = Object.freeze({
  UP: 'U',
  DOWN: 'D',
});
const BRIDGE_BLOCK = Object.freeze({
  UP: 'U',
  DOWN: 'D',
});
const TOTAL_RESULT = Object.freeze({
  SUCCESS: 1,
  FAIL: 0,
});
const MOVEMENT_RESULT = Object.freeze({
  GAME_SUCCESS: 1,
  CORRECT: 0,
  WRONG: -1,
});
const BRIDGE_SIZE = Object.freeze({
  LOWER_INCLUSIVE: 3,
  UPPER_INCLUSIVE: 20,
});
module.exports = Object.freeze({
  MESSAGE, MOVEMENT, TOTAL_RESULT, MOVEMENT_RESULT, BRIDGE_BLOCK, BRIDGE_SIZE,
});
