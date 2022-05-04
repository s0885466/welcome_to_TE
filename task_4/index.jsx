import { Component, createRef, forwardRef, useState } from 'react';

class MainComponent extends Component {
    myRef = createRef(); // create simple ref

    toggleChildVisibility = () => this.myRef.current.toggleButton(); // method to hide or show child component

    render() {
        return (
            <>
                <button onClick={this.toggleChildVisibility}>toggle child component</button>
                <ChildComponent ref={this.myRef} />  {/* set ref for controlling child component */}
            </>
        );
    }
};

const ChildComponent = forwardRef((props, ref) => {
    const [state, setState] = useState({ isActive: true });

    const toggleButton = () => setState(prev => ({isActive: !prev.isActive}));

        return (
            this.state.isActive ? <div>child component</div> : null
        );
});
