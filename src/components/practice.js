export function main() {
    const base = new Base();
    base.method('test');

}


class Base {
    constructor() {
        this.field = 'just test';

    }

    method(param) {
        console.log('method:',param);
        const testThis = () => {
            console.log('function:', param);
        }
        testThis();
    }
}