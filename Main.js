var setup = () => {
    let nn = new NeuralNetwork(2, 2, 1);
    let input = [1, 0];
    let output = nn.feedforward(input);
    output.print();
}

setup();