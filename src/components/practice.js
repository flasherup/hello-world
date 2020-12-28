export function main() {
    //const base = new Base();
    //base.method();
    // An object can be passed as the first argument to call or apply and this will be bound to it.
    
    var obj = {a: 'Custom'};

    // We declare a variable and the variable is assigned to the global window as its property.
    this.a = 'Global';

    function whatsThis() {
        return this.a;  // The value of this is dependent on how the function is called
    }

    whatsThis(this);          // 'Global' as this in the function isn't set, so it defaults to the global/window object
    whatsThis.call(obj);  // 'Custom' as this in the function is set to obj
    whatsThis.apply(obj);

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