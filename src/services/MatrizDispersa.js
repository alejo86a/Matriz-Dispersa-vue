class MatrizDispersa {
    constructor() {

    }
    getMatrizEnTripleta(matriz) {
        let A = [];
        A.push([matriz.length, matriz[0].length, 1]);
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[0].length; j++) {
                if (matriz[i][j] != 0 && matriz[i][j] != "0") {
                    A[0][2] = A[0][2] + 1;
                    A.push([i, j, matriz[i][j]]);
                }
            }
        }
        A.push([matriz.length + 1, matriz[0].length + 1, A[0][2] - 1])
        return A;
    }

    getTranspuestaEnTripleta(m) {
        let T = [];
        for (let i = 1; i < m[0][2]; i++) {
            T.push([m[i][1], m[i][0], m[i][2]]);
        }
        const length = m[0][2];
        T.sort((a, b) => a[0]-b[0])
        T.unshift([m[0][1], m[0][0], m[0][2]]);
        T.push([m[length][1], m[length][0], m[length][2]]);
        return T;
    }

    getMatrizTranspuesta(m) {
        let tm = Array(m[0][0]).fill().map(()=>Array(m[0][1]).fill(0));
        for (let i = 1; i < m[0][2]; i++) {
            tm[m[i][0]][m[i][1]] = m[i][2];
        }
        return tm;
    }
}

export default new MatrizDispersa;
let m = [[1, 2, 3], [0, 5, 0]];
let mt = new MatrizDispersa(m);
const t = mt.getMatrizEnTripleta(m);
const mtt = mt.getTranspuestaEnTripleta(t);
const tm = mt.getMatrizTranspuesta(mtt);
console.log(t);
console.log(mtt);
console.log(tm);