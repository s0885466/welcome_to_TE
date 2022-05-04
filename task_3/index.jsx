import { useState, Fragment, memo, useMemo } from 'react';

const MainComponent = ({
    user = { name: 'unknown', age: null } // default value for `props.user`
}) => {
    const [ _, updateComponent ] = useState(); // change state for force component updating
    const memoizedUser = useMemo(() => user, [user.name, user.age])

    return (
        <Fragment>
            <button onClick={updateComponent}>update MainComponent</button>
            <ChildComponent user={memoizedUser} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ user: { name, age } }) => {
    return (
        <div>user name: {name}, user age: {age}</div>
    );
});
