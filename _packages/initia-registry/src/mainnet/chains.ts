import { Chain } from "@initia/initia-registry-types";

import * as _yominet from "./yominet";
import * as _initia from "./initia";
import * as _echelon from "./echelon";

const chains: Chain[] = [_yominet.chain, _initia.chain, _echelon.chain];

export default chains;
