---
layout: chapter
course: Neural Networks for Machine Learning
chapter_title: Training Neural Networks
---

## Training Neural Networks

Training is the process of adjusting network weights to minimize prediction error.

### Loss Functions

Measure prediction accuracy:

#### Regression
- **Mean Squared Error (MSE)**: L = (1/n)∑(yᵢ - ŷᵢ)²

#### Classification
- **Cross-Entropy**: L = -∑yᵢlog(ŷᵢ)
- **Binary Cross-Entropy**: For binary classification

### Gradient Descent

Optimization algorithm to minimize loss:

w = w - α(∂L/∂w)

where α is the learning rate.

### Backpropagation

Algorithm for computing gradients:
1. Forward pass: Compute outputs
2. Compute loss
3. Backward pass: Compute gradients
4. Update weights

### Optimization Algorithms

- **SGD**: Stochastic Gradient Descent
- **Momentum**: Adds velocity term
- **Adam**: Adaptive learning rates
- **RMSprop**: Root mean square propagation

### Regularization Techniques

Prevent overfitting:
- **L1/L2 Regularization**: Weight penalties
- **Dropout**: Random neuron deactivation
- **Batch Normalization**: Normalize layer inputs
- **Early Stopping**: Stop before overfitting

### Hyperparameters

- Learning rate
- Batch size
- Number of epochs
- Network architecture
- Regularization strength

For more detailed content, visit the [full course on GitBook](https://zshujon.gitbook.io/neural-networks-for-machine-learning/).
