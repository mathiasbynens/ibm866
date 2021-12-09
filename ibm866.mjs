/*! https://mths.be/ibm866 v3.0.4 by @mathias | MIT license */

const stringFromCharCode = String.fromCharCode;

const INDEX_BY_CODE_POINT = new Map([
	[160, 127],
	[164, 125],
	[176, 120],
	[183, 122],
	[1025, 112],
	[1028, 114],
	[1031, 116],
	[1038, 118],
	[1040, 0],
	[1041, 1],
	[1042, 2],
	[1043, 3],
	[1044, 4],
	[1045, 5],
	[1046, 6],
	[1047, 7],
	[1048, 8],
	[1049, 9],
	[1050, 10],
	[1051, 11],
	[1052, 12],
	[1053, 13],
	[1054, 14],
	[1055, 15],
	[1056, 16],
	[1057, 17],
	[1058, 18],
	[1059, 19],
	[1060, 20],
	[1061, 21],
	[1062, 22],
	[1063, 23],
	[1064, 24],
	[1065, 25],
	[1066, 26],
	[1067, 27],
	[1068, 28],
	[1069, 29],
	[1070, 30],
	[1071, 31],
	[1072, 32],
	[1073, 33],
	[1074, 34],
	[1075, 35],
	[1076, 36],
	[1077, 37],
	[1078, 38],
	[1079, 39],
	[1080, 40],
	[1081, 41],
	[1082, 42],
	[1083, 43],
	[1084, 44],
	[1085, 45],
	[1086, 46],
	[1087, 47],
	[1088, 96],
	[1089, 97],
	[1090, 98],
	[1091, 99],
	[1092, 100],
	[1093, 101],
	[1094, 102],
	[1095, 103],
	[1096, 104],
	[1097, 105],
	[1098, 106],
	[1099, 107],
	[1100, 108],
	[1101, 109],
	[1102, 110],
	[1103, 111],
	[1105, 113],
	[1108, 115],
	[1111, 117],
	[1118, 119],
	[8470, 124],
	[8729, 121],
	[8730, 123],
	[9472, 68],
	[9474, 51],
	[9484, 90],
	[9488, 63],
	[9492, 64],
	[9496, 89],
	[9500, 67],
	[9508, 52],
	[9516, 66],
	[9524, 65],
	[9532, 69],
	[9552, 77],
	[9553, 58],
	[9554, 85],
	[9555, 86],
	[9556, 73],
	[9557, 56],
	[9558, 55],
	[9559, 59],
	[9560, 84],
	[9561, 83],
	[9562, 72],
	[9563, 62],
	[9564, 61],
	[9565, 60],
	[9566, 70],
	[9567, 71],
	[9568, 76],
	[9569, 53],
	[9570, 54],
	[9571, 57],
	[9572, 81],
	[9573, 82],
	[9574, 75],
	[9575, 79],
	[9576, 80],
	[9577, 74],
	[9578, 88],
	[9579, 87],
	[9580, 78],
	[9600, 95],
	[9604, 92],
	[9608, 91],
	[9612, 93],
	[9616, 94],
	[9617, 48],
	[9618, 49],
	[9619, 50],
	[9632, 126]
]);
const INDEX_BY_POINTER = new Map([
	[0, '\u0410'],
	[1, '\u0411'],
	[2, '\u0412'],
	[3, '\u0413'],
	[4, '\u0414'],
	[5, '\u0415'],
	[6, '\u0416'],
	[7, '\u0417'],
	[8, '\u0418'],
	[9, '\u0419'],
	[10, '\u041A'],
	[11, '\u041B'],
	[12, '\u041C'],
	[13, '\u041D'],
	[14, '\u041E'],
	[15, '\u041F'],
	[16, '\u0420'],
	[17, '\u0421'],
	[18, '\u0422'],
	[19, '\u0423'],
	[20, '\u0424'],
	[21, '\u0425'],
	[22, '\u0426'],
	[23, '\u0427'],
	[24, '\u0428'],
	[25, '\u0429'],
	[26, '\u042A'],
	[27, '\u042B'],
	[28, '\u042C'],
	[29, '\u042D'],
	[30, '\u042E'],
	[31, '\u042F'],
	[32, '\u0430'],
	[33, '\u0431'],
	[34, '\u0432'],
	[35, '\u0433'],
	[36, '\u0434'],
	[37, '\u0435'],
	[38, '\u0436'],
	[39, '\u0437'],
	[40, '\u0438'],
	[41, '\u0439'],
	[42, '\u043A'],
	[43, '\u043B'],
	[44, '\u043C'],
	[45, '\u043D'],
	[46, '\u043E'],
	[47, '\u043F'],
	[48, '\u2591'],
	[49, '\u2592'],
	[50, '\u2593'],
	[51, '\u2502'],
	[52, '\u2524'],
	[53, '\u2561'],
	[54, '\u2562'],
	[55, '\u2556'],
	[56, '\u2555'],
	[57, '\u2563'],
	[58, '\u2551'],
	[59, '\u2557'],
	[60, '\u255D'],
	[61, '\u255C'],
	[62, '\u255B'],
	[63, '\u2510'],
	[64, '\u2514'],
	[65, '\u2534'],
	[66, '\u252C'],
	[67, '\u251C'],
	[68, '\u2500'],
	[69, '\u253C'],
	[70, '\u255E'],
	[71, '\u255F'],
	[72, '\u255A'],
	[73, '\u2554'],
	[74, '\u2569'],
	[75, '\u2566'],
	[76, '\u2560'],
	[77, '\u2550'],
	[78, '\u256C'],
	[79, '\u2567'],
	[80, '\u2568'],
	[81, '\u2564'],
	[82, '\u2565'],
	[83, '\u2559'],
	[84, '\u2558'],
	[85, '\u2552'],
	[86, '\u2553'],
	[87, '\u256B'],
	[88, '\u256A'],
	[89, '\u2518'],
	[90, '\u250C'],
	[91, '\u2588'],
	[92, '\u2584'],
	[93, '\u258C'],
	[94, '\u2590'],
	[95, '\u2580'],
	[96, '\u0440'],
	[97, '\u0441'],
	[98, '\u0442'],
	[99, '\u0443'],
	[100, '\u0444'],
	[101, '\u0445'],
	[102, '\u0446'],
	[103, '\u0447'],
	[104, '\u0448'],
	[105, '\u0449'],
	[106, '\u044A'],
	[107, '\u044B'],
	[108, '\u044C'],
	[109, '\u044D'],
	[110, '\u044E'],
	[111, '\u044F'],
	[112, '\u0401'],
	[113, '\u0451'],
	[114, '\u0404'],
	[115, '\u0454'],
	[116, '\u0407'],
	[117, '\u0457'],
	[118, '\u040E'],
	[119, '\u045E'],
	[120, '\xB0'],
	[121, '\u2219'],
	[122, '\xB7'],
	[123, '\u221A'],
	[124, '\u2116'],
	[125, '\xA4'],
	[126, '\u25A0'],
	[127, '\xA0']
]);

