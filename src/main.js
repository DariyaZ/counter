function Counter(props) {
    return (
        <h2>Count is {props.count}</h2>
    );
}

function Button(props) {
    const { className, label } = props;

    return (
        <button onClick={props.onClick} className={className}>
            {label}
        </button>
    )
}

function Message(props) {
        const { src, alt, className } = props;

        return (
            <React.Fragment>
                <p className={className}>it's ten!!!</p>
                <img src={src} alt={alt} />
            </React.Fragment>
        )
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            count: 0,
            isCounterShown: true
        };

        this.handleDecrementCount = this.handleDecrementCount.bind(this);
        this.handleIncrementCount = this.handleIncrementCount.bind(this);
        this.handleToggleCounter = this.handleToggleCounter.bind(this);
    }

    handleDecrementCount() {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }));
    }

    handleIncrementCount() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    handleToggleCounter() {
        this.setState((prevState) => ({
            isCounterShown: !prevState.isCounterShown
        }));
    }

    render () {
        const { isCounterShown } = this.state;

        return (
            <React.Fragment>
                {
                    isCounterShown
                    ? <Counter count={this.state.count}/>
                    : null
                }
                <div>
                    <Button label='+' onClick={this.handleIncrementCount} className='incrementButton'/>
                    <Button label='-' onClick={this.handleDecrementCount} className='decrementButton'/>
                    <Button label={isCounterShown 
                                   ? 'HIDE' 
                                   : 'SHOW'} 
                                   onClick={this.handleToggleCounter} 
                                   className='toggleButton'
                    />
                </div>
                {
                    (this.state.count >= 10)
                    ? <Message src='images/its_ten.jpg' alt='ten_score' className='messageHeading'/>
                    : null
                }
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#container'));