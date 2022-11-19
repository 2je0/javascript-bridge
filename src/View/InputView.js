/**
 * 사용자로부터 입력을 받는 역할을 한다.
 * 제공된 InputView 객체를 활용해 구현해야 한다.
 * InputView의 파일 경로는 변경할 수 있다.
 * InputView의 메서드의 인자는 변경할 수 있다.
 * 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
 */
const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Constants');

const { Console } = MissionUtils;
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {function} callback 다리의 길이를 입력받은후의 기능을 구현한 함수
   */
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.ASK_BRIDGE_SIZE, (bridgeSize) => callback(bridgeSize));
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @param {function} callback 이동할 칸을 입력받은후의 기능을 구현한 함수
   */
  readMoving(callback) {
    Console.readLine(MESSAGE.ASK_MOVING, (moving) => callback(moving));
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * @param {function} callback 재시도 여부를 입력받은후의 기능을 구현한 함수
   */
  readGameCommand(callback) {
    Console.readLine(MESSAGE.ASK_GAME_COMMAND, (command) => callback(command));
  },
};

module.exports = InputView;
