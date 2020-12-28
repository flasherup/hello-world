export function main() {
    const base = new Base();
    base.method();

}


class Base {
    constructor() {
        this.field = 'just test';

    }

    method() {
        console.log('method:',this.field);
        const testThis = () => {
            console.log('function:', this.field);
        }
        testThis();
    }
}