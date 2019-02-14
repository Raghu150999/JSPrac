class App extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    {Math.random() * 10}
                </h1>
            </div>
        )
    }
}

function clickevent() {
    let btn = document.getElementById('btn');
    if(btn.innerHTML == 'Click Me')
        btn.innerHTML = "I got clicked";
    else
        btn.innerHTML = 'Click Me';
    ReactDOM.render(<App />, document.getElementById('app'));
}