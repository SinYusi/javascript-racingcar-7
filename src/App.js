import getCarNameList from "./getCarNameList.js";
import getUserInput from "./getUserInput.js";
import validateCarNameString from "./validateCarNameString.js";

class App {
  async run() {
    const carNameInputString = await getUserInput("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    validateCarNameString(carNameInputString);
    const carNameList = getCarNameList(carNameInputString)
  }
}

export default App;
