export function App() {
    return  (
        <div>
            <h1>Hello world!</h1>
            <button onClick={testClick}>Test API</button>
        </div>
    );
}


const testClick = (event) => {
    alert("You have clicked the button");
    google.script.run
        .withSuccessHandler(response => console.log("API test call finished", response))
        .withFailureHandler(error => console.log("API test call failed: ", error))
        .testApi("RUN!");
}
