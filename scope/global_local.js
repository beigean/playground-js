class Sample {
    constructor(GorL) {
        this.gdata = [];
        if (GorL === "g") {
            this.gdisp = true;
            this.ldisp = false;
        }
        else if (GorL === "l") {
            this.gdisp = false;
            this.ldisp = true;
        }
        else {
            this.gdisp = true;
            this.ldisp = true;
        }
    }

    compute(data) {
        const ldata = [];
        this.gdata.push(data);
        ldata.push(data);
        if (this.gdisp) {
            // gdataはグローバル変数(正確にはインスタンス変数)
            // Sampleクラスのインスタンスが生存している間は生存し続ける、つまりデータを保持し続ける
            console.log("global", this.gdata);
        }
        if (this.ldisp) {
            // ldataはローカル変数
            // computeメソッドのブロック内で定義しているため、computeメソッドを抜けた瞬間消滅する
            console.log("local", ldata);
        }
    }
}

GorL = process.argv[2];
sample = new Sample(GorL);
for (let i = 0; i < 10; i++) {
    sample.compute(i);
}