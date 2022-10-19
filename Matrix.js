class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = [];

        for (let i = 0; i < this.rows; i++) {
            this.data[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = 0;
            }
        }
    }

    print() {
        console.table(this.data);
    }

    randomize() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = Math.random() * 2 - 1;
            }
        }
    }

    static transpose(m) {
        let res = new Matrix(m.cols, m.rows);

        for (let i = 0; i < m.rows; i++) {
            for (let j = 0; j < m.cols; j++) {
                res.data[j][i] = m.data[i][j];
            }
        }
        return res;
    }

    static multiply(a, b) {
        if (!(a instanceof Matrix) || !(b instanceof Matrix)) throw "Matrix.multiply(a,b) expects a and b to be Matrix objects.";
        if (a.cols != b.rows) throw "Matrix.multiply(a,b) expects a.cols to equal b.rows";

        let res = new Matrix(a.rows, b.cols);
        for (let i = 0; i < a.rows; i++) {
            for (let j = 0; j < b.cols; j++) {
                let tmp = 0;

                for (let k = 0; k < a.cols; k++) {
                    tmp += (a.data[i][k] * b.data[k][j]);
                }
                res.data[i][j] = tmp;
            }
        }
        return res;
    }

    // n: The scalar to be a multiplied to tha matrix
    multiply(n) {
        if (!isNaN(n)) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] *= n;
                }
            }
        } else {
            throw "Matrix.multiply(n) excepts n to be a Number object.";
        }
    }

    map(fn) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = fn(this.data[i][j]);
            }
        }
    }

    add(n) {
        if (!(n instanceof Matrix)) throw "Matrix.add(n) expects n to be a Matrix object.";
        if (n.cols != this.cols || n.rows != this.rows) throw "Matrix.add(n) must use two matrices of the same depth and width.";

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] += n.data[i][j];
            }
        }
    }

    toArray() {
        let res = [];
        for (let i = 0; i < this.rows; i++) {
            res[i] = [];
            for (let j = 0; j < this.cols; j++) {
                res[i][j] = this.data[i][j];
            }
        }
        return res;
    }

    static toMatrix(a) {
        let m = new Matrix(a.length, 1);

        for (let i = 0; i < m.rows; i++) {
            m.data[i][0] = a[i];
        }

        return m;
    }

    copy() {
        let m = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                m.data[i][j] = this.data[i][j];
            }
        }
        return m;
    }
}









