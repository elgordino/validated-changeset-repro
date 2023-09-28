import { Changeset } from 'validated-changeset';

let objectToWrap = {
    objectProperty: {
        foo: 'bar',
    },
};

let changeset = Changeset(objectToWrap);

let keys = Object.keys(changeset.objectProperty);

if (!keys.includes('foo')) {
    throw Error(`Expected 'foo' in keys of objectProperty. Got '${keys.join(',')}'`);
}
