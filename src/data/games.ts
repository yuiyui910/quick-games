import { gameInfo } from "../types/gameInfo";
import testImagePath from "../images/test.png";

export const games: Array<gameInfo> = [
  {
    id: "0000000001",
    name: "五目並べEx",
    imagePath: testImagePath,
    outline: "難易度の高い五目並べです。",
    url: "/gomokuEx",
  },
];