// https://encoding.spec.whatwg.org/#error-mode
const decodingError = (mode) => {
	if (mode === 'replacement') {
		return '\uFFFD';
	}
	// Else, `mode == 'fatal'`.
	throw new Error();
};

const encodingError = (mode) => {
	if (mode === 'replacement') {
		return 0xFFFD;
	}
	// Else, `mode == 'fatal'`.
	throw new Error();
};

// https://encoding.spec.whatwg.org/#single-byte-decoder
export const decode = (input, options) => {
	let mode;
	if (options && options.mode) {
		mode = options.mode.toLowerCase();
	}
	// “An error mode […] is either `replacement` (default) or `fatal` for a
	// decoder.”
	if (mode !== 'replacement' && mode !== 'fatal') {
		mode = 'replacement';
	}

	const length = input.length;

	// Support byte strings as input.
	if (typeof input === 'string') {
		const bytes = new Uint16Array(length);
		for (let index = 0; index < length; index++) {
			bytes[index] = input.charCodeAt(index);
		}
		input = bytes;
	}

	const buffer = [];
	for (let index = 0; index < length; index++) {
		const byteValue = input[index];
		// “If `byte` is an ASCII byte, return a code point whose value is
		// `byte`.”
		if (0x00 <= byteValue && byteValue <= 0x7F) {
			buffer.push(stringFromCharCode(byteValue));
			continue;
		}
		// “Let `code point` be the index code point for `byte − 0x80` in index
		// single-byte.”
		const pointer = byteValue - 0x80;
		if (INDEX_BY_POINTER.has(pointer)) {
			// “Return a code point whose value is `code point`.”
			buffer.push(INDEX_BY_POINTER.get(pointer));
		} else {
			// “If `code point` is `null`, return `error`.”
			buffer.push(decodingError(mode));
		}
	}
	const result = buffer.join('');
	return result;
};

// https://encoding.spec.whatwg.org/#single-byte-encoder
export const encode = (input, options) => {
	let mode;
	if (options && options.mode) {
		mode = options.mode.toLowerCase();
	}
	// Support `fatal` (default) and `replacement` error modes.
	if (mode !== 'fatal' && mode !== 'replacement') {
		mode = 'fatal';
	}
	const length = input.length;
	const result = new Uint16Array(length);
	for (let index = 0; index < length; index++) {
		const codePoint = input.charCodeAt(index);
		// “If `code point` is an ASCII code point, return a byte whose
		// value is `code point`.”
		if (0x00 <= codePoint && codePoint <= 0x7F) {
			result[index] = codePoint;
			continue;
		}
		// “Let `pointer` be the index pointer for `code point` in index
		// single-byte.”
		if (INDEX_BY_CODE_POINT.has(codePoint)) {
			const pointer = INDEX_BY_CODE_POINT.get(codePoint);
			// “Return a byte whose value is `pointer + 0x80`.”
			result[index] = pointer + 0x80;
		} else {
			// “If `pointer` is `null`, return `error` with `code point`.”
			result[index] = encodingError(mode);
		}
	}
	return result;
};

export const labels = [
	'866',
	'cp866',
	'csibm866',
	'ibm866'
];
